<script setup lang="ts">
import type { Publication } from '~/types/publication'
withDefaults(defineProps<{
  publications: Publication[]
  title?: string
  eyebrow?: string
  description?: string
  linkTo?: string
}>(), { title: 'Nos publications', eyebrow: 'Actualités et ressources' })
</script>

<template>
  <section class="eecc-section">
    <UContainer>
      <div class="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <BaseSectionHeading :eyebrow="eyebrow" :title="title" :description="description" />
        <BaseButton v-if="linkTo" :to="linkTo" variant="outline" trailing-icon="i-lucide-arrow-up-right">Toutes les publications</BaseButton>
      </div>
      <div v-if="publications.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PublicationCard v-for="publication in publications" :key="publication.id" :publication="publication" />
      </div>
      <slot v-else />
    </UContainer>
  </section>
</template>
