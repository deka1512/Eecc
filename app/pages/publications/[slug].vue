<script setup lang="ts">
import { getPublicationBySlug } from '~/services/wordpress/publications'

const route = useRoute()
const slug = String(route.params.slug || '')
const config = useRuntimeConfig()

const { data, pending } = await useAsyncData(`publication-${slug}`, async () => {
  if (!String(config.public.wordpressUrl || '').trim()) return { item: null, state: 'unconfigured' as const }
  try {
    const items = await getPublicationBySlug(slug)
    return { item: items[0] ?? null, state: items.length ? 'ready' as const : 'not-found' as const }
  } catch {
    return { item: null, state: 'error' as const }
  }
})

const publication = computed(() => data.value?.item ?? null)
const titleText = computed(() => publication.value?.title.rendered.replace(/<[^>]*>/g, '') || 'Publication')
const dateLabel = computed(() => {
  if (!publication.value) return ''
  const date = new Date(publication.value.date)
  return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(date)
})
const categoryLabel = computed(() => publication.value?._embedded?.['wp:term']?.[0]?.[0]?.name)

useSeoMeta({
  title: () => titleText.value,
  description: () => publication.value ? publication.value.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160) : 'Publication de l’EECC Centrale.'
})
</script>

<template>
  <div>
    <template v-if="pending">
      <div class="eecc-container py-20"><div class="h-10 max-w-2xl animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /><div class="mt-6 h-4 max-w-sm animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /></div>
    </template>
    <template v-else-if="publication">
      <article>
        <BasePageHero :eyebrow="categoryLabel || 'Publication'" :title="titleText" compact />
        <UContainer class="py-10 sm:py-14">
          <div class="mx-auto max-w-3xl">
            <BaseBreadcrumbs :items="[{ label: 'Publications', to: '/publications' }, { label: titleText }]" />
            <div class="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--eecc-color-muted)]">
              <span v-if="dateLabel">{{ dateLabel }}</span>
              <span v-if="categoryLabel" class="rounded-full bg-[var(--eecc-color-brand-soft)] px-3 py-1">{{ categoryLabel }}</span>
            </div>
            <BaseMedia
              v-if="publication._embedded?.['wp:featuredmedia']?.[0]?.source_url"
              :src="publication._embedded['wp:featuredmedia'][0].source_url"
              :alt="publication._embedded['wp:featuredmedia'][0].alt_text || titleText"
              ratio="16 / 9"
              class="mb-10 rounded-[var(--eecc-radius-panel)]"
            />
            <BaseContent :html="publication.content.rendered" />
            <div class="mt-14 border-t border-[var(--eecc-color-border)] pt-7">
              <BaseButton to="/publications" color="neutral" variant="outline" leading-icon="i-lucide-arrow-left">Retour aux publications</BaseButton>
            </div>
          </div>
        </UContainer>
      </article>
    </template>
    <section v-else class="eecc-container py-20">
      <BaseEmptyState
        :title="data?.state === 'unconfigured' ? 'Espace éditorial en préparation' : data?.state === 'not-found' ? 'Publication introuvable' : 'Publication indisponible'"
        :description="data?.state === 'unconfigured' ? 'La connexion WordPress sera activée lors de la configuration du site.' : data?.state === 'not-found' ? 'Cette publication n’existe pas ou n’est plus disponible.' : 'Impossible de charger cette publication pour le moment.'"
        icon="i-lucide-newspaper"
        action-label="Toutes les publications"
        action-to="/publications"
      />
    </section>
  </div>
</template>
