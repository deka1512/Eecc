# EECC Centrale — front-end public

Front-end du site public de l'Église Clinique Charismatique (EECC Centrale), construit avec Nuxt 4 et prévu pour fonctionner avec WordPress en mode Headless.

## Récupérer le projet

- Branche de travail : [initialisation](https://github.com/deka1512/Eecc/tree/initialisation)
- Pour récupérer le code : ouvrir cette branche sur GitHub, cliquer sur **Code → Download ZIP**, puis décompresser l'archive.
- Ouvrir le dossier décompressé dans Visual Studio Code ou un autre éditeur.

La branche `main` n'est pas modifiée.

## Prérequis

- Node.js 22 LTS recommandé (Node.js 20.19 ou plus récent).
- npm 10 ou plus récent.
- Visual Studio Code recommandé, mais facultatif.

## Installation sur le PC

Dans un terminal ouvert à la racine du dossier :

```bash
npm install
```

Copier ensuite `.env.example` vers un nouveau fichier nommé `.env`.

- Pour travailler sur les pages et les composants sans WordPress, laisser `NUXT_PUBLIC_WORDPRESS_URL` vide.
- Pour connecter WordPress, renseigner l'URL racine du site, sans ajouter `/wp-json`.

Démarrer le serveur local :

```bash
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

## Vérifications

```bash
npm run typecheck
npm run build
```

Le contrôle automatique est aussi disponible dans GitHub : ouvrir l'onglet **Actions**, choisir **Frontend checks**, puis **Run workflow** pour le lancer manuellement.

Pour générer une version statique :

```bash
npm run generate
npm run preview
```

## Stack

- Nuxt 4, Vue 3 et TypeScript
- Nuxt UI, Tailwind CSS et Lucide
- Nuxt SEO
- WordPress REST API pour les contenus éditoriaux

## Organisation du code

- `app/pages` : pages publiques et routes de détail.
- `app/components/ui` : composants fondamentaux.
- `app/components/editorial` : cartes et composants liés aux contenus.
- `app/components/sections` : sections réutilisables.
- `app/data` : identité institutionnelle, pasteur, départements et navigation.
- `app/services/wordpress` : accès à l'API WordPress.
- `app/composables` : chargement et préparation des données.
- `app/types` : contrats TypeScript.
- `docs/design-system.md` : documentation du système design.

## Connexion WordPress

Le site consomme les articles WordPress publiés via l'API REST.

Catégories éditoriales attendues :
- Actualités
- Événements
- Annonces
- Enseignements
- Communiqués

Les événements restent des articles WordPress de la catégorie **Événements**. Le plugin maison `eecc-core` doit exposer dans l'API REST les champs suivants :

- `event_start`
- `event_end`
- `event_venue`
- `event_address`
- `registration_url`
- `event_status` (`scheduled` ou `cancelled`)
- `event_poster`

Les médias sont associés aux pages, publications et événements. Il n'existe pas de médiathèque autonome dans l'interface.

## Éléments à renseigner avant mise en ligne

Les champs institutionnels sont volontairement laissés vides tant que les informations officielles ne sont pas confirmées :

- `app/data/church.ts` : description, adresse, téléphone, e-mail, logo et images.
- `app/data/pastor.ts` : nom, biographie, portrait et message pastoral.
- `app/data/departments.ts` : liste et présentation des départements.
- `app/assets/css/main.css` : valeurs exactes de la palette 03 et polices du set typographique 04.

Ne pas publier le site avant d'avoir renseigné ces contenus, raccordé WordPress et vérifié le rendu final.

## État de validation

Une intégration continue GitHub Actions lance le contrôle TypeScript et le build sur la branche `initialisation`. Les résultats de ces contrôles doivent être verts avant de considérer le front-end comme validé pour la mise en production.
