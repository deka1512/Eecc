# Système design et bibliothèque UI — EECC Centrale

## Direction artistique

Le site public de l’Église Clinique Charismatique doit exprimer une identité spirituelle, accueillante et institutionnelle. Le design privilégie une lecture éditoriale claire, une présence visuelle équilibrée et des compositions photographiques soignées.

Décisions retenues :
- Style spirituel, avec une expression institutionnelle sobre.
- Interface publique en français.
- Médias intégrés aux publications, événements et pages ; aucune médiathèque autonome.
- Images de fond et images superposées possibles, avec voiles de contraste pour maintenir la lisibilité.
- Mise en page responsive, navigation mobile, focus clavier et réduction des animations.

## Tokens

Les tokens sont centralisés dans `app/assets/css/main.css` :
- Couleurs : `--eecc-color-canvas`, `surface`, `surface-muted`, `ink`, `muted`, `border`, `brand`, `brand-soft`.
- Typographie : `--eecc-font-body` et `--eecc-font-display`.
- Formes et profondeur : `--eecc-radius-card`, `--eecc-radius-panel`, `--eecc-shadow-card`, `--eecc-shadow-floating`.

**Verrouillage de marque encore requis :** les références hexadécimales de la palette 03 et les noms/fichiers de police du set typographique 04 doivent remplacer les valeurs neutres provisoires. Les composants utilisent les tokens sémantiques pour que ce remplacement reste centralisé. Les composants d’action utilisent une base neutre en attendant ce raccordement, afin de ne pas imposer une couleur de marque non validée.

## Composants fondamentaux

| Composant | Rôle |
| --- | --- |
| `BaseButton` | Actions, liens internes/externes, tailles et variantes |
| `BaseBadge` | Statuts, catégories et repères courts |
| `BaseCard` | Conteneur de contenu avec zones média, en-tête et pied |
| `BaseSectionHeading` | Surtitre, titre et description de section |
| `BaseMedia` | Image responsive, ratio, cadrage et texte alternatif |
| `BaseImageBackground` | Image de fond avec voile de contraste |
| `BasePageHero` | En-tête de page avec image optionnelle |
| `BaseEmptyState` | États vides, erreurs et contenus non configurés |
| `BaseContent` | Rendu du contenu HTML provenant de WordPress |
| `BaseBreadcrumbs` | Fil d’Ariane accessible |

## Composants éditoriaux

- `PublicationCard` : carte d’article WordPress, image, date, catégorie et extrait.
- `EventCard` : carte d’événement, date, lieu, statut et visuel.
- `DepartmentCard` : présentation d’un département institutionnel.
- `PastorProfileCard` : portrait, biographie et message pastoral.

## Sections réutilisables

- `HeroSection` : hero principal avec deux actions possibles.
- `ImageBannerSection` : bannière photographique compacte.
- `SplitImageSection` : composition image/texte en deux colonnes.
- `OverlappingImageSection` : image et panneau de contenu superposés.
- `QuoteSection` : citation éditoriale.
- `PublicationGridSection` : grille de publications.
- `EventHighlightSection` : mise en avant d’un événement.
- `CallToActionSection` : appel à l’action doux ou contrasté.

## Règles de composition

1. Réutiliser les composants fondamentaux avant d’en créer de nouveaux.
2. Garder les appels WordPress dans `app/services/wordpress` et `app/composables`, jamais dans les composants de présentation.
3. Ne pas coder les couleurs de marque dans les composants : utiliser les tokens ou les couleurs Nuxt UI.
4. Fournir un texte alternatif descriptif aux images informatives ; les images décoratives doivent avoir un texte alternatif vide.
5. Utiliser les composants de carte pour les listes et les composants de section pour les compositions éditoriales.
6. Prévoir les états de chargement, les erreurs réseau, les contenus vides et l’absence de configuration WordPress.
7. Ne pas afficher de coordonnées, noms, citations ou informations institutionnelles tant qu’ils ne sont pas validés.

## Données et intégration

- Les informations institutionnelles proviennent de `app/data/church.ts`, `pastor.ts` et `departments.ts`.
- Les publications et événements proviennent de WordPress via la couche de services.
- Les événements restent des articles WordPress de la catégorie « Événements », enrichis par les champs du plugin `eecc-core`.
- Les champs personnalisés des événements (`event_start`, `event_end`, `event_venue`, `event_address`, `registration_url`, `event_status`, `event_poster`) doivent être exposés dans la REST API.
- Les composants consomment des données typées et n’appellent jamais directement l’API.

## Exemples

```vue
<HeroSection
  eyebrow="Église Clinique Charismatique"
  title="Bienvenue à l’EECC Centrale"
  description="Retrouvez les informations et les actualités de l’église."
  primary-label="Découvrir l’église"
  primary-to="/eglise"
  secondary-label="Voir les événements"
  secondary-to="/evenements"
/>

<OverlappingImageSection
  image="/images/eglise.jpg"
  image-alt="Vue de l’assemblée"
  eyebrow="Notre église"
  title="Une communauté de foi"
  description="Présentation institutionnelle de l’église."
/>
```
