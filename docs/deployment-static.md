# Déploiement statique — EECC Centrale

## Principe

Le site est pré-rendu en SSG avec Nuxt. Le HTML, les payloads et les assets sont produits pendant le build dans `.output/public`. L'hébergement final sert uniquement ces fichiers : aucun serveur Node.js n'est nécessaire en production.

Le rendu SSR est conservé pendant la génération. Les données WordPress sont récupérées au build et intégrées aux pages statiques.

## Prérequis

- Node.js 22 LTS et npm 10+
- Une URL publique WordPress accessible depuis la machine de build
- API REST WordPress accessible sur `/wp-json/wp/v2`
- Les contenus à publier déjà en statut « publié »

## Générer le site

```bash
npm install
cp .env.example .env
```

Renseigner dans `.env` l'URL racine du WordPress, sans `/wp-json` :

```dotenv
NUXT_PUBLIC_WORDPRESS_URL=https://cms.exemple.org
```

Puis lancer :

```bash
npm run typecheck
npm run generate
```

Le script `scripts/generate-static.mjs` interroge WordPress, récupère les slugs de tous les articles publiés (pagination REST) et identifie les articles de la catégorie Événements. Il transmet ensuite les routes à Nuxt avant le pré-rendu. Si l'URL WordPress est renseignée mais que l'API est indisponible, le build échoue volontairement au lieu de produire silencieusement un site de démonstration.

Sans URL WordPress, la génération utilise les contenus fictifs de démonstration ; ce mode est réservé au développement et à la CI.

Le site statique est disponible dans `.output/public`. Tester le rendu généré localement :

```bash
npx serve .output/public
```

## Routes générées

- Les pages institutionnelles sont découvertes par le crawler Nuxt à partir des liens internes de l'accueil.
- Les fiches de publication sont pré-générées à partir de tous les articles publiés WordPress.
- Les fiches d'événement sont pré-générées pour les articles de la catégorie Événements.

Vérifier après chaque build la présence des dossiers `publications` et `evenements` dans `.output/public`, ainsi que des fiches correspondant aux contenus WordPress attendus.

## Publication et actualisation WordPress

Un site SSG ne consulte pas WordPress à chaque visite. Une publication, modification ou suppression dans WordPress ne sera visible sur le site public qu'après une nouvelle génération et un nouveau déploiement.

À mettre en place avant la production :

1. Configurer un webhook WordPress (publication, mise à jour, suppression).
2. Le webhook déclenche le build du fournisseur d'hébergement.
3. Le fournisseur injecte `NUXT_PUBLIC_WORDPRESS_URL`, exécute `npm install`, `npm run typecheck`, puis `npm run generate`.
4. Le dossier `.output/public` est publié.

Ne jamais exposer un secret de webhook dans le frontend. Utiliser le mécanisme de build hook sécurisé du fournisseur.

## Hébergement

Publier le contenu de `.output/public` comme racine du site (document root). Activer HTTPS et la compression Brotli/Gzip. Configurer le fournisseur pour servir les fichiers `index.html` des répertoires et renvoyer une vraie page 404 pour les routes inconnues.

Ne pas configurer de fallback global vers `index.html` comme pour une SPA : cela masquerait les vraies erreurs 404 et n'est pas nécessaire pour un site Nuxt pré-rendu.

## Limites à anticiper

- `NUXT_PUBLIC_WORDPRESS_URL` est une configuration de build : la changer nécessite un nouveau build.
- Les formulaires qui doivent enregistrer ou envoyer des données ne peuvent pas être traités par un hébergement de fichiers statiques seul. Ils devront appeler un service externe sécurisé (API, service de formulaires ou fonction serverless).
- Une publication ou modification WordPress nécessite un nouveau build et un nouveau déploiement.
- Ne pas déployer la génération de démonstration sans avoir remplacé les contenus fictifs et validé les données officielles.
