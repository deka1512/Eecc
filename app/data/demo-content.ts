import type { ChurchEvent } from '~/types/event'
import type { Publication } from '~/types/publication'
import type { WordPressCategory } from '~/services/wordpress/categories'

const dateOffset = (days: number, hour = 10) => {
  const date = new Date()
  date.setDate(date.getDate() + days)
  date.setHours(hour, 0, 0, 0)
  return date.toISOString()
}

const media = {
  prayer: 'https://images.pexels.com/photos/7533316/pexels-photo-7533316.jpeg?auto=compress&cs=tinysrgb&w=1200',
  bible: 'https://images.pexels.com/photos/6276712/pexels-photo-6276712.jpeg?auto=compress&cs=tinysrgb&w=1400',
  community: 'https://static.evangelisch.de/get/?daid=00010001pZQAWfpXtXETyJEnqgmu8l4ZVfMO9UdhRytPN0Mni4fc000000263400&dfid=i-62',
  gathering: 'https://vinepulse.com/wp-content/uploads/2023/08/367414568_692526529581710_6058880740802032878_n.jpeg'
}

export const demoPublicationCategories: WordPressCategory[] = [
  { id: 9101, name: 'Foi et enseignement', slug: 'foi-et-enseignement' },
  { id: 9102, name: 'Vie communautaire', slug: 'vie-communautaire' },
  { id: 9103, name: 'Annonces', slug: 'annonces' }
]

export const demoPublications: Publication[] = [
  {
    id: 91001, date: dateOffset(-2, 8), slug: 'la-priere-chemin-de-confiance', link: '', status: 'publish',
    title: { rendered: 'La prière, un chemin de confiance' },
    excerpt: { rendered: 'Un texte de démonstration pour illustrer les enseignements et les ressources qui pourront être partagés sur le site.' },
    content: { rendered: '<p>Ce contenu est un exemple fictif destiné à présenter la mise en page des publications de l’EECC Centrale.</p><h2>Prendre un temps de recul</h2><p>La prière peut être vécue comme un temps de silence, de confiance et d’écoute. Elle invite chacun à déposer ses préoccupations et à avancer avec espérance.</p><blockquote>Un temps de prière peut ouvrir un espace de paix et de discernement.</blockquote><p>Ce texte sera remplacé par un enseignement validé par l’équipe éditoriale de l’église.</p>' },
    categories: [9101], isDemo: true,
    _embedded: { 'wp:featuredmedia': [{ source_url: media.prayer, alt_text: 'Portrait d’illustration d’un homme noir africain en prière' }] }
  },
  {
    id: 91002, date: dateOffset(-5, 9), slug: 'grandir-ensemble-dans-la-foi', link: '', status: 'publish',
    title: { rendered: 'Grandir ensemble dans la foi' },
    excerpt: { rendered: 'Une publication fictive qui présente l’esprit de communion, d’accueil et de croissance au cœur de la vie communautaire.' },
    content: { rendered: '<p>Cette publication est un exemple fictif pour la maquette du site.</p><h2>Une foi qui se partage</h2><p>La vie communautaire se construit dans les rencontres, l’attention portée aux autres et la possibilité de cheminer ensemble. Chacun peut apporter son expérience, ses questions et ses talents.</p><p>Les textes définitifs seront rédigés et approuvés par l’EECC Centrale avant la mise en ligne officielle.</p>' },
    categories: [9102], isDemo: true,
    _embedded: { 'wp:featuredmedia': [{ source_url: media.community, alt_text: 'Chorale africaine réunie dans un moment de louange' }] }
  },
  {
    id: 91003, date: dateOffset(-8, 11), slug: 'servir-avec-ses-talents', link: '', status: 'publish',
    title: { rendered: 'Servir avec ses talents' },
    excerpt: { rendered: 'Un exemple de contenu pour présenter les engagements, les équipes et les différentes formes de participation.' },
    content: { rendered: '<p>Contenu fictif de démonstration.</p><h2>Une place pour chacun</h2><p>Les talents, les compétences et la disponibilité de chacun peuvent contribuer à une communauté attentive et vivante. Les équipes et leurs missions seront présentées ici après validation des informations officielles.</p>' },
    categories: [9103], isDemo: true,
    _embedded: { 'wp:featuredmedia': [{ source_url: media.gathering, alt_text: 'Équipe africaine de bénévoles réunie pour servir' }] }
  },
  {
    id: 91004, date: dateOffset(-12, 10), slug: 'accueillir-et-ecouter', link: '', status: 'publish',
    title: { rendered: 'Accueillir et écouter : une communauté ouverte' },
    excerpt: { rendered: 'Un exemple éditorial fictif pour illustrer les annonces et les informations destinées aux visiteurs.' },
    content: { rendered: '<p>Cette page est un exemple fictif. Elle montre comment les informations pratiques et les nouvelles de la communauté pourront être présentées.</p><p>Les annonces officielles seront publiées après confirmation de leur contenu et de leurs dates.</p>' },
    categories: [9102], isDemo: true,
    _embedded: { 'wp:featuredmedia': [{ source_url: media.bible, alt_text: 'Portrait d’illustration d’un pasteur noir africain' }] }
  }
]

