<script setup lang="ts">
import { church } from '~/data/church'

const { data: publicationData } = await usePublications()
const { data: eventData } = await useEvents()

const latestPublications = computed(() => publicationData.value?.items.slice(0, 3) ?? [])
const nextEvent = computed(() => {
  const now = Date.now()
  return eventData.value?.items.find(event =>
    event.event_status !== 'cancelled' &&
    new Date(event.event_start || event.date).getTime() >= now
  )
})

useSeoMeta({
  title: 'Accueil',
  description: 'Bienvenue sur le site officiel de l’Église Clinique Charismatique — EECC Centrale.'
})
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Église Clinique Charismatique"
      title="Bienvenue à l’EECC Centrale"
      description="Retrouvez les informations de l’église, ses actualités, ses enseignements et les prochains rendez-vous de la communauté."
      :image="church.heroImage"
      image-alt="EECC Centrale"
      primary-label="Découvrir l’église"
      primary-to="/eglise"
      secondary-label="Voir les événements"
      secondary-to="/evenements"
    />

    <section class="eecc-section">
      <UContainer>
        <div class="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-7">
            <BaseSectionHeading
              eyebrow="Bienvenue dans notre espace"
              title="La vie de l’église, au même endroit."
              description="Ce site rassemble les informations institutionnelles et les contenus publiés par l’EECC Centrale pour permettre à chacun de suivre la vie de l’église."
            />
          </div>
          <div class="lg:col-span-4 lg:col-start-9">
            <p class="text-sm leading-7 text-[var(--eecc-color-muted)]">
              Découvrez l’identité de l’église, prenez connaissance de ses départements et retrouvez les annonces, enseignements et événements.
            </p>
            <BaseButton to="/eglise" variant="outline" trailing-icon="i-lucide-arrow-up-right" class="mt-5">En savoir plus</BaseButton>
          </div>
        </div>

        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <NuxtLink to="/eglise" class="group rounded-[var(--eecc-radius-card)] border border-[var(--eecc-color-border)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <span class="flex size-11 items-center justify-center rounded-xl bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-brand)]"><UIcon name="i-lucide-church" class="size-5" /></span>
            <h2 class="mt-5 text-lg font-semibold">Notre église</h2>
            <p class="mt-2 text-sm leading-6 text-[var(--eecc-color-muted)]">Découvrir l’identité et la présentation de l’EECC Centrale.</p>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--eecc-color-brand)]">Découvrir <UIcon name="i-lucide-arrow-up-right" class="size-4" /></span>
          </NuxtLink>
          <NuxtLink to="/departements" class="group rounded-[var(--eecc-radius-card)] border border-[var(--eecc-color-border)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <span class="flex size-11 items-center justify-center rounded-xl bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-brand)]"><UIcon name="i-lucide-users" class="size-5" /></span>
            <h2 class="mt-5 text-lg font-semibold">Nos départements</h2>
            <p class="mt-2 text-sm leading-6 text-[var(--eecc-color-muted)]">Retrouver les différents services et équipes de l’église.</p>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--eecc-color-brand)]">Explorer <UIcon name="i-lucide-arrow-up-right" class="size-4" /></span>
          </NuxtLink>
          <NuxtLink to="/publications" class="group rounded-[var(--eecc-radius-card)] border border-[var(--eecc-color-border)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <span class="flex size-11 items-center justify-center rounded-xl bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-brand)]"><UIcon name="i-lucide-newspaper" class="size-5" /></span>
            <h2 class="mt-5 text-lg font-semibold">Publications</h2>
            <p class="mt-2 text-sm leading-6 text-[var(--eecc-color-muted)]">Consulter les actualités, annonces et enseignements.</p>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--eecc-color-brand)]">Lire <UIcon name="i-lucide-arrow-up-right" class="size-4" /></span>
          </NuxtLink>
        </div>
      </UContainer>
    </section>

    <section v-if="nextEvent" class="bg-white">
      <EventHighlightSection :event="nextEvent" />
    </section>

    <PublicationGridSection
      v-if="latestPublications.length"
      :publications="latestPublications"
      eyebrow="À lire"
      title="Les dernières publications"
      description="Actualités, annonces et ressources publiées par l’église."
      link-to="/publications"
    />

    <CallToActionSection
      eyebrow="Rester informé"
      title="Suivez les nouvelles et les rendez-vous de l’église."
      description="Consultez régulièrement les publications et l’agenda pour retrouver les informations mises à jour."
      button-label="Consulter les publications"
      button-to="/publications"
      tone="strong"
    />
  </div>
</template>
