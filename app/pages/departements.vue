<script setup lang="ts">
import { departments } from '~/data/departments'
useSeoMeta({
  title: 'Départements',
  description: 'Découvrez les départements de l’Église Clinique Charismatique — EECC Centrale.'
})
</script>

<template>
  <div>
    <BasePageHero eyebrow="La vie de la communauté" title="Nos départements" description="Découvrez les équipes et les services de l’EECC Centrale." compact />
    <section class="eecc-section">
      <UContainer>
        <div class="mb-10 max-w-3xl">
          <BaseSectionHeading eyebrow="S’engager et servir" title="Les départements de l’église" description="Les informations de chaque département seront présentées ici avec leur mission, leurs activités et leurs coordonnées." />
        </div>
        <div v-if="departments.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DepartmentCard v-for="(department, index) in departments" :key="department.name" :department="department" :index="index" />
        </div>
        <BaseEmptyState
          v-else
          title="Les départements seront bientôt présentés"
          description="La liste officielle des départements et leurs descriptions sera ajoutée après validation par l’église."
          icon="i-lucide-users"
          action-label="Découvrir l’église"
          action-to="/eglise"
        />
      </UContainer>
    </section>
  </div>
</template>
