<script setup lang="ts">
const { data, pending } = await useEvents()
const filter = ref<'upcoming' | 'all'>('upcoming')

const filteredEvents = computed(() => {
  const items = data.value?.items ?? []
  if (filter.value === 'all') return items
  const now = Date.now()
  return items.filter(event => new Date(event.event_start || event.date).getTime() >= now)
})

useSeoMeta({
  title: 'Événements',
  description: 'Retrouvez les événements et rendez-vous de l’Église Clinique Charismatique — EECC Centrale.'
})
</script>

<template>
  <div>
    <BasePageHero eyebrow="À l’agenda" title="Événements" description="Retrouvez les rendez-vous et les temps forts annoncés par l’EECC Centrale." compact />
    <section class="eecc-section">
      <UContainer>
        <div class="mb-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <BaseSectionHeading eyebrow="Agenda de l’église" title="Les prochains rendez-vous" description="Consultez les dates, les lieux et les informations pratiques de chaque événement." />
          <div class="flex gap-2" role="group" aria-label="Filtrer les événements">
            <button type="button" :aria-pressed="filter === 'upcoming'" class="rounded-full border px-4 py-2 text-xs font-semibold" :class="filter === 'upcoming' ? 'border-[var(--eecc-color-ink)] bg-[var(--eecc-color-ink)] text-white' : 'border-[var(--eecc-color-border)] bg-white text-[var(--eecc-color-muted)]'" @click="filter = 'upcoming'">À venir</button>
            <button type="button" :aria-pressed="filter === 'all'" class="rounded-full border px-4 py-2 text-xs font-semibold" :class="filter === 'all' ? 'border-[var(--eecc-color-ink)] bg-[var(--eecc-color-ink)] text-white' : 'border-[var(--eecc-color-border)] bg-white text-[var(--eecc-color-muted)]'" @click="filter = 'all'">Tous</button>
          </div>
        </div>

        <div v-if="pending" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Chargement des événements">
          <div v-for="item in 6" :key="item" class="overflow-hidden rounded-[var(--eecc-radius-card)] border border-[var(--eecc-color-border)] bg-white">
            <div class="aspect-[16/10] animate-pulse bg-[var(--eecc-color-surface-muted)]" />
            <div class="space-y-3 p-6"><div class="h-3 w-1/3 animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /><div class="h-6 w-4/5 animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /></div>
          </div>
        </div>
        <BaseEmptyState v-else-if="data?.state === 'unconfigured'" title="L’agenda arrive bientôt" description="La connexion à l’espace éditorial sera activée lorsque WordPress sera configuré." icon="i-lucide-calendar-days" action-label="Découvrir l’église" action-to="/eglise" />
        <BaseEmptyState v-else-if="data?.state === 'category-missing'" title="La catégorie des événements est introuvable" description="Créez ou vérifiez la catégorie « Événements » dans WordPress pour afficher les rendez-vous ici." icon="i-lucide-calendar-x" />
        <BaseEmptyState v-else-if="data?.state === 'error'" title="L’agenda est momentanément indisponible" description="La connexion au service éditorial n’a pas abouti. Merci de revenir un peu plus tard." icon="i-lucide-cloud-off" />
        <BaseEmptyState v-else-if="!filteredEvents.length" title="Aucun événement à afficher" description="Les prochains rendez-vous de l’EECC Centrale apparaîtront ici dès leur publication." icon="i-lucide-calendar-days" />
        <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <EventCard v-for="event in filteredEvents" :key="event.id" :event="event" />
        </div>
      </UContainer>
    </section>
  </div>
</template>
