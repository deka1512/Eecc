<script setup lang="ts">
const today = new Date().toISOString().slice(0, 10)
const submitted = ref(false)
const form = ref({
  name: '',
  email: '',
  phone: '',
  reason: 'Accompagnement pastoral',
  date: '',
  availability: 'Flexible',
  message: ''
})
const submitRequest = () => { submitted.value = true }
useSeoMeta({
  title: 'Rendez-vous',
  description: 'Préparez une demande de rendez-vous auprès de l’EECC Centrale.'
})
</script>
<template>
  <div>
    <BasePageHero eyebrow="Écoute et accompagnement" title="Prenons le temps de nous rencontrer." description="Vous souhaitez échanger, demander un accompagnement pastoral ou obtenir des informations ? Présentez votre demande ici." image="https://vinepulse.com/wp-content/uploads/2023/08/367414568_692526529581710_6058880740802032878_n.jpeg" image-alt="Équipe africaine réunie dans un moment de service" compact />
    <section class="eecc-section">
      <div class="eecc-container grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div class="lg:col-span-5">
          <p class="eecc-eyebrow">Comment ça fonctionne</p><h2 class="eecc-display mt-4 text-4xl leading-tight sm:text-5xl">Un espace pour être écouté.</h2>
          <p class="mt-5 text-base leading-8 text-[var(--eecc-color-muted)]">Cette page présente le parcours de demande de rendez-vous. Le formulaire est actuellement une maquette : il sera connecté à un service de réception lorsque les coordonnées et le système de traitement auront été définis.</p>
          <div class="mt-9 space-y-6">
            <div class="flex gap-4"><span class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--eecc-color-brand-soft)] text-[var(--eecc-color-brand)]"><UIcon name="i-lucide-message-circle" class="size-5" /></span><div><h3 class="font-bold">Présentez votre demande</h3><p class="mt-1 text-sm leading-6 text-[var(--eecc-color-muted)]">Indiquez le motif et le moyen de vous recontacter.</p></div></div>
            <div class="flex gap-4"><span class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--eecc-color-accent-soft)] text-[var(--eecc-color-accent-ink)]"><UIcon name="i-lucide-calendar-clock" class="size-5" /></span><div><h3 class="font-bold">Précisez vos disponibilités</h3><p class="mt-1 text-sm leading-6 text-[var(--eecc-color-muted)]">Une date indicative aidera à organiser la suite.</p></div></div>
            <div class="flex gap-4"><span class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--eecc-color-highlight-soft)] text-[var(--eecc-color-highlight)]"><UIcon name="i-lucide-heart-handshake" class="size-5" /></span><div><h3 class="font-bold">Confirmez avec l’équipe</h3><p class="mt-1 text-sm leading-6 text-[var(--eecc-color-muted)]">Le rendez-vous ne sera effectif qu’après confirmation par l’église.</p></div></div>
          </div>
        </div>
        <div class="lg:col-span-6 lg:col-start-7">
          <div class="rounded-[1.75rem] border border-[var(--eecc-color-border)] bg-white p-6 shadow-[var(--eecc-shadow-card)] sm:p-9">
            <div class="mb-7"><p class="eecc-eyebrow">Demande de rendez-vous</p><h2 class="eecc-display mt-3 text-3xl">Vos informations</h2></div>
            <div role="note" class="mb-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-950">Formulaire de démonstration : aucune donnée n’est envoyée ni enregistrée pour le moment.</div>
            <form class="space-y-5" @submit.prevent="submitRequest">
              <div><label for="appointment-name" class="mb-2 block text-sm font-semibold">Nom complet *</label><input id="appointment-name" v-model="form.name" required autocomplete="name" class="w-full rounded-xl border border-[var(--eecc-color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"></div>
              <div class="grid gap-5 sm:grid-cols-2">
                <div><label for="appointment-email" class="mb-2 block text-sm font-semibold">Adresse e-mail *</label><input id="appointment-email" v-model="form.email" type="email" required autocomplete="email" class="w-full rounded-xl border border-[var(--eecc-color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"></div>
                <div><label for="appointment-phone" class="mb-2 block text-sm font-semibold">Téléphone</label><input id="appointment-phone" v-model="form.phone" type="tel" autocomplete="tel" class="w-full rounded-xl border border-[var(--eecc-color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"></div>
              </div>
              <div><label for="appointment-reason" class="mb-2 block text-sm font-semibold">Motif du rendez-vous *</label><select id="appointment-reason" v-model="form.reason" required class="w-full rounded-xl border border-[var(--eecc-color-border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"><option>Accompagnement pastoral</option><option>Demande de prière</option><option>Information sur l’église</option><option>Autre demande</option></select></div>
              <div class="grid gap-5 sm:grid-cols-2">
                <div><label for="appointment-date" class="mb-2 block text-sm font-semibold">Date souhaitée</label><input id="appointment-date" v-model="form.date" type="date" :min="today" class="w-full rounded-xl border border-[var(--eecc-color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"></div>
                <div><label for="appointment-time" class="mb-2 block text-sm font-semibold">Disponibilité</label><select id="appointment-time" v-model="form.availability" class="w-full rounded-xl border border-[var(--eecc-color-border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15"><option>Flexible</option><option>Matin</option><option>Après-midi</option></select></div>
              </div>
              <div><label for="appointment-message" class="mb-2 block text-sm font-semibold">Votre message</label><textarea id="appointment-message" v-model="form.message" rows="4" class="w-full resize-y rounded-xl border border-[var(--eecc-color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--eecc-color-brand)] focus:ring-2 focus:ring-[var(--eecc-color-brand)]/15" placeholder="Quelques mots pour préciser votre demande…"></textarea></div>
              <BaseButton type="submit" block trailing-icon="i-lucide-arrow-right">Préparer ma demande</BaseButton>
            </form>
            <p v-if="submitted" role="status" class="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">Simulation terminée : aucune demande n’a été transmise. Le formulaire sera activé après connexion au service de contact de l’église.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
