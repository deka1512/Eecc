<script setup lang="ts">
import { departments } from '~/data/departments'
useSeoMeta({
  title: 'Départements',
  description: 'Découvrez les départements et les équipes qui contribuent à la vie de l’EECC Centrale.'
})
const serviceAreas = [
  { icon: 'i-lucide-heart-handshake', title: 'Vie spirituelle', text: 'Louange, adoration, prière et intercession au cœur de la communauté.' },
  { icon: 'i-lucide-users-round', title: 'Accueil et organisation', text: 'Accueil, protocole, sécurité et logistique pour accompagner chaque rassemblement.' },
  { icon: 'i-lucide-megaphone', title: 'Mission et communication', text: 'Évangélisation, jeunesse et communication au service de la vision de l’église.' }
]
</script>
<template>
  <div>
    <BasePageHero eyebrow="Organisation et service" title="Les départements de l’église." description="Découvrez les équipes qui participent à la vie spirituelle, à l’accueil, à l’organisation et à la mission de l’EECC Centrale." image="https://vinepulse.com/wp-content/uploads/2023/08/367414568_692526529581710_6058880740802032878_n.jpeg" image-alt="Équipe africaine de bénévoles réunie devant son lieu de culte" compact />
    <section class="eecc-section">
      <div class="eecc-container">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eecc-eyebrow justify-center">Nos équipes et leurs missions</p>
          <h2 class="eecc-display mt-5 text-4xl leading-tight sm:text-5xl">Chaque département contribue à la vie de l’église.</h2>
          <p class="mt-5 text-base leading-8 text-[var(--eecc-color-muted)]">Les départements rassemblent les personnes qui servent dans les différents domaines de la communauté. Ils collaborent pour préparer les cultes, accompagner les membres, accueillir les visiteurs et soutenir les activités de l’église.</p>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DepartmentCard v-for="(department, index) in departments" :key="department.name" :department="department" :index="index" />
        </div>
      </div>
    </section>
    <section class="bg-[var(--eecc-color-brand)] py-20 text-white sm:py-24">
      <div class="eecc-container">
        <div class="max-w-3xl">
          <p class="eecc-eyebrow text-white/70">Un même engagement</p>
          <h2 class="eecc-display mt-4 text-4xl leading-tight sm:text-5xl">Des services différents, une même mission.</h2>
          <p class="mt-5 text-base leading-8 text-white/75">Chaque équipe apporte sa contribution à une église accueillante, organisée et tournée vers le service.</p>
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-3">
          <article v-for="area in serviceAreas" :key="area.title" class="rounded-2xl border border-white/15 bg-white/10 p-6">
            <UIcon :name="area.icon" class="size-8 text-[var(--eecc-color-accent)]" />
            <h3 class="mt-5 text-xl font-bold">{{ area.title }}</h3>
            <p class="mt-2 text-sm leading-7 text-white/75">{{ area.text }}</p>
          </article>
        </div>
      </div>
    </section>
    <CallToActionSection eyebrow="S’engager" title="Vous souhaitez servir dans un département ?" description="Prenez contact avec l’église pour découvrir les équipes et les modalités de participation." button-label="Contacter l’église" button-to="/contact" />
  </div>
</template>
