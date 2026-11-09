# Bibliothèque UI — EECC Centrale

Cette bibliothèque constitue la base visuelle et fonctionnelle du site public EECC Centrale. Elle s'appuie sur Nuxt UI, Tailwind CSS v4, Vue 3 et les composants auto-importés de Nuxt.

## Principes

- **Spirituel et institutionnel** : une présence chaleureuse, digne et lisible, sans surcharge décorative.
- **Éditorial d'abord** : les contenus, les enseignements, les annonces et les événements doivent rester faciles à parcourir.
- **Médias intégrés au contenu** : pas de médiathèque autonome ; les images et affiches accompagnent les publications et événements.
- **Images en superposition** : les sections d'image de fond disposent d'un voile de contraste pour préserver la lisibilité du texte.
- **Responsive et accessible** : états de focus visibles, textes alternatifs, contrastes et mouvements réduits respectés.

## Tokens

Les tokens globaux sont déclarés dans `app/assets/css/main.css` :

- Couleurs sémantiques : canvas, surface, surface-muted, ink, muted, border, brand et brand-soft.
- Typographie : font-body et font-display.
- Formes et profondeur : radius-card, radius-panel, shadow-card et shadow-floating.

**À finaliser avant la validation visuelle** : remplacer les valeurs neutres provisoires par les références exactes de la palette 03 et du set typographique 04 retenus. Les composants consomment les tokens sémantiques afin que cette opération ne nécessite pas de réécriture de la bibliothèque.

## Composants fondamentaux

| Composant | Usage |
| --- | --- |
| `BaseButton` | Action, lien interne ou externe, variantes et tailles |
| `BaseBadge` | Statut, catégorie ou information courte |
| `BaseCard` | Conteneur éditorial avec zones média, en-tête et pied |
| `BaseSectionHeading` | Titre de section, surtitre et description |
| `BaseMedia` | Image éditoriale avec ratio, cadrage et texte alternatif |
| `BaseImageBackground` | Image de fond avec voile clair ou sombre |

## Composants éditoriaux

- `PublicationCard` : carte reliée à une publication WordPress.
- `EventCard` : carte d'événement, date, lieu et statut.

Les cartes utilisent les interfaces existantes de `app/types/publication.ts` et `app/types/event.ts`.

## Sections réutilisables

- `OverlappingImageSection` : composition en deux colonnes avec image et panneau de contenu superposé.
- `ImageBannerSection` : bannière éditoriale avec image de fond, voile et appel à l'action facultatif.
- `CallToActionSection` : bloc d'appel à l'action en tonalité douce ou forte.

## Exemple

```vue
<OverlappingImageSection
  image="/images/eglise.jpg"
  image-alt="Vue de l'assemblée"
  eyebrow="Notre église"
  title="Une communauté de foi"
  description="Découvrir notre vision et notre engagement."
  button-label="Découvrir l'église"
  button-to="/eglise"
>
  <p>Un texte complémentaire peut être placé ici.</p>
</OverlappingImageSection>
```

## Règles d'usage

1. Privilégier les composants fondamentaux avant de créer un nouveau composant spécialisé.
2. Garder les appels WordPress dans les services et composables, jamais dans les composants de présentation.
3. Utiliser les composants éditoriaux pour afficher les données WordPress typées.
4. Toujours fournir un texte alternatif pertinent ; utiliser une image décorative uniquement lorsqu'elle ne porte aucune information.
5. Ne pas coder les couleurs de marque directement dans les composants : utiliser les tokens sémantiques ou les couleurs Nuxt UI.
