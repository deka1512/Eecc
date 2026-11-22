export interface Department {
  name: string
  description: string
  image?: string
  contact?: string
}

export const departments: Department[] = [
  {
    name: 'Louange & Adoration',
    description: 'Prépare et conduit les temps de louange, de chant et d’adoration pendant les célébrations et les rencontres de l’église.',
    image: '/departement.jpg'
  },
  {
    name: 'Intercession & Prière',
    description: 'Porte les besoins de l’église, des familles et de la communauté dans la prière et organise les temps d’intercession.',
    image: '/temps%20priere.jpg'
  },
  {
    name: 'Accueil',
    description: 'Accueille les membres et les visiteurs, les oriente et veille à ce que chacun trouve sa place dès son arrivée.',
    image: '/rencontre-commmunaute.jpg'
  },
  {
    name: 'Protocole',
    description: 'Coordonne l’accueil des invités, l’accompagnement des intervenants et le bon déroulement des temps officiels.',
    image: '/images.jpg'
  },
  {
    name: 'Sécurité',
    description: 'Contribue à la sécurité des personnes, à la prévention et à la circulation pendant les activités et les rassemblements.',
    image: '/chriurch.jpg'
  },
  {
    name: 'Logistique',
    description: 'Prépare les espaces, le matériel et les installations nécessaires aux cultes, réunions et événements de l’église.',
    image: '/events.jpg'
  },
  {
    name: 'Évangélisation & Mission',
    description: 'Participe au partage de l’Évangile, aux actions de proximité et aux initiatives missionnaires de la communauté.',
    image: '/publication.jpg'
  },
  {
    name: 'Communication & Médias',
    description: 'Valorise la vie de l’église et accompagne la production des supports de communication, de photo et de vidéo.',
    image: '/contact.jpg'
  },
  {
    name: 'Jeunesse',
    description: 'Accompagne les jeunes dans leur cheminement spirituel, leurs rencontres et leur engagement dans la vie de l’église.',
    image: '/images%201.jpg'
  }
]
