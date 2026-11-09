<script setup lang="ts">
import type { Publication } from '~/types/publication'

const props = defineProps<{ publication: Publication }>()

const image = computed(() => props.publication._embedded?.['wp:featuredmedia']?.[0]?.source_url)
const imageAlt = computed(() => props.publication._embedded?.['wp:featuredmedia']?.[0]?.alt_text ?? '')
const dateLabel = computed(() => {
  const date = new Date(props.publication.date)
  return Number.isNaN(date.getTime())
    ? ''
    : new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(date)
})
</script>

<template>
  <NuxtLink
    :to="`/publications/${publication.slug}`"
    class="group block rounded-[var(--eecc-radius-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eecc-color-brand)] focus-visible:ring-offset-4"
  >
    <article class="eecc-card h-full transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
      <BaseMedia v-if="image" :src="image" :alt="imageAlt" ratio="16 / 10" />
      <div class="p-5 sm:p-6">
        <p v-if="dateLabel" class="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--eecc-color-muted)]">
          {{ dateLabel }}
        </p>
        <h3 class="eecc-display text-2xl leading-tight text-[var(--eecc-color-ink)] group-hover:underline decoration-1 underline-offset-4" v-html="publication.title.rendered" />
        <div class="mt-3 line-clamp-3 text-sm leading-6 text-[var(--eecc-color-muted)]" v-html="publication.excerpt.rendered" />
        <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Lire la publication
          <UIcon name="i-lucide-arrow-up-right" class="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  </NuxtLink>
</template>
