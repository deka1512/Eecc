<script setup lang="ts">
const { data, pending } = await useEvents()
const filter = ref<'upcoming' | 'all'>('upcoming')
const filteredEvents = computed(() => {
  const items = data.value?.items ?? []
  if (filter.value === 'all') return items
  const now = Date.now()
  return items.filter(event => new Date(event.event_start || event.date).getTime() >= now)
})
useSeoMeta({ title: 'Événements', description: 'Retrouvez les événements et rendez-vous de l’Église Clinique Charismatique — EECC Centrale.' })
</script>
<template>
  <div>
    <BasePageHero eyebrow="À l’agenda" title="Événements" description="Retrouvez les rendez-vous et les temps forts annoncés par l’EECC Centrale." compact />
    <section class="eecc-section"><UContainer>
      <div v-if="data?.state === 'demo'" role="status" class="mb-8 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950"><strong>Mode démonstration :</strong> les événements présentés ici sont fictifs. Les dates, lieux et programmes ne constituent pas des annonces officielles.</div>
      <div class="mb-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><BaseSectionHeading eyebrow="Agenda de l’église" title="Les prochains rendez-vous" description="Consultez les dates, les lieux et les informations pratiques de chaque événement." /><div class="flex gap-2" role="group" aria-label="Filtrer les événements"><button type="button" :aria-pressed="filter === 'upcoming'" class="rounded-full border px-4 py-2 text-xs font-semibold" :class="filter === 'upcoming' ? 'border-[var(--eecc-color-ink)] bg-[var(--eecc-color-ink)] text-white' : 'border-[var(--eecc-color-border)] bg-white text-[var(--eecc-color-muted)]'" @click="filter = 'upcoming'">À venir</button><button type="button" :aria-pressed="filter === 'all'" class="rounded-full border px-4 py-2 text-xs font-semibold" :class="filter === 'all' ? 'border-[var(--eecc-color-ink)] bg-[var(--eecc-color-ink)] text-white' : 'border-[var(--eecc-color-border)] bg-white text-[var(--eecc-color-muted)]'" @click="filter = 'all'">Tous</button></div></div>
      <div v-if="pending" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Chargement des événements"><div v-for="item in 6" :key="item" class="overflow-hidden rounded-[var(--eecc-radius-card)] border border-[var(--eecc-color-border)] bg-white"><div class="aspect-[16/10] animate-pulse bg-[var(--eecc-color-surface-muted)]" /><div class="space-y-3 p-6"><div class="h-3 w-1/3 animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /><div class="h-6 w-4/5 animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /></div></div></div>
      <BaseEmptyState v-else-if="!filteredEvents.length" title="Aucun événement à afficher" description="Les prochains rendez-vous de l’EECC Centrale apparaîtront ici dès leur publication." icon="i-lucide-calendar-days" />
      <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><EventCard v-for="event in filteredEvents" :key="event.id" :event="event" /></div>
    </UContainer></section>
  </div>
</template>
