<script setup lang="ts">
import { departments } from '~/data/departments'
useSeoMeta({
  title: 'Départements',
  description: 'Découvrez les équipes, les services et les espaces d’engagement de l’Église Clinique Charismatique — EECC Centrale.'
})
const waysToServe = [
  { icon: 'i-lucide-hand-heart', title: 'S’engager', text: 'Mettre ses compétences et ses talents au service des autres.' },
  { icon: 'i-lucide-users-round', title: 'Faire communauté', text: 'Créer des liens, accueillir et avancer dans un esprit de fraternité.' },
  { icon: 'i-lucide-sprout', title: 'Grandir', text: 'Développer ses dons et participer à la vie de l’église.' }
]
</script>

<template>
  <div>
    <BasePageHero
      eyebrow="La vie de la communauté"
      title="Ensemble, faisons grandir la communauté."
      description="Découvrez les équipes et les services qui contribuent à la vie de l’EECC Centrale."
      image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=85"
      image-alt="Un groupe de personnes réunies dans un moment de partage"
      compact
    />
    <section class="eecc-section">
      <div class="eecc-container">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eecc-eyebrow justify-center">S’engager et servir</p>
          <h2 class="eecc-display mt-5 text-4xl leading-tight sm:text-5xl">Chacun peut apporter quelque chose.</h2>
          <p class="mt-5 text-base leading-8 text-[var(--eecc-color-muted)]">Les départements sont des espaces de participation, de service et de croissance. Ils permettent de mettre les talents en commun et de contribuer à la mission de l’église.</p>
        </div>
        <div v-if="departments.length" class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DepartmentCard v-for="(department, index) in departments" :key="department.name" :department="department" :index="index" />
        </div>
        <div v-else class="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-6">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85" alt="Des personnes qui se retrouvent dans un esprit de fraternité" class="aspect-[5/4] w-full rounded-[1.75rem] object-cover shadow-[var(--eecc-shadow-card)]" loading="lazy">
          </div>
          <div class="lg:col-span-5 lg:col-start-8">
            <p class="eecc-eyebrow">Nos équipes</p>
            <h3 class="eecc-display mt-4 text-3xl leading-tight sm:text-4xl">Des espaces de service à découvrir.</h3>
            <p class="mt-5 text-base leading-8 text-[var(--eecc-color-muted)]">La liste officielle des départements, leurs responsables et leurs missions sera publiée ici après validation par l’église. Nous préférons présenter des informations confirmées plutôt que d’attribuer des noms ou des responsabilités non vérifiés.</p>
            <div class="mt-7 rounded-2xl border border-[var(--eecc-color-border)] bg-[var(--eecc-color-surface-muted)] p-5">
              <p class="text-sm font-bold">Vous souhaitez vous impliquer ?</p>
              <p class="mt-2 text-sm leading-6 text-[var(--eecc-color-muted)]">Renseignez-vous auprès de l’équipe de l’église lors d’une rencontre communautaire.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-[var(--eecc-color-brand)] py-20 text-white">
      <div class="eecc-container">
        <div class="max-w-2xl">
          <p class="eecc-eyebrow text-white/70">Participer à la vie de l’église</p>
          <h2 class="eecc-display mt-4 text-4xl sm:text-5xl">Servir, partager, grandir.</h2>
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-3">
          <article v-for="item in waysToServe" :key="item.title" class="rounded-2xl border border-white/15 bg-white/10 p-6">
            <UIcon :name="item.icon" class="size-8 text-[var(--eecc-color-accent)]" />
            <h3 class="mt-5 text-xl font-bold">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-7 text-white/70">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
    <CallToActionSection eyebrow="La communauté" title="Découvrez l’église et ses prochains rendez-vous." description="La vie communautaire se découvre aussi dans les célébrations et les rencontres." button-label="Consulter les événements" button-to="/evenements" />
  </div>
</template>
