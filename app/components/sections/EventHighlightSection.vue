<script setup lang="ts">
import type { ChurchEvent } from '~/types/event'
defineProps<{ event: ChurchEvent }>()
</script>

<template>
  <section class="eecc-section">
    <UContainer>
      <div class="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <BaseSectionHeading eyebrow="À l’agenda" title="Prochain rendez-vous" description="Retrouvez les informations pratiques sur les prochains événements de l’église." />
        <BaseButton to="/evenements" variant="outline" trailing-icon="i-lucide-arrow-up-right">Tous les événements</BaseButton>
      </div>
      <div class="mx-auto max-w-4xl"><EventCard :event="event" /></div>
    </UContainer>
  </section>
</template>
