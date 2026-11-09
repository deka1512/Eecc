<script setup lang="ts">
import { getCategories } from '~/services/wordpress/categories'
import { getEventBySlug } from '~/services/wordpress/events'

const route = useRoute()
const slug = String(route.params.slug || '')
const config = useRuntimeConfig()

const { data, pending } = await useAsyncData(`event-${slug}`, async () => {
  if (!String(config.public.wordpressUrl || '').trim()) return { item: null, state: 'unconfigured' as const }
  try {
    const categories = await getCategories()
    const eventCategory = categories.find(category =>
      category.slug === 'evenements' ||
      category.slug === 'evenement' ||
      category.name.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '') === 'evenements'
    )
    if (!eventCategory) return { item: null, state: 'category-missing' as const }
    const items = await getEventBySlug(slug, eventCategory.id)
    return { item: items[0] ?? null, state: items.length ? 'ready' as const : 'not-found' as const }
  } catch {
    return { item: null, state: 'error' as const }
  }
})

const event = computed(() => data.value?.item ?? null)
const titleText = computed(() => event.value?.title.rendered.replace(/<[^>]*>/g, '') || 'Événement')
const eventImage = computed(() => event.value?.event_poster || event.value?._embedded?.['wp:featuredmedia']?.[0]?.source_url)
const dateLabel = computed(() => {
  if (!event.value) return ''
  const value = event.value.event_start || event.value.date
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  const options: Intl.DateTimeFormatOptions = event.value.event_start
    ? { dateStyle: 'full', timeStyle: 'short' }
    : { dateStyle: 'full' }
  return new Intl.DateTimeFormat('fr-FR', options).format(date)
})
const endDateLabel = computed(() => {
  if (!event.value?.event_end) return ''
  const date = new Date(event.value.event_end)
  return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(date)
})

useSeoMeta({
  title: () => titleText.value,
  description: () => event.value ? event.value.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160) : 'Événement de l’EECC Centrale.'
})
</script>

<template>
  <div>
    <template v-if="pending">
      <div class="eecc-container py-20"><div class="h-10 max-w-2xl animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /><div class="mt-6 h-4 max-w-sm animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /></div>
    </template>
    <template v-else-if="event">
      <article>
        <BasePageHero eyebrow="Événement EECC" :title="titleText" compact>
          <BaseBadge :color="event.event_status === 'cancelled' ? 'error' : 'neutral'" variant="solid">
            {{ event.event_status === 'cancelled' ? 'Événement annulé' : 'Événement programmé' }}
          </BaseBadge>
        </BasePageHero>
        <UContainer class="py-10 sm:py-14">
          <div class="grid gap-10 lg:grid-cols-12">
            <div class="lg:col-span-8">
              <BaseBreadcrumbs :items="[{ label: 'Événements', to: '/evenements' }, { label: titleText }]" />
              <BaseMedia v-if="eventImage" :src="eventImage" :alt="`Visuel : ${titleText}`" ratio="16 / 9" class="mb-9 rounded-[var(--eecc-radius-panel)]" />
              <BaseContent :html="event.content.rendered" />
              <div class="mt-12 border-t border-[var(--eecc-color-border)] pt-7">
                <BaseButton to="/evenements" color="neutral" variant="outline" leading-icon="i-lucide-arrow-left">Retour à l’agenda</BaseButton>
              </div>
            </div>
            <aside class="h-fit rounded-[var(--eecc-radius-panel)] border border-[var(--eecc-color-border)] bg-white p-6 shadow-[var(--eecc-shadow-card)] sm:p-8 lg:col-span-4">
              <p class="eecc-eyebrow mb-5">Informations pratiques</p>
              <dl class="space-y-5 text-sm">
                <div v-if="dateLabel">
                  <dt class="flex items-center gap-2 font-semibold"><UIcon name="i-lucide-calendar-days" class="size-4" /> Date et heure</dt>
                  <dd class="mt-2 leading-6 text-[var(--eecc-color-muted)]">{{ dateLabel }}</dd>
                  <dd v-if="endDateLabel" class="mt-1 leading-6 text-[var(--eecc-color-muted)]">Jusqu’au {{ endDateLabel }}</dd>
                </div>
                <div v-if="event.event_venue || event.event_address">
                  <dt class="flex items-center gap-2 font-semibold"><UIcon name="i-lucide-map-pin" class="size-4" /> Lieu</dt>
                  <dd v-if="event.event_venue" class="mt-2 text-[var(--eecc-color-muted)]">{{ event.event_venue }}</dd>
                  <dd v-if="event.event_address" class="mt-1 leading-6 text-[var(--eecc-color-muted)]">{{ event.event_address }}</dd>
                </div>
              </dl>
              <BaseButton v-if="event.registration_url && event.event_status !== 'cancelled'" :href="event.registration_url" target="_blank" rel="noopener noreferrer" block trailing-icon="i-lucide-external-link" class="mt-7">S’inscrire</BaseButton>
            </aside>
          </div>
        </UContainer>
      </article>
    </template>
    <section v-else class="eecc-container py-20">
      <BaseEmptyState
        :title="data?.state === 'unconfigured' ? 'Agenda en préparation' : data?.state === 'category-missing' ? 'Catégorie des événements introuvable' : data?.state === 'not-found' ? 'Événement introuvable' : 'Événement indisponible'"
        :description="data?.state === 'unconfigured' ? 'La connexion WordPress sera activée lors de la configuration du site.' : data?.state === 'category-missing' ? 'Vérifiez la catégorie « Événements » dans WordPress.' : data?.state === 'not-found' ? 'Cet événement n’existe pas ou n’est plus disponible.' : 'Impossible de charger cet événement pour le moment.'"
        icon="i-lucide-calendar-days"
        action-label="Retour à l’agenda"
        action-to="/evenements"
      />
    </section>
  </div>
</template>
