<template>
  <header class="border-b border-default">
    <UContainer class="flex min-h-18 items-center justify-between gap-6">
      <NuxtLink to="/" class="font-semibold tracking-tight">EECC Centrale</NuxtLink>
      <nav aria-label="Navigation principale" class="hidden items-center gap-5 md:flex">
        <NuxtLink v-for="item in mainNavigation" :key="item.to" :to="item.to" class="text-sm text-muted hover:text-highlighted">{{ item.label }}</NuxtLink>
      </nav>
    </UContainer>
  </header>
</template>
<script setup lang="ts">
import { mainNavigation } from '~/data/navigation'
</script>
