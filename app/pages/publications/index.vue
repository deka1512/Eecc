<script setup lang="ts">
const { data, pending } = await usePublications()
const search = ref('')
const selectedCategory = ref<number | null>(null)
const visibleCount = ref(9)
const plainText = (value: string) => value.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&#8217;/g, "'").replace(/\s+/g, ' ').trim()
const filteredPublications = computed(() => {
  const items = data.value?.items ?? []
  const query = search.value.trim().toLocaleLowerCase('fr')
  return items.filter(item => {
    const matchesCategory = selectedCategory.value === null || item.categories?.includes(selectedCategory.value)
    const matchesSearch = !query || (plainText(item.title.rendered) + ' ' + plainText(item.excerpt.rendered)).toLocaleLowerCase('fr').includes(query)
    return matchesCategory && matchesSearch
  })
})
const visiblePublications = computed(() => filteredPublications.value.slice(0, visibleCount.value))
const categoryLabel = (publication: { categories?: number[] }) => {
  const id = publication.categories?.[0]
  return id ? data.value?.categories.find(category => category.id === id)?.name : undefined
}
useSeoMeta({ title: 'Publications', description: 'Actualités, annonces, enseignements et communiqués de l’EECC Centrale.' })
</script>
<template>
  <div>
    <BasePageHero eyebrow="Actualités et ressources" title="Publications" description="Retrouvez les nouvelles, annonces, enseignements et communications de l’EECC Centrale." compact />
    <section class="eecc-section"><UContainer>
      <div v-if="data?.state === 'demo'" role="status" class="mb-8 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950"><strong>Mode démonstration :</strong> les publications affichées sont fictives et servent uniquement à présenter le futur espace éditorial.</div>
      <div class="mb-9 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><BaseSectionHeading eyebrow="Le fil de l’église" title="Toutes les publications" description="Parcourez les contenus et utilisez la recherche pour retrouver un sujet." /><label class="block w-full lg:max-w-sm"><span class="sr-only">Rechercher une publication</span><span class="relative block"><UIcon name="i-lucide-search" class="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--eecc-color-muted)]" /><input v-model="search" type="search" placeholder="Rechercher une publication…" class="w-full rounded-full border border-[var(--eecc-color-border)] bg-white py-3 pl-11 pr-5 text-sm outline-none transition focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"></span></label></div>
      <div v-if="data?.categories.length" class="mb-8 flex flex-wrap gap-2"><button type="button" :aria-pressed="selectedCategory === null" class="rounded-full border px-4 py-2 text-xs font-semibold transition" :class="selectedCategory === null ? 'border-[var(--eecc-color-ink)] bg-[var(--eecc-color-ink)] text-white' : 'border-[var(--eecc-color-border)] bg-white text-[var(--eecc-color-muted)]'" @click="selectedCategory = null; visibleCount = 9">Tout</button><button v-for="category in data.categories" :key="category.id" type="button" :aria-pressed="selectedCategory === category.id" class="rounded-full border px-4 py-2 text-xs font-semibold transition" :class="selectedCategory === category.id ? 'border-[var(--eecc-color-ink)] bg-[var(--eecc-color-ink)] text-white' : 'border-[var(--eecc-color-border)] bg-white text-[var(--eecc-color-muted)] hover:border-[var(--eecc-color-ink)]'" @click="selectedCategory = category.id; visibleCount = 9">{{ category.name }}</button></div>
      <div v-if="pending" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Chargement des publications"><div v-for="item in 6" :key="item" class="overflow-hidden rounded-[var(--eecc-radius-card)] border border-[var(--eecc-color-border)] bg-white"><div class="aspect-[16/10] animate-pulse bg-[var(--eecc-color-surface-muted)]" /><div class="space-y-3 p-6"><div class="h-3 w-1/3 animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /><div class="h-6 w-4/5 animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /><div class="h-3 w-full animate-pulse rounded bg-[var(--eecc-color-surface-muted)]" /></div></div></div>
      <div v-else-if="!filteredPublications.length"><BaseEmptyState :title="data?.items.length ? 'Aucun résultat' : 'Aucune publication pour le moment'" :description="data?.items.length ? 'Essayez un autre mot-clé ou une autre catégorie.' : 'Les prochaines publications de l’EECC Centrale apparaîtront ici.'" icon="i-lucide-search-x" /></div>
      <template v-else><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><PublicationCard v-for="publication in visiblePublications" :key="publication.id" :publication="publication" :category-label="categoryLabel(publication)" /></div><div v-if="visibleCount < filteredPublications.length" class="mt-10 text-center"><BaseButton color="neutral" variant="outline" @click="visibleCount += 9">Afficher plus</BaseButton></div></template>
    </UContainer></section>
  </div>
</template>
