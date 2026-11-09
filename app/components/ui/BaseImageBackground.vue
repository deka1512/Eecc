<script setup lang="ts">
withDefaults(defineProps<{
  src?: string
  alt?: string
  tone?: 'dark' | 'light'
  position?: string
  minHeight?: string
}>(), {
  alt: '',
  tone: 'dark',
  position: 'center',
  minHeight: '28rem'
})
</script>

<template>
  <section class="relative isolate flex items-center overflow-hidden bg-neutral-900 text-white" :style="{ minHeight }">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="absolute inset-0 -z-20 h-full w-full object-cover"
      :style="{ objectPosition: position }"
      loading="lazy"
    >
    <div
      class="absolute inset-0 -z-10"
      :class="tone === 'dark'
        ? 'bg-gradient-to-r from-black/80 via-black/55 to-black/20'
        : 'bg-gradient-to-r from-white/95 via-white/80 to-white/35'"
    />
    <div class="relative z-10 w-full py-16 sm:py-20 lg:py-28" :class="tone === 'light' ? 'text-[var(--eecc-color-ink)]' : 'text-white'">
      <slot />
    </div>
  </section>
</template>
