<script setup lang="ts">
import { church } from '~/data/church'
import { mainNavigation } from '~/data/navigation'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-auto bg-[var(--eecc-color-ink)] text-white">
    <UContainer class="py-14 sm:py-16">
      <div class="grid gap-10 md:grid-cols-12">
        <div class="md:col-span-5">
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <span class="flex size-11 items-center justify-center rounded-xl bg-white/10 text-sm font-bold tracking-tight">EECC</span>
            <span class="text-base font-bold">EECC Centrale</span>
          </NuxtLink>
          <p class="mt-5 max-w-md text-sm leading-7 text-white/65">
            {{ church.description || 'Retrouvez les informations institutionnelles, les actualités, les enseignements et les rendez-vous de l’Église Clinique Charismatique.' }}
          </p>
        </div>
        <div class="md:col-span-3 md:col-start-7">
          <h2 class="text-xs font-bold uppercase tracking-[.16em] text-white/45">Explorer</h2>
          <nav aria-label="Navigation de pied de page" class="mt-5 flex flex-col items-start gap-3">
            <NuxtLink v-for="item in mainNavigation" :key="item.to" :to="item.to" class="text-sm text-white/75 transition hover:text-white">
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>
        <div class="md:col-span-3">
          <h2 class="text-xs font-bold uppercase tracking-[.16em] text-white/45">Nous joindre</h2>
          <div class="mt-5 flex flex-col items-start gap-3 text-sm text-white/75">
            <a v-if="church.phone" :href="`tel:${church.phone}`" class="hover:text-white">{{ church.phone }}</a>
            <a v-if="church.email" :href="`mailto:${church.email}`" class="break-all hover:text-white">{{ church.email }}</a>
            <p v-if="church.address" class="leading-6">{{ church.address }}</p>
            <p v-if="!church.phone && !church.email && !church.address" class="text-white/50">Coordonnées à renseigner.</p>
          </div>
        </div>
      </div>
      <div class="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} EECC Centrale. Tous droits réservés.</p>
        <p>Église Clinique Charismatique</p>
      </div>
    </UContainer>
  </footer>
</template>
