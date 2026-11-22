<template>
  <div class="flex min-h-screen flex-col">
    <a href="#main-content" class="sr-only z-[100] rounded-full bg-white px-5 py-3 font-semibold text-[var(--eecc-color-ink)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:shadow-xl">
      Aller au contenu
    </a>
    <AppHeader />
    <main id="main-content" class="min-w-0 flex-1" tabindex="-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
