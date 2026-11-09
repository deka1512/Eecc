<script setup lang="ts">
import type { ChurchEvent } from '~/types/event'

const props = defineProps<{ event: ChurchEvent }>()
const image = computed(() => props.event.event_poster || props.event._embedded?.['wp:featuredmedia']?.[0]?.source_url)
const titleText = computed(() => props.event.title.rendered.replace(/<[^>]*>/g, ''))
const dateLabel = computed(() => {
  const value = props.event.event_start || props.event.date
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  const options: Intl.DateTimeFormatOptions = props.event.event_start
    ? { dateStyle: 'long', timeStyle: 'short' }
    : { dateStyle: 'long' }
  return new Intl.DateTimeFormat('fr-FR', options).format(date)
})
const isCancelled = computed(() => props.event.event_status === 'cancelled')
</script>

<template>
  <NuxtLink :to="`/evenements/${event.slug}`" class="group block h-full rounded-[var(--eecc-radius-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eecc-color-brand)] focus-visible:ring-offset-4">
    <article class="eecc-card flex h-full flex-col transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
      <BaseMedia :src="image" :alt="image ? `Visuel : ${titleText}` : ''" ratio="16 / 10" fallback-label="Événement EECC" />
      <div class="flex flex-1 flex-col p-5 sm:p-6">
        <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p v-if="dateLabel" class="text-xs font-semibold text-[var(--eecc-color-muted)]">{{ dateLabel }}</p>
          <BaseBadge :color="isCancelled ? 'error' : 'neutral'">{{ isCancelled ? 'Annulé' : 'À l’agenda' }}</BaseBadge>
        </div>
        <h2 class="eecc-display text-2xl leading-tight text-[var(--eecc-color-ink)] group-hover:underline decoration-1 underline-offset-4" v-html="event.title.rendered" />
        <p v-if="event.event_venue" class="mt-3 flex items-center gap-2 text-sm text-[var(--eecc-color-muted)]">
          <UIcon name="i-lucide-map-pin" class="size-4 shrink-0" />
          {{ event.event_venue }}
        </p>
        <span class="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[var(--eecc-color-brand)]">
          Découvrir l’événement
          <UIcon name="i-lucide-arrow-up-right" class="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  </NuxtLink>
</template>
