<script setup lang="ts">
import { pastor } from '~/data/pastor'
useSeoMeta({
  title: 'Le pasteur',
  description: 'Espace pastoral de l’Église Clinique Charismatique — EECC Centrale.'
})
</script>

<template>
  <div>
    <BasePageHero
      eyebrow="Accompagnement pastoral"
      title="Une parole pour nourrir la foi et encourager le chemin."
      description="Retrouvez dans cet espace la présentation et les messages pastoraux de l’EECC Centrale."
      image="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2000&q=85"
      image-alt="Une Bible ouverte dans une atmosphère lumineuse"
      compact
    />
    <section class="eecc-section">
      <div class="eecc-container">
        <PastorProfileCard :profile="pastor" />
        <div v-if="!pastor.name && !pastor.biography && !pastor.message" class="mt-10 grid items-center gap-10 rounded-[1.75rem] bg-[var(--eecc-color-surface-muted)] p-7 sm:p-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1100&q=85" alt="Lumière du matin traversant un paysage paisible" class="aspect-[5/4] w-full rounded-[1.25rem] object-cover" loading="lazy">
          </div>
          <div class="lg:col-span-6 lg:col-start-7">
            <p class="eecc-eyebrow">La mission pastorale</p>
            <h2 class="eecc-display mt-4 text-3xl leading-tight sm:text-4xl">Écouter, accompagner et transmettre.</h2>
            <p class="mt-5 text-base leading-8 text-[var(--eecc-color-muted)]">Cet espace est consacré à la présentation du ministère pastoral, aux paroles d’encouragement et aux messages destinés à accompagner la communauté dans son cheminement spirituel.</p>
            <p class="mt-4 text-base leading-8 text-[var(--eecc-color-muted)]">Le nom, la biographie et les messages du pasteur seront intégrés dès validation des contenus officiels.</p>
          </div>
        </div>
      </div>
    </section>
    <CallToActionSection eyebrow="Ressources et enseignements" title="Retrouvez les messages et les actualités de l’église." description="Les publications permettent de suivre les contenus partagés par l’EECC Centrale." button-label="Lire les publications" button-to="/publications" tone="strong" />
  </div>
</template>
