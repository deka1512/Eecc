export interface ChurchEvent {
  id: number
  date: string
  slug: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string }
  event_start?: string
  event_end?: string
  event_venue?: string
  event_address?: string
  registration_url?: string
  event_status?: 'scheduled' | 'cancelled'
  event_poster?: string
}
