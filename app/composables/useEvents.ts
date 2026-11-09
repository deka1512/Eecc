import { getEvents } from '~/services/wordpress/events'

export function useEvents() {
  return useAsyncData('wordpress-events', () => getEvents({ per_page: 10, status: 'publish' }))
}
