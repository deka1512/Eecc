# Déploiement statique — EECC Centrale

## Principe

Le site est pré-rendu en SSG avec Nuxt. Le HTML, les payloads et les assets sont produits pendant le build dans `.output/public`. L'hébergement final sert uniquement ces fichiers : aucun serveur Node.js n'est nécessaire en production.

WordPress est une source éditoriale facultative : lorsqu'il est accessible, ses articles et événements sont ajoutés aux routes pré-générées. S'il est absent ou indisponible, le build continue avec les pages et contenus locaux disponibles dans le projet.

## Prérequis

- Node.js 22 LTS et npm 10+
- WordPress facultatif, avec API REST accessible sur `/wp-json/wp/v2` pour importer les contenus éditoriaux

## Générer le site

```bash
npm install
cp .env.example .env
```

L'URL WordPress peut être renseignée dans `.env`, sans `/wp-json` :

```dotenv
NUXT_PUBLIC_WORDPRESS_URL=https://cms.exemple.org
```

Puis lancer :

```bash
npm run typecheck
npm run generate
```

Le script `scripts/generate-static.mjs` tente de récupérer les slugs des articles publiés et d'identifier les événements. En cas d'absence d'URL, d'indisponibilité réseau ou d'erreur de l'API WordPress, il journalise un avertissement et poursuit la génération sans routes éditoriales distantes. Une erreur Nuxt, TypeScript ou de génération du site reste bloquante.

## Routes générées

- Les pages institutionnelles sont découvertes par le crawler Nuxt à partir des liens internes de l'accueil.
- Les fiches de publication sont pré-générées à partir des articles publiés WordPress lorsque l'API est disponible.
- Les fiches d'événement sont pré-générées pour les articles de la catégorie Événements lorsque l'API est disponible.

Vérifier après chaque build les routes produites dans `.output/public`. Les routes éditoriales distantes ne sont présentes que si WordPress a répondu correctement pendant le build.

## Publication et actualisation WordPress

Un site SSG ne consulte pas WordPress à chaque visite. Une publication, modification ou suppression dans WordPress sera visible après une nouvelle génération et un nouveau déploiement, si WordPress est disponible à ce moment-là.

Un webhook WordPress pourra déclencher une génération anticipée, mais il ne sera pas nécessaire au déploiement du site. Ne jamais exposer un secret de webhook dans le frontend.

## Hébergement

Publier le contenu de `.output/public` comme racine du site (document root). Activer HTTPS et la compression Brotli/Gzip. Configurer le fournisseur pour servir les fichiers `index.html` des répertoires et renvoyer une vraie page 404 pour les routes inconnues.

Ne pas configurer de fallback global vers `index.html` comme pour une SPA : cela masquerait les vraies erreurs 404 et n'est pas nécessaire pour un site Nuxt pré-rendu.

## Limites à anticiper

- `NUXT_PUBLIC_WORDPRESS_URL` est une configuration de build : la changer nécessite un nouveau build.
- Une publication ou modification WordPress nécessite une nouvelle génération pour apparaître dans le site statique.
- Les formulaires qui doivent enregistrer ou envoyer des données nécessitent un service externe sécurisé (API, service de formulaires ou fonction serverless).
- La disponibilité de WordPress conditionne l'actualisation des contenus distants, pas la génération et le déploiement des pages du site.
