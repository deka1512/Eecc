<script setup lang="ts">
import { church } from '~/data/church'

const pastoralCollege = [
  { name: 'Pasteur Isidore NSUMBU', role: 'Pasteur principal', image: 'https://images.pexels.com/photos/6276712/pexels-photo-6276712.jpeg?auto=compress&cs=tinysrgb&w=1400' },
  { name: 'Pasteur Daniel KABONGO', role: 'Pasteur associé', image: 'https://images.pexels.com/photos/17612325/pexels-photo-17612325/free-photo-of-portrait-of-man.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { name: 'Pasteure Grâce MBUYI', role: 'Accompagnement pastoral', image: 'https://images.pexels.com/photos/20610322/pexels-photo-20610322/free-photo-of-african-woman-posing-in-a-studio.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { name: 'Pasteur Samuel ILUNGA', role: 'Enseignement biblique', image: 'https://images.pexels.com/photos/7533316/pexels-photo-7533316.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { name: 'Pasteure Esther KALALA', role: 'Prière et intercession', image: 'https://images.pexels.com/photos/33878708/pexels-photo-33878708/free-photo-of-confident-african-woman-portrait-on-dark-background.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { name: 'Pasteur Jean-Pierre TSHIBANGU', role: 'Évangélisation et mission', image: 'https://images.pexels.com/photos/1678821/pexels-photo-1678821.jpeg?auto=compress&cs=tinysrgb&w=1200' }
]

useSeoMeta({
  title: "L’église",
  description: 'Découvrez l’identité, la communauté et les informations de l’Église Clinique Charismatique — EECC Centrale.'
})
</script>

<template>
  <div>
    <BasePageHero
      eyebrow="Qui sommes-nous ?"
      title="Une communauté de foi, de vie et d’espérance."
      description="Bienvenue à l’Église Clinique Charismatique — EECC Centrale. Découvrez notre identité et la vie de notre communauté."
      :image="church.churchImage"
      image-alt="Assemblée africaine réunie dans un temps de culte"
      compact
    />

    <section class="eecc-section">
      <div class="eecc-container grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-6">
          <p class="eecc-eyebrow">Notre identité</p>
          <h2 class="eecc-display mt-5 text-4xl leading-tight sm:text-5xl">Une église tournée vers <span class="text-[var(--eecc-color-brand)]">Dieu et les personnes</span>.</h2>
          <div v-if="church.description" class="eecc-prose mt-7 whitespace-pre-line">{{ church.description }}</div>
          <div v-else class="mt-7 space-y-5 text-base leading-8 text-[var(--eecc-color-muted)]">
            <p>L’EECC Centrale est une communauté chrétienne qui place la foi, la prière, l’enseignement et la communion fraternelle au cœur de sa vie.</p>
            <p>À travers les rencontres et les temps de partage, chacun est invité à découvrir la vie de l’église, à cheminer dans sa foi et à prendre part à une communauté accueillante.</p>
            <p>Les informations institutionnelles détaillées et les éléments officiels de présentation seront enrichis au fur et à mesure de leur validation.</p>
          </div>
        </div>
        <div class="relative lg:col-span-5 lg:col-start-8">
          <div class="absolute -right-6 -top-6 size-40 rounded-full bg-[var(--eecc-color-accent-soft)]" />
          <img :src="church.churchImage" alt="Assemblée africaine réunie dans un moment de partage" class="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--eecc-shadow-floating)]" loading="lazy">
          <div class="absolute -bottom-6 -left-6 max-w-[230px] rounded-2xl bg-[var(--eecc-color-accent)] p-5 text-[var(--eecc-color-ink)] shadow-xl">
            <UIcon name="i-lucide-heart" class="size-6" />
            <p class="mt-2 text-sm font-bold leading-6">La foi se vit aussi dans l’amour et le service.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[var(--eecc-color-brand)] py-20 text-white sm:py-24">
      <div class="eecc-container">
        <div class="max-w-3xl">
          <p class="eecc-eyebrow text-white/70">Notre vie communautaire</p>
          <h2 class="eecc-display mt-5 text-4xl leading-tight sm:text-5xl">Une foi qui prend vie au quotidien.</h2>
          <p class="mt-6 text-base leading-8 text-white/75">La vie de l’église se déploie dans plusieurs dimensions complémentaires : célébrer, apprendre, prier, servir et prendre soin les uns des autres.</p>
        </div>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="item in [
            { icon: 'i-lucide-sunrise', title: 'Célébrer', text: 'Se rassembler pour vivre des temps de louange et de célébration.' },
            { icon: 'i-lucide-book-open', title: 'Grandir', text: 'Approfondir sa foi par l’enseignement et la découverte de la Parole.' },
            { icon: 'i-lucide-hand-heart', title: 'Servir', text: 'Mettre ses talents au service de la communauté et de son prochain.' },
            { icon: 'i-lucide-users-round', title: 'Partager', text: 'Cultiver la fraternité, l’écoute et l’entraide au quotidien.' }
          ]" :key="item.title" class="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
            <UIcon :name="item.icon" class="size-7 text-[var(--eecc-color-accent)]" />
            <h3 class="mt-5 text-lg font-bold">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-white/70">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="eecc-section">
      <div class="eecc-container">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eecc-eyebrow justify-center">Collège pastoral</p>
          <h2 class="eecc-display mt-4 text-4xl leading-tight sm:text-5xl">Une équipe au service de la vision de l’église.</h2>
          <p class="mt-5 text-base leading-8 text-[var(--eecc-color-muted)]">Le collège pastoral accompagne la vie spirituelle, l’enseignement et le service de la communauté.</p>
          <p class="mt-4 text-xs leading-6 text-[var(--eecc-color-muted)]">Les portraits sont des visuels d’illustration. Les cinq membres autres que le pasteur principal, leurs noms et leurs fonctions sont fictifs et devront être validés par l’église.</p>
        </div>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="(member, index) in pastoralCollege" :key="member.name" class="overflow-hidden rounded-[1.5rem] border border-[var(--eecc-color-border)] bg-white shadow-[var(--eecc-shadow-card)]">
            <div class="relative overflow-hidden bg-[var(--eecc-color-surface-muted)]">
              <img :src="member.image" :alt="'Portrait d’illustration de ' + member.name" class="aspect-[4/4] w-full object-cover object-center" loading="lazy">
              <span v-if="index === 0" class="absolute left-4 top-4 rounded-full bg-[var(--eecc-color-brand)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">Pasteur principal</span>
            </div>
            <div class="p-6">
              <h3 class="eecc-display text-2xl leading-tight">{{ member.name }}</h3>
              <p class="mt-2 text-sm font-semibold text-[var(--eecc-color-brand)]">{{ member.role }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="eecc-section bg-[var(--eecc-color-surface-muted)]">
      <div class="eecc-container grid gap-10 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-5">
          <p class="eecc-eyebrow">Nous trouver</p>
          <h2 class="eecc-display mt-4 text-4xl sm:text-5xl">L’EECC Centrale</h2>
          <p class="mt-5 text-base leading-7 text-[var(--eecc-color-muted)]">Les coordonnées ci-dessous sont fictives et servent uniquement à la maquette. Elles seront remplacées par les informations officielles avant publication.</p>
        </div>
        <div class="rounded-[1.5rem] border border-[var(--eecc-color-border)] bg-white p-7 shadow-sm sm:p-9 lg:col-span-6 lg:col-start-7">
          <dl class="grid gap-6 sm:grid-cols-2">
            <div><dt class="text-xs font-extrabold uppercase tracking-wider text-[var(--eecc-color-muted)]">Adresse</dt><dd class="mt-2 font-semibold">{{ church.address || 'À confirmer' }}</dd></div>
            <div><dt class="text-xs font-extrabold uppercase tracking-wider text-[var(--eecc-color-muted)]">Téléphone</dt><dd class="mt-2 font-semibold">{{ church.phone || 'À confirmer' }}</dd></div>
            <div class="sm:col-span-2"><dt class="text-xs font-extrabold uppercase tracking-wider text-[var(--eecc-color-muted)]">E-mail</dt><dd class="mt-2 font-semibold">{{ church.email || 'À confirmer' }}</dd></div>
          </dl>
        </div>
      </div>
    </section>
    <CallToActionSection eyebrow="Découvrir la communauté" title="La vie de l’église se découvre aussi dans ses rencontres." description="Explorez les équipes et les prochains rendez-vous de l’EECC Centrale." button-label="Voir les événements" button-to="/evenements" tone="strong" />
  </div>
</template>
