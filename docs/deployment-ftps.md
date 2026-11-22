# Déploiement automatique EECC Centrale (FTPS)

Le déploiement de production est déclenché automatiquement à chaque push sur `main`, ou manuellement depuis l'onglet **Actions** de GitHub.

## Secrets GitHub à configurer

Dans **Settings → Secrets and variables → Actions → New repository secret**, créer :

| Secret | Valeur |
| --- | --- |
| `WORDPRESS_URL` | URL racine du WordPress, sans `/wp-json` (ex. `https://cms.example.org`) |
| `FTP_SERVER` | Nom d'hôte FTP fourni par l'hébergeur |
| `FTP_USERNAME` | Identifiant FTP |
| `FTP_PASSWORD` | Mot de passe FTP |
| `FTP_SERVER_DIR` | Dossier distant de publication, avec slash final (ex. `/public_html/`) |
| `FTP_PORT` | Facultatif ; port FTPS fourni par l'hébergeur (21 par défaut) |

Ne jamais placer ces identifiants dans le dépôt, dans un fichier `.env` versionné ou dans le workflow.

## Pipeline

1. Checkout de `main`.
2. Installation des dépendances avec Node défini dans `.nvmrc`.
3. Vérification TypeScript.
4. Génération SSG avec l'URL WordPress réelle.
5. Vérification de `.output/public/index.html`.
6. Archivage du site généré entre les jobs.
7. Synchronisation de `.output/public/` vers le dossier FTP avec **SamKirkland/FTP-Deploy-Action v4.4.0** et FTPS.

Le pipeline échoue avant le transfert si l'URL WordPress ou les paramètres FTP requis sont absents. Le nettoyage global du dossier distant est désactivé (`dangerous-clean-slate: false`).

## Lancement

- Automatique : pousser un commit sur `main`.
- Manuel : **GitHub → Actions → EECC Centrale — Build & déploiement FTPS → Run workflow**.

Le déploiement ne pourra réussir qu'après l'ajout des secrets et la confirmation du chemin distant exact par l'hébergeur. Vérifier également que le serveur prend en charge FTPS explicite sur le port configuré.
