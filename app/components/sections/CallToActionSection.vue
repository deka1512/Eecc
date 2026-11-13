<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  buttonLabel: string
  buttonTo: string
  tone?: 'soft' | 'strong'
}>(), {
  tone: 'soft'
})
</script>

<template>
  <section class="eecc-section">
    <UContainer>
      <div
        class="relative isolate overflow-hidden rounded-[var(--eecc-radius-panel)] p-8 sm:p-12 lg:p-16"
        :class="tone === 'strong'
          ? 'bg-[var(--eecc-color-brand)] text-white'
          : 'border border-[var(--eecc-color-border)] bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-ink)]'"
      >
        <div v-if="tone === 'strong'" class="absolute -right-20 -top-28 -z-10 size-96 rounded-full border-[65px] border-white/10" />
        <div class="max-w-3xl">
          <p v-if="eyebrow" class="eecc-eyebrow mb-5" :class="tone === 'strong' ? 'text-white/70' : ''">{{ eyebrow }}</p>
          <h2 class="eecc-display text-4xl font-medium leading-[1.08] sm:text-5xl">{{ title }}</h2>
          <p v-if="description" class="mt-5 max-w-2xl text-base leading-7" :class="tone === 'strong' ? 'text-white/75' : 'text-[var(--eecc-color-muted)]'">{{ description }}</p>
          <BaseButton :to="buttonTo" :color="tone === 'strong' ? 'warning' : 'primary'" trailing-icon="i-lucide-arrow-up-right" class="mt-8">
            {{ buttonLabel }}
          </BaseButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
