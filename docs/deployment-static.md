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
npm ci
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

Le site statique est disponible dans `.output/public`. Tester le rendu généré localement :

```bash
npx serve .output/public
```

## Routes dynamiques

Le pré-rendu démarre depuis la page d'accueil et explore les liens internes (`crawlLinks: true`). Les pages de listes Publications et Événements doivent afficher des liens HTML vers chaque fiche. Le crawler peut alors générer les routes `/publications/:slug` et `/evenements/:slug` découvertes depuis ces listes.

Après chaque build, vérifier dans `.output/public` la présence des pages de détail importantes. Une fiche qui n'est reliée par aucun lien interne au moment du build ne sera pas découverte automatiquement.

## Publication et actualisation WordPress

Un site SSG ne consulte pas WordPress à chaque visite. Une publication, modification ou suppression dans WordPress ne sera visible sur le site public qu'après une nouvelle génération et un nouveau déploiement.

À mettre en place avant la production :

1. Configurer un webhook WordPress (publication, mise à jour, suppression).
2. Le webhook déclenche le build du fournisseur d'hébergement.
3. Le fournisseur exécute `npm ci`, `npm run typecheck`, puis `npm run generate`.
4. Le dossier `.output/public` est publié.

Ne jamais exposer un secret de webhook dans le frontend. Utiliser le mécanisme de build hook sécurisé du fournisseur.

## Hébergement

Publier le contenu de `.output/public` comme racine du site (document root). Activer HTTPS et la compression Brotli/Gzip. Configurer le fournisseur pour servir les fichiers `index.html` des répertoires et renvoyer une vraie page 404 pour les routes inconnues.

Ne pas configurer de fallback global vers `index.html` comme pour une SPA : cela masquerait les vraies erreurs 404 et n'est pas nécessaire pour un site Nuxt pré-rendu.

## Limites à anticiper

- `NUXT_PUBLIC_WORDPRESS_URL` est une configuration de build : la changer nécessite un nouveau build.
- Les formulaires qui doivent enregistrer ou envoyer des données ne peuvent pas être traités par un hébergement de fichiers statiques seul. Ils devront appeler un service externe sécurisé (API, service de formulaires ou fonction serverless).
- Les routes de détail doivent être générées à chaque build. Vérifier le résultat après l'ajout d'une nouvelle publication ou d'un nouvel événement.
- Les contenus de démonstration sont utilisés si WordPress n'est pas configuré ou si l'API échoue. Ne pas déployer une génération de production sans vérifier que les données officielles ont bien été récupérées.
