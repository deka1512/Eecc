<script setup lang="ts">
withDefaults(defineProps<{
  image: string
  imageAlt?: string
  eyebrow?: string
  title: string
  description?: string
  imageSide?: 'left' | 'right'
  buttonLabel?: string
  buttonTo?: string
}>(), { imageAlt: '', imageSide: 'left' })
</script>

<template>
  <section class="eecc-section">
    <UContainer>
      <div class="grid items-center gap-9 md:grid-cols-2 md:gap-14">
        <div :class="imageSide === 'right' ? 'md:order-2' : ''">
          <BaseMedia :src="image" :alt="imageAlt" ratio="4 / 5" class="rounded-[var(--eecc-radius-panel)]" />
        </div>
        <div :class="imageSide === 'right' ? 'md:order-1' : ''">
          <BaseSectionHeading :eyebrow="eyebrow" :title="title" :description="description" />
          <div class="mt-6 text-base leading-7 text-[var(--eecc-color-muted)]"><slot /></div>
          <BaseButton v-if="buttonLabel && buttonTo" :to="buttonTo" trailing-icon="i-lucide-arrow-up-right" class="mt-8">{{ buttonLabel }}</BaseButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
