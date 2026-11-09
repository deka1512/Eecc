<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description: string
  icon?: string
  actionLabel?: string
  actionTo?: string
}>(), {
  icon: 'i-lucide-inbox'
})
</script>

<template>
  <div class="rounded-[var(--eecc-radius-panel)] border border-dashed border-[var(--eecc-color-border)] bg-white/70 px-6 py-12 text-center sm:px-10">
    <span class="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-brand)]">
      <UIcon :name="icon" class="size-6" />
    </span>
    <h2 class="mt-5 text-lg font-semibold text-[var(--eecc-color-ink)]">{{ title }}</h2>
    <p class="mx-auto mt-2 max-w-xl text-sm leading-6 text-[var(--eecc-color-muted)]">{{ description }}</p>
    <BaseButton v-if="actionLabel && actionTo" :to="actionTo" variant="outline" class="mt-6">{{ actionLabel }}</BaseButton>
  </div>
</template>
