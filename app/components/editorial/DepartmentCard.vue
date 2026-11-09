<script setup lang="ts">
import type { Department } from '~/data/departments'
defineProps<{ department: Department; index?: number }>()
</script>

<template>
  <article class="eecc-card h-full">
    <BaseMedia v-if="department.image" :src="department.image" :alt="department.name" ratio="16 / 10" />
    <div class="p-6 sm:p-7">
      <p class="eecc-eyebrow mb-3">Département {{ index !== undefined ? String(index + 1).padStart(2, '0') : '' }}</p>
      <h2 class="eecc-display text-2xl leading-tight">{{ department.name }}</h2>
      <p class="mt-3 text-sm leading-7 text-[var(--eecc-color-muted)]">{{ department.description }}</p>
      <a v-if="department.contact" :href="`mailto:${department.contact}`" class="mt-5 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline">
        Contacter le département
      </a>
    </div>
  </article>
</template>
