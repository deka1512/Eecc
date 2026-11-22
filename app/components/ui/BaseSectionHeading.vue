<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  size?: 'md' | 'lg'
}>(), {
  align: 'left',
  size: 'lg'
})
</script>

<template>
  <header
    class="max-w-3xl"
    :class="align === 'center' ? 'mx-auto text-center' : 'text-left'"
  >
    <p v-if="eyebrow" class="eecc-eyebrow mb-4" :class="align === 'center' ? 'justify-center' : ''">
      {{ eyebrow }}
    </p>
    <h2
      class="eecc-display font-medium leading-[1.08] text-[var(--eecc-color-ink)]"
      :class="size === 'lg' ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-5 max-w-2xl text-base leading-7 text-[var(--eecc-color-muted)] sm:text-lg"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
      {{ description }}
    </p>
  </header>
</template>
