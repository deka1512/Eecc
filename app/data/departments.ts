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
    image: 'https://static.evangelisch.de/get/?daid=00010001pZQAWfpXtXETyJEnqgmu8l4ZVfMO9UdhRytPN0Mni4fc000000263400&dfid=i-62'
  },
  {
    name: 'Intercession & Prière',
    description: 'Porte les besoins de l’église, des familles et de la communauté dans la prière et organise les temps d’intercession.',
    image: 'https://images.pexels.com/photos/7533316/pexels-photo-7533316.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Accueil',
    description: 'Accueille les membres et les visiteurs, les oriente et veille à ce que chacun trouve sa place dès son arrivée.',
    image: 'https://images.pexels.com/photos/6479512/pexels-photo-6479512.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Protocole',
    description: 'Coordonne l’accueil des invités, l’accompagnement des intervenants et le bon déroulement des temps officiels.',
    image: 'https://images.pexels.com/photos/20610322/pexels-photo-20610322/free-photo-of-african-woman-posing-in-a-studio.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Sécurité',
    description: 'Contribue à la sécurité des personnes, à la prévention et à la circulation pendant les activités et les rassemblements.',
    image: 'https://images.pexels.com/photos/17612325/pexels-photo-17612325/free-photo-of-portrait-of-man.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Logistique',
    description: 'Prépare les espaces, le matériel et les installations nécessaires aux cultes, réunions et événements de l’église.',
    image: 'https://vinepulse.com/wp-content/uploads/2023/08/367414568_692526529581710_6058880740802032878_n.jpeg'
  },
  {
    name: 'Évangélisation & Mission',
    description: 'Participe au partage de l’Évangile, aux actions de proximité et aux initiatives missionnaires de la communauté.',
    image: 'https://images.pexels.com/photos/6276712/pexels-photo-6276712.jpeg?auto=compress&cs=tinysrgb&w=1400'
  },
  {
    name: 'Communication & Médias',
    description: 'Valorise la vie de l’église et accompagne la production des supports de communication, de photo et de vidéo.',
    image: 'https://images.pexels.com/photos/33878708/pexels-photo-33878708/free-photo-of-confident-african-woman-portrait-on-dark-background.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    name: 'Jeunesse',
    description: 'Accompagne les jeunes dans leur cheminement spirituel, leurs rencontres et leur engagement dans la vie de l’église.',
    image: 'https://images.pexels.com/photos/1678821/pexels-photo-1678821.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
]
