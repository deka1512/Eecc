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
}>(), {
  imageAlt: '',
  imageSide: 'left'
})
</script>

<template>
  <section class="eecc-section overflow-hidden">
    <UContainer>
      <div class="grid items-center gap-8 md:grid-cols-12 md:gap-0">
        <div
          class="relative z-0 md:col-span-7"
          :class="imageSide === 'right' ? 'md:col-start-6 md:row-start-1' : 'md:col-start-1 md:row-start-1'"
        >
          <BaseMedia :src="image" :alt="imageAlt" ratio="4 / 5" class="rounded-[var(--eecc-radius-panel)]" />
        </div>
        <div
          class="relative z-10 md:col-span-6"
          :class="imageSide === 'right'
            ? 'md:col-start-1 md:row-start-1 md:pr-10'
            : 'md:col-start-7 md:row-start-1 md:-ml-16 md:pl-2'"
        >
          <div class="rounded-[var(--eecc-radius-panel)] border border-[var(--eecc-color-border)] bg-white p-7 shadow-[var(--eecc-shadow-floating)] sm:p-10 lg:p-12">
            <BaseSectionHeading
              :eyebrow="eyebrow"
              :title="title"
              :description="description"
              size="lg"
            />
            <div class="mt-6 text-base leading-7 text-[var(--eecc-color-muted)]">
              <slot />
            </div>
            <BaseButton v-if="buttonLabel && buttonTo" :to="buttonTo" trailing-icon="i-lucide-arrow-up-right" class="mt-8">
              {{ buttonLabel }}
            </BaseButton>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
