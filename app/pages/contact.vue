<script setup lang="ts">
import { church } from '~/data/church'
const submitted = ref(false)
const form = reactive({ name: '', email: '', subject: 'Demande d’information', message: '' })
const submitMessage = () => { submitted.value = true }
useSeoMeta({
  title: 'Contact',
  description: 'Retrouvez les informations de contact de l’EECC Centrale et préparez votre message.'
})
</script>
<template>
  <div>
    <BasePageHero eyebrow="Restons en contact" title="Nous sommes heureux de vous lire." description="Une question, une demande d’information ou l’envie de découvrir l’EECC Centrale ? Retrouvez ici les moyens de contact." image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=85" image-alt="Personnes réunies dans un moment de partage" compact />
    <section class="eecc-section">
      <div class="eecc-container">
        <div class="mb-12 max-w-3xl"><p class="eecc-eyebrow">Coordonnées</p><h2 class="eecc-display mt-4 text-4xl leading-tight sm:text-5xl">Les informations pratiques de l’église.</h2><p class="mt-5 text-base leading-8 text-[var(--eecc-color-muted)]">Les coordonnées officielles seront affichées dès leur validation. Les champs encore inconnus ne sont pas remplacés par des informations inventées.</p></div>
        <div class="grid gap-5 md:grid-cols-3">
          <article class="rounded-2xl border border-[var(--eecc-color-border)] bg-white p-6 shadow-[var(--eecc-shadow-card)]"><span class="flex size-12 items-center justify-center rounded-xl bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-brand)]"><UIcon name="i-lucide-map-pin" class="size-6" /></span><h3 class="mt-5 font-bold">Adresse</h3><p class="mt-2 text-sm leading-6 text-[var(--eecc-color-muted)]">{{ church.address || 'Adresse officielle à confirmer.' }}</p></article>
          <article class="rounded-2xl border border-[var(--eecc-color-border)] bg-white p-6 shadow-[var(--eecc-shadow-card)]"><span class="flex size-12 items-center justify-center rounded-xl bg-[var(--eecc-color-accent-soft)] text-[var(--eecc-color-accent-ink)]"><UIcon name="i-lucide-phone" class="size-6" /></span><h3 class="mt-5 font-bold">Téléphone</h3><p class="mt-2 text-sm leading-6 text-[var(--eecc-color-muted)]">{{ church.phone || 'Numéro officiel à confirmer.' }}</p><a v-if="church.phone" :href="'tel:' + church.phone" class="mt-4 inline-flex text-sm font-bold text-[var(--eecc-color-brand)]">Appeler</a></article>
          <article class="rounded-2xl border border-[var(--eecc-color-border)] bg-white p-6 shadow-[var(--eecc-shadow-card)]"><span class="flex size-12 items-center justify-center rounded-xl bg-[var(--eecc-color-highlight-soft)] text-[var(--eecc-color-highlight)]"><UIcon name="i-lucide-mail" class="size-6" /></span><h3 class="mt-5 font-bold">E-mail</h3><p class="mt-2 break-all text-sm leading-6 text-[var(--eecc-color-muted)]">{{ church.email || 'Adresse e-mail officielle à confirmer.' }}</p><a v-if="church.email" :href="'mailto:' + church.email" class="mt-4 inline-flex text-sm font-bold text-[var(--eecc-color-brand)]">Écrire un e-mail</a></article>
        </div>
        <div class="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div class="lg:col-span-5"><p class="eecc-eyebrow">Écrire à l’église</p><h2 class="eecc-display mt-4 text-3xl leading-tight sm:text-4xl">Votre message compte.</h2><p class="mt-5 text-base leading-8 text-[var(--eecc-color-muted)]">Vous pouvez préparer votre message dans ce formulaire de démonstration. Il ne sera pas transmis tant que le service de contact n’aura pas été connecté.</p><BaseButton to="/rendez-vous" variant="outline" trailing-icon="i-lucide-calendar-plus" class="mt-7">Demander un rendez-vous</BaseButton></div>
          <div class="lg:col-span-6 lg:col-start-7">
            <div class="rounded-[1.75rem] border border-[var(--eecc-color-border)] bg-white p-6 shadow-[var(--eecc-shadow-card)] sm:p-9">
              <div role="note" class="mb-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-950">Formulaire de démonstration : aucune donnée n’est envoyée ni enregistrée pour le moment.</div>
              <form class="space-y-5" @submit.prevent="submitMessage">
                <div><label for="contact-name" class="mb-2 block text-sm font-semibold">Nom complet *</label><input id="contact-name" v-model="form.name" required autocomplete="name" class="w-full rounded-xl border border-[var(--eecc-color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"></div>
                <div><label for="contact-email" class="mb-2 block text-sm font-semibold">Adresse e-mail *</label><input id="contact-email" v-model="form.email" type="email" required autocomplete="email" class="w-full rounded-xl border border-[var(--eecc-color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"></div>
                <div><label for="contact-subject" class="mb-2 block text-sm font-semibold">Sujet *</label><select id="contact-subject" v-model="form.subject" required class="w-full rounded-xl border border-[var(--eecc-color-border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"><option>Demande d’information</option><option>Vie de l’église</option><option>Départements et engagement</option><option>Autre demande</option></select></div>
                <div><label for="contact-message" class="mb-2 block text-sm font-semibold">Message *</label><textarea id="contact-message" v-model="form.message" required rows="5" class="w-full resize-y rounded-xl border border-[var(--eecc-color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"></textarea></div>
                <BaseButton type="submit" block trailing-icon="i-lucide-send">Préparer mon message</BaseButton>
              </form>
              <p v-if="submitted" role="status" class="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">Simulation terminée : votre message n’a pas été envoyé. Le formulaire sera activé lorsque l’adresse de réception sera configurée.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
