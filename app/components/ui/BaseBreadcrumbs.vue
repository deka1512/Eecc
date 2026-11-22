<script setup lang="ts">
defineProps<{
  items: Array<{ label: string; to?: string }>
}>()
</script>

<template>
  <nav aria-label="Fil d’Ariane" class="mb-6">
    <ol class="flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--eecc-color-muted)]">
      <li><NuxtLink to="/" class="hover:text-[var(--eecc-color-ink)]">Accueil</NuxtLink></li>
      <li v-for="(item, index) in items" :key="`${item.label}-${index}`" class="flex items-center gap-2">
        <UIcon name="i-lucide-chevron-right" class="size-3 opacity-50" />
        <NuxtLink v-if="item.to && index !== items.length - 1" :to="item.to" class="hover:text-[var(--eecc-color-ink)]">{{ item.label }}</NuxtLink>
        <span v-else aria-current="page" class="text-[var(--eecc-color-ink)]">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>
