<script setup lang="ts">
withDefaults(defineProps<{
  image?: string
  imageAlt?: string
  eyebrow?: string
  title: string
  description?: string
  tone?: 'dark' | 'light'
  buttonLabel?: string
  buttonTo?: string
}>(), {
  imageAlt: '',
  tone: 'dark'
})
</script>

<template>
  <BaseImageBackground :src="image" :alt="imageAlt" :tone="tone" min-height="30rem">
    <UContainer>
      <div class="max-w-3xl">
        <p v-if="eyebrow" class="eecc-eyebrow mb-5" :class="tone === 'dark' ? 'text-white/75' : 'text-[var(--eecc-color-muted)]'">
          {{ eyebrow }}
        </p>
        <h1 class="eecc-display text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
          {{ title }}
        </h1>
        <p v-if="description" class="mt-6 max-w-2xl text-base leading-7 sm:text-lg" :class="tone === 'dark' ? 'text-white/80' : 'text-[var(--eecc-color-muted)]'">
          {{ description }}
        </p>
        <BaseButton v-if="buttonLabel && buttonTo" :to="buttonTo" color="primary" trailing-icon="i-lucide-arrow-up-right" class="mt-8">
          {{ buttonLabel }}
        </BaseButton>
        <div v-if="$slots.default" class="mt-8">
          <slot />
        </div>
      </div>
    </UContainer>
  </BaseImageBackground>
</template>