export const demoEvents: ChurchEvent[] = [
  {
    id: 92001, date: dateOffset(-1, 8), slug: 'temps-de-priere-et-de-partage', link: '', status: 'publish',
    title: { rendered: 'Temps de prière et de partage' },
    excerpt: { rendered: 'Un rendez-vous fictif pour illustrer la présentation des temps de prière de la communauté.' },
    content: { rendered: '<p>Événement fictif de démonstration : cette fiche illustre les informations qui seront affichées pour un temps de prière.</p><h2>Au programme</h2><p>Un temps de recueillement, de prière et de partage fraternel. Le programme, l’horaire et le lieu définitifs devront être confirmés par l’église avant toute annonce publique.</p>' },
    categories: [9201], isDemo: true, event_start: dateOffset(8, 10), event_end: dateOffset(8, 12),
    event_venue: 'Lieu à confirmer — exemple fictif', event_status: 'scheduled', event_poster: media.prayer,
    _embedded: { 'wp:featuredmedia': [{ source_url: media.prayer, alt_text: 'Visuel illustratif pour un temps de prière' }] }
  },
  {
    id: 92002, date: dateOffset(-1, 9), slug: 'rencontre-de-la-communaute', link: '', status: 'publish',
    title: { rendered: 'Rencontre de la communauté' },
    excerpt: { rendered: 'Un événement fictif pour illustrer une rencontre ouverte aux membres et aux visiteurs.' },
    content: { rendered: '<p>Événement fictif de démonstration. Cette rencontre est un exemple de rendez-vous qui pourrait être annoncé sur le site.</p><p>Les informations officielles concernant le lieu, l’heure et les modalités de participation seront ajoutées après validation.</p>' },
    categories: [9201], isDemo: true, event_start: dateOffset(16, 15), event_end: dateOffset(16, 17),
    event_venue: 'Lieu à confirmer — exemple fictif', event_status: 'scheduled', event_poster: media.community,
    _embedded: { 'wp:featuredmedia': [{ source_url: media.community, alt_text: 'Visuel illustratif d’une rencontre communautaire' }] }
  },
  {
    id: 92003, date: dateOffset(-2, 9), slug: 'celebration-de-reconnaissance', link: '', status: 'publish',
    title: { rendered: 'Célébration de reconnaissance' },
    excerpt: { rendered: 'Une célébration fictive destinée à montrer le rendu des événements à venir.' },
    content: { rendered: '<p>Événement fictif de démonstration. Cette fiche présente un exemple de célébration communautaire.</p><p>La date, le programme et le lieu de toute célébration réelle devront être confirmés par l’équipe de l’église.</p>' },
    categories: [9201], isDemo: true, event_start: dateOffset(25, 9), event_end: dateOffset(25, 12),
    event_venue: 'Lieu à confirmer — exemple fictif', event_status: 'scheduled', event_poster: media.gathering,
    _embedded: { 'wp:featuredmedia': [{ source_url: media.gathering, alt_text: 'Visuel illustratif d’une assemblée réunie' }] }
  },
  {
    id: 92004, date: dateOffset(-3, 8), slug: 'atelier-biblique-fondements-de-la-foi', link: '', status: 'publish',
    title: { rendered: 'Atelier biblique : les fondements de la foi' },
    excerpt: { rendered: 'Un atelier fictif qui illustre une activité de formation et de partage biblique.' },
    content: { rendered: '<p>Événement fictif de démonstration. Le contenu de cette fiche sert uniquement à illustrer la page agenda et son modèle de détail.</p><p>Les futurs ateliers seront annoncés avec leurs informations pratiques vérifiées.</p>' },
    categories: [9201], isDemo: true, event_start: dateOffset(34, 14), event_end: dateOffset(34, 16),
    event_venue: 'Lieu à confirmer — exemple fictif', event_status: 'scheduled', event_poster: media.bible,
    _embedded: { 'wp:featuredmedia': [{ source_url: media.bible, alt_text: 'Visuel illustratif d’un atelier biblique' }] }
  }
]
