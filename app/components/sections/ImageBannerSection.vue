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
}>(), { imageAlt: '', tone: 'dark' })
</script>

<template>
  <BasePageHero :image="image" :image-alt="imageAlt" :eyebrow="eyebrow" :title="title" :description="description" :tone="tone" compact>
    <BaseButton v-if="buttonLabel && buttonTo" :to="buttonTo" trailing-icon="i-lucide-arrow-up-right">{{ buttonLabel }}</BaseButton>
    <slot />
  </BasePageHero>
</template>
