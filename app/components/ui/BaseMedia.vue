<script setup lang="ts">
withDefaults(defineProps<{
  src?: string
  alt?: string
  ratio?: string
  fit?: 'cover' | 'contain'
  position?: string
  decorative?: boolean
  loading?: 'lazy' | 'eager'
  fallbackLabel?: string
}>(), {
  alt: '',
  ratio: '16 / 9',
  fit: 'cover',
  position: 'center',
  decorative: false,
  loading: 'lazy',
  fallbackLabel: 'Visuel à venir'
})
</script>

<template>
  <div class="eecc-media" :style="{ aspectRatio: ratio }">
    <img
      v-if="src"
      :src="src"
      :alt="decorative ? '' : alt"
      :aria-hidden="decorative ? 'true' : undefined"
      :loading="loading"
      :style="{ objectFit: fit, objectPosition: position }"
    >
    <div v-else class="flex h-full min-h-32 items-center justify-center bg-gradient-to-br from-[var(--eecc-color-surface-muted)] to-[var(--eecc-color-brand-soft)] px-6 text-center text-xs font-semibold uppercase tracking-[.14em] text-[var(--eecc-color-muted)]">
      {{ fallbackLabel }}
    </div>
    <slot />
  </div>
</template>
