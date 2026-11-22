# EECC Centrale — front-end public

Front-end du site public de l'Église Clinique Charismatique (EECC Centrale), construit avec Nuxt 4 et WordPress Headless.

## Branche de travail

Branche SSG en préparation : [deployment/ssg-static](https://github.com/deka1512/Eecc/tree/deployment/ssg-static), créée à partir de `design/site-vitrine-premium`.

## Prérequis

- Node.js 22 LTS
- npm 10+
- Visual Studio Code recommandé

## Installation locale

```bash
npm ci
cp .env.example .env
```

Pour utiliser les contenus WordPress, renseigner `NUXT_PUBLIC_WORDPRESS_URL` dans `.env` avec l'URL racine du CMS, sans `/wp-json`. Laisser vide uniquement pour le travail avec les contenus de démonstration.

Démarrer le développement :

```bash
npm run dev
```

## Vérifications et génération statique

```bash
npm run typecheck
npm run generate
```

Les fichiers publiables sont générés dans `.output/public`. Pour les servir localement :

```bash
npx serve .output/public
```

La procédure complète est documentée dans [docs/deployment-static.md](docs/deployment-static.md).

## Stack

- Nuxt 4, Vue 3 et TypeScript
- Nuxt UI, Tailwind CSS et Lucide
- Nuxt SEO
- WordPress REST API en Headless
- Génération statique SSG avec exploration des liens internes

## Organisation

- `app/pages` : pages publiques et routes de détail.
- `app/components/ui` : composants fondamentaux.
- `app/components/editorial` : cartes et composants éditoriaux.
- `app/components/sections` : sections réutilisables.
- `app/data` : identité institutionnelle, pasteur, départements et navigation.
- `app/services/wordpress` : accès à l'API WordPress.
- `app/composables` : chargement des données.
- `app/types` : contrats TypeScript.
- `docs` : documentation technique et design system.

## WordPress Headless

Le site consomme les articles publiés via l'API REST. Les catégories éditoriales attendues comprennent Actualités, Événements, Annonces, Enseignements et Communiqués.

Les événements restent des articles WordPress de la catégorie Événements. Le plugin maison `eecc-core` doit exposer les champs `event_start`, `event_end`, `event_venue`, `event_address`, `registration_url`, `event_status` et `event_poster`.

Les médias sont associés aux pages, publications et événements ; il n'existe pas de médiathèque autonome.

## Important pour le SSG

Le contenu WordPress est figé dans les fichiers générés au moment du build. Toute publication ou modification doit déclencher un nouveau build et un nouveau déploiement. Prévoir un webhook WordPress vers le build hook de l'hébergeur.

Les formulaires nécessitant un traitement serveur devront utiliser un service externe ou une fonction serverless. Voir la documentation de déploiement.

## Informations à valider avant mise en ligne

- `app/data/church.ts` : informations officielles, adresse, contacts, logo et images.
- `app/data/pastor.ts` : identité et contenu pastoral.
- `app/data/departments.ts` : départements et présentations.
- `app/assets/css/main.css` : validation finale de la palette 03 et des polices du set 04.
- WordPress : URL, catégories, champs du plugin `eecc-core` et contenus définitifs.

Ne pas publier tant que les données officielles, les routes générées et les formulaires n'ont pas été vérifiés.
