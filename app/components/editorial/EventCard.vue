<script setup lang="ts">
import type { ChurchEvent } from '~/types/event'

const props = defineProps<{ event: ChurchEvent }>()

const dateLabel = computed(() => {
  const date = new Date(props.event.event_start || props.event.date)
  return Number.isNaN(date.getTime())
    ? ''
    : new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(date)
})

const isCancelled = computed(() => props.event.event_status === 'cancelled')
</script>

<template>
  <NuxtLink
    :to="`/evenements/${event.slug}`"
    class="group block rounded-[var(--eecc-radius-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eecc-color-brand)] focus-visible:ring-offset-4"
  >
    <article class="eecc-card h-full transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
      <BaseMedia v-if="event.event_poster" :src="event.event_poster" :alt="`Affiche : ${event.title.rendered.replace(/<[^>]*>/g, '')}`" ratio="16 / 10" />
      <div class="p-5 sm:p-6">
        <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p v-if="dateLabel" class="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--eecc-color-muted)]">
            {{ dateLabel }}
          </p>
          <BaseBadge :color="isCancelled ? 'error' : 'primary'">
            {{ isCancelled ? 'Annulé' : 'À venir' }}
          </BaseBadge>
        </div>
        <h3 class="eecc-display text-2xl leading-tight text-[var(--eecc-color-ink)] group-hover:underline decoration-1 underline-offset-4" v-html="event.title.rendered" />
        <p v-if="event.event_venue" class="mt-3 flex items-center gap-2 text-sm text-[var(--eecc-color-muted)]">
          <UIcon name="i-lucide-map-pin" class="size-4 shrink-0" />
          {{ event.event_venue }}
        </p>
        <div class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Découvrir l’événement
          <UIcon name="i-lucide-arrow-up-right" class="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  </NuxtLink>
</template>
