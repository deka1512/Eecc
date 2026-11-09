<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}>(), { imageAlt: '' })
</script>

<template>
  <BasePageHero :eyebrow="eyebrow" :title="title" :description="description" :image="image" :image-alt="imageAlt">
    <BaseButton v-if="primaryLabel && primaryTo" :to="primaryTo" size="lg" trailing-icon="i-lucide-arrow-up-right">{{ primaryLabel }}</BaseButton>
    <BaseButton v-if="secondaryLabel && secondaryTo" :to="secondaryTo" color="neutral" variant="outline" size="lg" class="border-white/40 text-white hover:bg-white/10">{{ secondaryLabel }}</BaseButton>
  </BasePageHero>
</template>
