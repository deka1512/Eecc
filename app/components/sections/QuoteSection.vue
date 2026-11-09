<script setup lang="ts">
withDefaults(defineProps<{
  quote: string
  attribution?: string
  eyebrow?: string
  tone?: 'soft' | 'dark'
}>(), { tone: 'soft' })
</script>

<template>
  <section class="py-16 sm:py-24" :class="tone === 'dark' ? 'bg-[var(--eecc-color-ink)] text-white' : 'bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-ink)]'">
    <UContainer>
      <div class="mx-auto max-w-4xl text-center">
        <p v-if="eyebrow" class="eecc-eyebrow mb-6 justify-center" :class="tone === 'dark' ? 'text-white/55' : ''">{{ eyebrow }}</p>
        <UIcon name="i-lucide-quote" class="mx-auto size-8 opacity-35" />
        <blockquote class="eecc-display mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">“{{ quote }}”</blockquote>
        <p v-if="attribution" class="mt-7 text-xs font-bold uppercase tracking-[.16em]" :class="tone === 'dark' ? 'text-white/55' : 'text-[var(--eecc-color-muted)]'">{{ attribution }}</p>
      </div>
    </UContainer>
  </section>
</template>
