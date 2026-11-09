<script setup lang="ts">
import { church } from '~/data/church'
useSeoMeta({
  title: "L’église",
  description: 'Présentation de l’Église Clinique Charismatique — EECC Centrale.'
})
</script>

<template>
  <div>
    <BasePageHero
      eyebrow="Qui sommes-nous ?"
      title="L’EECC Centrale"
      description="Découvrez l’Église Clinique Charismatique et retrouvez ici ses informations institutionnelles."
      :image="church.churchImage"
      image-alt="L’Église Clinique Charismatique"
      compact
    />
    <section class="eecc-section">
      <UContainer>
        <div class="grid gap-12 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <BaseSectionHeading eyebrow="Notre identité" title="Une présentation de notre église." />
            <div v-if="church.description" class="mt-7 whitespace-pre-line text-base leading-8 text-[var(--eecc-color-muted)]">{{ church.description }}</div>
            <p v-else class="mt-7 max-w-2xl text-base leading-8 text-[var(--eecc-color-muted)]">
              La présentation officielle de l’EECC Centrale sera publiée dans cet espace après validation des informations institutionnelles.
            </p>
          </div>
          <aside class="h-fit rounded-[var(--eecc-radius-panel)] bg-[var(--eecc-color-brand-soft)] p-7 sm:p-9 lg:col-span-4 lg:col-start-9">
            <p class="eecc-eyebrow mb-4">Informations</p>
            <h2 class="eecc-display text-3xl">EECC Centrale</h2>
            <dl class="mt-6 space-y-5 text-sm">
              <div v-if="church.address">
                <dt class="font-semibold">Adresse</dt>
                <dd class="mt-1 text-[var(--eecc-color-muted)]">{{ church.address }}</dd>
              </div>
              <div v-if="church.phone">
                <dt class="font-semibold">Téléphone</dt>
                <dd class="mt-1"><a :href="`tel:${church.phone}`">{{ church.phone }}</a></dd>
              </div>
              <div v-if="church.email">
                <dt class="font-semibold">E-mail</dt>
                <dd class="mt-1 break-all"><a :href="`mailto:${church.email}`">{{ church.email }}</a></dd>
              </div>
              <p v-if="!church.address && !church.phone && !church.email" class="leading-6 text-[var(--eecc-color-muted)]">
                Les coordonnées officielles seront ajoutées après confirmation.
              </p>
            </dl>
          </aside>
        </div>
      </UContainer>
    </section>
    <CallToActionSection eyebrow="Découvrir la communauté" title="Retrouvez les équipes et les activités de l’église." description="Explorez les départements et consultez les prochains rendez-vous." button-label="Voir les départements" button-to="/departements" />
  </div>
</template>
