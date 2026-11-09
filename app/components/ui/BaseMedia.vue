<script setup lang="ts">
withDefaults(defineProps<{
  src?: string
  alt?: string
  ratio?: string
  fit?: 'cover' | 'contain'
  position?: string
  decorative?: boolean
  loading?: 'lazy' | 'eager'
}>(), {
  alt: '',
  ratio: '16 / 9',
  fit: 'cover',
  position: 'center',
  decorative: false,
  loading: 'lazy'
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
    <div v-else class="flex h-full min-h-32 items-center justify-center text-sm text-[var(--eecc-color-muted)]">
      Image à ajouter
    </div>
    <slot />
  </div>
</template>
