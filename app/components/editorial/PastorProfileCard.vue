<script setup lang="ts">
import type { PastorProfile } from '~/data/pastor'
defineProps<{ profile: PastorProfile }>()
</script>

<template>
  <article class="grid overflow-hidden rounded-[var(--eecc-radius-panel)] border border-[var(--eecc-color-border)] bg-white shadow-[var(--eecc-shadow-card)] md:grid-cols-2">
    <BaseMedia :src="profile.portrait" :alt="profile.name ? `Portrait de ${profile.name}` : 'Portrait du pasteur'" ratio="4 / 5" fallback-label="Portrait à ajouter" />
    <div class="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
      <p class="eecc-eyebrow mb-4">{{ profile.title }}</p>
      <h2 class="eecc-display text-4xl leading-tight sm:text-5xl">{{ profile.name || 'Présentation du pasteur' }}</h2>
      <p v-if="profile.biography" class="mt-6 whitespace-pre-line text-base leading-8 text-[var(--eecc-color-muted)]">{{ profile.biography }}</p>
      <p v-else class="mt-6 text-base leading-8 text-[var(--eecc-color-muted)]">
        La biographie et les informations officielles seront publiées ici dès qu’elles auront été validées par l’église.
      </p>
      <blockquote v-if="profile.message" class="mt-8 border-l-2 border-[var(--eecc-color-brand)] pl-5 font-display text-xl leading-relaxed">
        {{ profile.message }}
      </blockquote>
    </div>
  </article>
</template>
