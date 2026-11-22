import type { Publication } from '~/types/publication'

/** Les événements sont des articles WordPress enrichis par le plugin eecc-core. */
export interface ChurchEvent extends Publication {
  event_start?: string
  event_end?: string
  event_venue?: string
  event_address?: string
  registration_url?: string
  event_status?: 'scheduled' | 'cancelled'
  event_poster?: string
}
