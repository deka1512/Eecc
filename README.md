# EECC Centrale — site public

Frontend Nuxt 4 connecté à WordPress en mode Headless.

## Stack
- Nuxt 4, Vue 3, TypeScript
- Nuxt UI, Tailwind CSS, Lucide
- WordPress REST API pour les contenus éditoriaux

## Démarrage
1. `npm install`
2. Copier `.env.example` vers `.env` et renseigner `NUXT_PUBLIC_WORDPRESS_URL`.
3. `npm run dev`

## Architecture
- `app/components/ui` : composants fondamentaux
- `app/components/editorial` : composants éditoriaux
- `app/components/sections` : sections réutilisables
- `app/data` : identité institutionnelle locale
- `app/services/wordpress` : client et endpoints REST
- `app/composables` : accès aux données
- `app/types` : contrats TypeScript

Les événements restent des articles WordPress natifs de la catégorie Événements, enrichis de champs structurés exposés par `eecc-core`. Les médias sont rattachés aux contenus, sans médiathèque indépendante.

À compléter : tokens exacts de la palette 03 et typographie 04, contenus officiels et schéma REST de `eecc-core`.
