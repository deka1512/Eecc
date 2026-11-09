<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
  tone?: 'dark' | 'light'
  compact?: boolean
}>(), {
  imageAlt: '',
  tone: 'dark',
  compact: false
})
</script>

<template>
  <section class="relative isolate flex items-end overflow-hidden" :class="compact ? 'min-h-[19rem] sm:min-h-[23rem]' : 'min-h-[27rem] sm:min-h-[34rem] lg:min-h-[39rem]'">
    <div class="absolute inset-0 -z-20 bg-[var(--eecc-color-ink)]" />
    <div v-if="!image" class="absolute inset-0 -z-10" style="background: radial-gradient(ellipse at 78% 30%, rgb(255 255 255 / 13%), transparent 42%), radial-gradient(ellipse at 15% 90%, rgb(255 255 255 / 7%), transparent 48%);" />
    <img v-if="image" :src="image" :alt="imageAlt" class="absolute inset-0 -z-10 size-full object-cover" loading="eager">
    <div class="absolute inset-0 -z-10" :class="tone === 'dark'
      ? 'bg-gradient-to-r from-black/80 via-black/55 to-black/20'
      : 'bg-gradient-to-r from-white/95 via-white/80 to-white/25'" />
    <UContainer class="w-full pb-12 pt-28 sm:pb-16 sm:pt-36 lg:pb-20">
      <div class="max-w-4xl" :class="tone === 'dark' ? 'text-white' : 'text-[var(--eecc-color-ink)]'">
        <p v-if="eyebrow" class="eecc-eyebrow mb-5" :class="tone === 'dark' ? 'text-white/70' : 'text-[var(--eecc-color-muted)]'">{{ eyebrow }}</p>
        <h1 class="eecc-display text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">{{ title }}</h1>
        <p v-if="description" class="mt-6 max-w-2xl text-base leading-7 sm:text-lg" :class="tone === 'dark' ? 'text-white/75' : 'text-[var(--eecc-color-muted)]'">{{ description }}</p>
        <div v-if="$slots.default" class="mt-8 flex flex-wrap gap-3"><slot /></div>
      </div>
    </UContainer>
  </section>
</template>
