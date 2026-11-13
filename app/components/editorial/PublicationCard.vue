<script setup lang="ts">
import type { Publication } from '~/types/publication'
const props = defineProps<{ publication: Publication; categoryLabel?: string }>()
const image = computed(() => props.publication._embedded?.['wp:featuredmedia']?.[0]?.source_url)
const imageAlt = computed(() => props.publication._embedded?.['wp:featuredmedia']?.[0]?.alt_text || props.publication.title.rendered.replace(/<[^>]*>/g, ''))
const dateLabel = computed(() => {
  const date = new Date(props.publication.date)
  return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(date)
})
</script>
<template>
  <NuxtLink :to="'/publications/' + publication.slug" class="group block h-full rounded-[var(--eecc-radius-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eecc-color-brand)] focus-visible:ring-offset-4">
    <article class="eecc-card flex h-full flex-col transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
      <BaseMedia :src="image" :alt="imageAlt" ratio="16 / 10" fallback-label="Publication EECC" />
      <div class="flex flex-1 flex-col p-5 sm:p-6">
        <div class="mb-3 flex flex-wrap items-center gap-2">
          <BaseBadge v-if="categoryLabel" size="sm">{{ categoryLabel }}</BaseBadge>
          <BaseBadge v-if="publication.isDemo" color="warning" size="sm">Exemple fictif</BaseBadge>
          <p v-if="dateLabel" class="text-xs font-semibold text-[var(--eecc-color-muted)]">{{ dateLabel }}</p>
        </div>
        <h2 class="eecc-display text-2xl leading-tight text-[var(--eecc-color-ink)] group-hover:underline decoration-1 underline-offset-4" v-html="publication.title.rendered" />
        <div class="mt-3 line-clamp-3 text-sm leading-6 text-[var(--eecc-color-muted)]" v-html="publication.excerpt.rendered" />
        <span class="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[var(--eecc-color-brand)]">
          Lire la publication <UIcon name="i-lucide-arrow-up-right" class="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  </NuxtLink>
</template>
