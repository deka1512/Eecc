<script setup lang="ts">
import { church } from '~/data/church'
import { pastor } from '~/data/pastor'
const { data: publicationData } = await usePublications()
const { data: eventData } = await useEvents()
const latestPublications = computed(() => publicationData.value?.items.slice(0, 3) ?? [])
const nextEvent = computed(() => {
  const now = Date.now()
  return eventData.value?.items.find(event => event.event_status !== 'cancelled' && new Date(event.event_start || event.date).getTime() >= now)
})
const communityImages = [
  { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85', alt: 'Des personnes réunies dans un moment de partage', label: 'La communion', class: 'md:col-span-7 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=85', alt: 'Une assemblée réunie dans un lieu de culte', label: 'La célébration', class: 'md:col-span-5' },
  { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=85', alt: 'Un groupe de personnes échangeant ensemble', label: 'La fraternité', class: 'md:col-span-5' }
]
useSeoMeta({
  title: 'Accueil',
  description: 'Bienvenue à l’Église Clinique Charismatique — EECC Centrale. Découvrez notre communauté, nos actualités et nos rendez-vous.'
})
</script>
<template>
  <div class="overflow-hidden">
    <section class="relative isolate flex min-h-[680px] items-end overflow-hidden bg-[var(--eecc-color-ink)] sm:min-h-[760px] lg:min-h-[820px]">
      <img :src="church.heroImage" alt="Une assemblée réunie pour un temps de célébration" class="absolute inset-0 -z-20 size-full object-cover object-center" fetchpriority="high">
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-[#102D27]/95 via-[#102D27]/70 to-[#102D27]/15" />
      <div class="absolute inset-0 -z-10 bg-gradient-to-t from-[#102D27]/70 via-transparent to-black/10" />
      <div class="eecc-container w-full pb-20 pt-36 sm:pb-24 lg:pb-28">
        <div class="max-w-4xl text-white">
          <p class="eecc-eyebrow mb-7 text-white/80">Église Clinique Charismatique · EECC Centrale</p>
          <h1 class="eecc-display max-w-4xl text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.8rem]">Une foi vivante.<br><span class="text-[var(--eecc-color-accent)]">Une communauté</span> qui grandit.</h1>
          <p class="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">Un lieu de foi, de prière, de transformation et de communion fraternelle. Bienvenue dans l’espace officiel de l’EECC Centrale.</p>
          <div class="mt-10 flex flex-wrap gap-4">
            <BaseButton to="/eglise" size="lg" trailing-icon="i-lucide-arrow-up-right">Découvrir notre église</BaseButton>
            <BaseButton to="/evenements" size="lg" color="neutral" variant="outline" class="border-white/45 bg-white/10 text-white backdrop-blur hover:bg-white/20">Nos prochains rendez-vous</BaseButton>
          </div>
          <div class="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-xs font-semibold uppercase tracking-[.16em] text-white/65">
            <span class="inline-flex items-center gap-2"><span class="size-2 rounded-full bg-[var(--eecc-color-accent)]" /> Foi</span>
            <span class="inline-flex items-center gap-2"><span class="size-2 rounded-full bg-[var(--eecc-color-highlight)]" /> Communion</span>
            <span class="inline-flex items-center gap-2"><span class="size-2 rounded-full bg-white" /> Espérance</span>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 right-8 hidden max-w-[210px] rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-md lg:block">
        <UIcon name="i-lucide-heart-handshake" class="size-7 text-[var(--eecc-color-accent)]" />
        <p class="mt-3 text-sm font-semibold">Vous êtes les bienvenus</p><p class="mt-1 text-xs leading-5 text-white/70">Prenez le temps de découvrir notre communauté.</p>
      </div>
    </section>

    <section class="relative z-10 -mt-1 bg-[var(--eecc-color-canvas)]">
      <div class="eecc-container grid gap-5 py-8 sm:grid-cols-3">
        <NuxtLink to="/eglise" class="eecc-feature-link group"><span class="eecc-feature-icon bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-brand)]"><UIcon name="i-lucide-church" class="size-6" /></span><span class="min-w-0 flex-1"><strong>Notre église</strong><small>Notre identité et notre vision</small></span><UIcon name="i-lucide-arrow-up-right" class="size-5 text-[var(--eecc-color-muted)]" /></NuxtLink>
        <NuxtLink to="/departements" class="eecc-feature-link group"><span class="eecc-feature-icon bg-[var(--eecc-color-accent-soft)] text-[var(--eecc-color-accent-ink)]"><UIcon name="i-lucide-users-round" class="size-6" /></span><span class="min-w-0 flex-1"><strong>Nos départements</strong><small>Servir et grandir ensemble</small></span><UIcon name="i-lucide-arrow-up-right" class="size-5 text-[var(--eecc-color-muted)]" /></NuxtLink>
        <NuxtLink to="/#ministere-pastoral" class="eecc-feature-link group"><span class="eecc-feature-icon bg-[var(--eecc-color-highlight-soft)] text-[var(--eecc-color-highlight)]"><UIcon name="i-lucide-book-open" class="size-6" /></span><span class="min-w-0 flex-1"><strong>Accompagnement pastoral</strong><small>Paroles et écoute</small></span><UIcon name="i-lucide-arrow-up-right" class="size-5 text-[var(--eecc-color-muted)]" /></NuxtLink>
      </div>
    </section>

    <section class="eecc-section">
      <div class="eecc-container grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="relative lg:col-span-6">
          <div class="absolute -left-8 -top-8 size-36 rounded-full bg-[var(--eecc-color-accent-soft)] blur-2xl" />
          <img :src="church.churchImage" alt="Des membres d’une communauté réunis dans un moment de partage" class="relative z-10 aspect-[5/4] w-full rounded-[2rem] object-cover shadow-[var(--eecc-shadow-floating)]" loading="lazy">
          <div class="absolute -bottom-7 -right-4 z-20 max-w-[220px] rounded-2xl bg-[var(--eecc-color-brand)] p-5 text-white shadow-xl sm:-right-8"><UIcon name="i-lucide-sparkles" class="size-6 text-[var(--eecc-color-accent)]" /><p class="mt-2 text-sm font-semibold leading-6">Grandir dans la foi, ensemble et chaque jour.</p></div>
        </div>
        <div class="lg:col-span-5 lg:col-start-8">
          <p class="eecc-eyebrow">Bienvenue chez nous</p>
          <h2 class="eecc-display mt-5 text-4xl font-medium leading-tight sm:text-5xl">Plus qu’un lieu, <span class="text-[var(--eecc-color-brand)]">une famille</span>.</h2>
          <p class="mt-6 text-base leading-8 text-[var(--eecc-color-muted)]">L’EECC Centrale vous accueille dans un espace où la foi se partage, où chacun peut trouver sa place et où la vie communautaire prend tout son sens.</p>
          <p class="mt-4 text-base leading-8 text-[var(--eecc-color-muted)]">À travers les célébrations, la prière, l’enseignement et le service, nous avançons ensemble dans une dynamique de croissance spirituelle et de solidarité.</p>
          <BaseButton to="/eglise" variant="outline" trailing-icon="i-lucide-arrow-up-right" class="mt-8">En savoir plus sur l’église</BaseButton>
        </div>
      </div>
    </section>

    <section id="ministere-pastoral" class="eecc-section scroll-mt-24 bg-white">
      <div class="eecc-container grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div class="relative lg:col-span-5">
          <img src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1400&q=85" alt="Bible ouverte dans une lumière douce, visuel illustratif du ministère pastoral" class="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-[var(--eecc-shadow-floating)]" loading="lazy">
          <span class="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[var(--eecc-color-muted)]">Visuel d’illustration</span>
        </div>
        <div class="lg:col-span-6 lg:col-start-7">
          <p class="eecc-eyebrow">Accompagnement pastoral</p>
          <h2 class="eecc-display mt-4 text-4xl leading-tight sm:text-5xl">Une parole qui accompagne la foi et le chemin de chacun.</h2>
          <p v-if="pastor.name" class="mt-5 text-lg font-bold">{{ pastor.name }}<span v-if="pastor.title"> · {{ pastor.title }}</span></p>
          <p class="mt-5 text-base leading-8 text-[var(--eecc-color-muted)]">{{ pastor.biography || 'Cet espace présente le ministère pastoral, l’écoute et l’accompagnement spirituel au sein de l’EECC Centrale. Le nom, la biographie et le portrait officiels seront ajoutés après validation par l’église.' }}</p>
          <blockquote v-if="pastor.message" class="mt-7 border-l-2 border-[var(--eecc-color-accent)] pl-5 font-display text-xl leading-relaxed">{{ pastor.message }}</blockquote>
          <div class="mt-8 flex flex-wrap gap-3"><BaseButton to="/rendez-vous" trailing-icon="i-lucide-arrow-up-right">Demander un rendez-vous</BaseButton><BaseButton to="/publications" color="neutral" variant="outline">Lire les publications</BaseButton></div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-[var(--eecc-color-brand)] py-20 text-white sm:py-28">
      <div class="absolute -right-24 -top-32 size-[28rem] rounded-full border-[70px] border-white/5" />
      <div class="eecc-container relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-7"><p class="eecc-eyebrow text-white/65">Notre cœur de communauté</p><h2 class="eecc-display mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">Une communauté qui célèbre, partage et sert.</h2></div>
        <p class="max-w-xl text-base leading-8 text-white/75 lg:col-span-4 lg:col-start-9">La vie de l’église se construit dans les rencontres, les temps de célébration, l’écoute et l’engagement de chacun.</p>
      </div>
      <div class="eecc-container relative mt-12 grid gap-5 md:grid-cols-12 md:grid-rows-2">
        <NuxtLink v-for="item in communityImages" :key="item.label" to="/eglise" class="group relative min-h-[260px] overflow-hidden rounded-[1.5rem] md:min-h-[290px]" :class="item.class">
          <img :src="item.src" :alt="item.alt" class="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-8"><span class="eecc-display text-2xl sm:text-3xl">{{ item.label }}</span><span class="flex size-10 items-center justify-center rounded-full border border-white/50 bg-white/10 backdrop-blur"><UIcon name="i-lucide-arrow-up-right" /></span></div>
        </NuxtLink>
      </div>
    </section>

    <section class="eecc-section">
      <div class="eecc-container">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div class="max-w-2xl"><p class="eecc-eyebrow">Grandir et servir</p><h2 class="eecc-display mt-4 text-4xl leading-tight sm:text-5xl">Chacun a une place dans la communauté.</h2><p class="mt-5 max-w-xl text-base leading-7 text-[var(--eecc-color-muted)]">La vie de l’église se nourrit des talents, des engagements et de la présence de chacun.</p></div>
          <BaseButton to="/departements" variant="outline" trailing-icon="i-lucide-arrow-up-right">Explorer les départements</BaseButton>
        </div>
        <div class="mt-12 grid gap-5 md:grid-cols-3">
          <article class="eecc-ministry-card"><div class="eecc-ministry-number text-[var(--eecc-color-brand)]">01</div><UIcon name="i-lucide-hand-heart" class="mt-8 size-8 text-[var(--eecc-color-brand)]" /><h3>Servir avec ses dons</h3><p>Mettre ses talents au service des autres et contribuer à la vie de la communauté.</p></article>
          <article class="eecc-ministry-card"><div class="eecc-ministry-number text-[var(--eecc-color-highlight)]">02</div><UIcon name="i-lucide-users" class="mt-8 size-8 text-[var(--eecc-color-highlight)]" /><h3>Grandir ensemble</h3><p>Créer des liens, partager les expériences et avancer dans un esprit de fraternité.</p></article>
          <article class="eecc-ministry-card"><div class="eecc-ministry-number text-[var(--eecc-color-accent-ink)]">03</div><UIcon name="i-lucide-heart-handshake" class="mt-8 size-8 text-[var(--eecc-color-accent-ink)]" /><h3>Prendre soin</h3><p>Faire vivre l’accueil, l’écoute, l’entraide et l’attention portée à chaque personne.</p></article>
        </div>
      </div>
    </section>

    <section v-if="nextEvent" class="bg-[var(--eecc-color-surface-muted)]"><EventHighlightSection :event="nextEvent" /></section>
    <PublicationGridSection v-if="latestPublications.length" :publications="latestPublications" eyebrow="Actualités et enseignements" title="Les dernières nouvelles de la communauté" description="Retrouvez les annonces, les temps forts et les ressources partagées par l’EECC Centrale." link-to="/publications" />

    <section class="relative isolate overflow-hidden py-24 sm:py-32">
      <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=85" alt="" class="absolute inset-0 -z-20 size-full object-cover" loading="lazy"><div class="absolute inset-0 -z-10 bg-[#102D27]/85" />
      <div class="eecc-container relative text-center text-white"><p class="eecc-eyebrow justify-center text-white/65">Un premier pas</p><h2 class="eecc-display mx-auto mt-5 max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">Nous serions heureux de vous accueillir.</h2><p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75">Que vous découvriez l’église ou que vous souhaitiez renouer avec la communauté, prenez le temps de parcourir nos informations et nos prochains rendez-vous.</p>
        <div class="mt-9 flex flex-wrap justify-center gap-3"><BaseButton to="/rendez-vous" size="lg">Prendre rendez-vous</BaseButton><BaseButton to="/contact" size="lg" color="neutral" variant="outline" class="border-white/40 text-white hover:bg-white/10">Nous contacter</BaseButton></div>
      </div>
    </section>
  </div>
</template>
