<script setup lang="ts">
import { pastor } from '~/data/pastor'
useSeoMeta({
  title: 'Le pasteur',
  description: 'Présentation pastorale de l’Église Clinique Charismatique — EECC Centrale.'
})
</script>

<template>
  <div>
    <BasePageHero eyebrow="Accompagnement pastoral" title="Le pasteur" description="Retrouvez dans cet espace la présentation et le message pastoral de l’EECC Centrale." compact />
    <section class="eecc-section">
      <UContainer>
        <PastorProfileCard :profile="pastor" />
      </UContainer>
    </section>
    <CallToActionSection eyebrow="La communauté" title="Découvrez également les départements de l’église." description="Retrouvez les différents services et équipes qui participent à la vie de l’EECC Centrale." button-label="Découvrir les départements" button-to="/departements" />
  </div>
</template>
