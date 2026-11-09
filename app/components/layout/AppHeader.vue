<script setup lang="ts">
import { mainNavigation } from '~/data/navigation'

const route = useRoute()
const menuOpen = ref(false)

watch(() => route.fullPath, () => { menuOpen.value = false })

const isActive = (to: string) => to === '/'
  ? route.path === '/'
  : route.path === to || route.path.startsWith(`${to}/`)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[var(--eecc-color-border)] bg-white/95 backdrop-blur-xl">
    <UContainer class="flex min-h-[4.75rem] items-center justify-between gap-5">
      <NuxtLink to="/" class="group inline-flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4" aria-label="EECC Centrale, accueil">
        <span class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--eecc-color-ink)] text-sm font-bold tracking-tight text-white">EECC</span>
        <span class="min-w-0">
          <span class="block truncate text-sm font-bold tracking-tight text-[var(--eecc-color-ink)] sm:text-base">EECC Centrale</span>
          <span class="hidden text-[10px] font-semibold uppercase tracking-[.15em] text-[var(--eecc-color-muted)] sm:block">Église Clinique Charismatique</span>
        </span>
      </NuxtLink>

      <nav aria-label="Navigation principale" class="hidden items-center gap-1 lg:flex">
        <NuxtLink
          v-for="item in mainNavigation"
          :key="item.to"
          :to="item.to"
          :aria-current="isActive(item.to) ? 'page' : undefined"
          class="rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-[var(--eecc-color-surface-muted)] hover:text-[var(--eecc-color-ink)]"
          :class="isActive(item.to) ? 'bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-ink)]' : 'text-[var(--eecc-color-muted)]'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden lg:block">
        <BaseButton to="/evenements" size="sm" trailing-icon="i-lucide-arrow-up-right">Nos rendez-vous</BaseButton>
      </div>

      <UButton
        class="lg:hidden"
        color="neutral"
        variant="ghost"
        :icon="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
        :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        @click="menuOpen = !menuOpen"
      />
    </UContainer>

    <div v-if="menuOpen" id="mobile-navigation" class="border-t border-[var(--eecc-color-border)] bg-white px-5 py-4 lg:hidden">
      <nav aria-label="Navigation mobile" class="mx-auto flex max-w-7xl flex-col gap-1">
        <NuxtLink
          v-for="item in mainNavigation"
          :key="item.to"
          :to="item.to"
          :aria-current="isActive(item.to) ? 'page' : undefined"
          class="rounded-xl px-4 py-3 text-sm font-semibold"
          :class="isActive(item.to) ? 'bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-ink)]' : 'text-[var(--eecc-color-muted)]'"
        >
          {{ item.label }}
        </NuxtLink>
        <BaseButton to="/evenements" block class="mt-2">Nos rendez-vous</BaseButton>
      </nav>
    </div>
  </header>
</template>
