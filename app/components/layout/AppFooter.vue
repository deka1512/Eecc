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
          <div class="mt-7">
            <h2 class="text-xs font-bold uppercase tracking-[.16em] text-white/45">Réseaux sociaux</h2>
            <div class="mt-3 flex items-center gap-3">
              <a v-for="social in church.socialLinks" :key="social.label" :href="social.url" :aria-label="social.label" :title="social.label" target="_blank" rel="noopener noreferrer" class="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/50 hover:bg-white/20">
                <UIcon :name="social.icon" class="size-4" />
              </a>
            </div>
            <p class="mt-3 text-[10px] leading-5 text-white/45">Liens de démonstration à remplacer par les pages officielles.</p>
          </div>
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
            <template v-if="church.contactsAreDemo">
              <p>{{ church.phone }}</p>
              <p class="break-all">{{ church.email }}</p>
              <p class="leading-6">{{ church.address }}</p>
            </template>
            <template v-else>
              <a v-if="church.phone" :href="'tel:' + church.phone" class="hover:text-white">{{ church.phone }}</a>
              <a v-if="church.email" :href="'mailto:' + church.email" class="break-all hover:text-white">{{ church.email }}</a>
              <p v-if="church.address" class="leading-6">{{ church.address }}</p>
            </template>
          </div>
          <p v-if="church.contactsAreDemo" class="mt-4 text-[10px] leading-5 text-white/45">Coordonnées fictives de démonstration, à remplacer avant publication.</p>
        </div>
      </div>
      <div class="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} EECC Centrale. Tous droits réservés.</p>
        <p>Made by Deka</p>
      </div>
    </UContainer>
  </footer>
</template>
