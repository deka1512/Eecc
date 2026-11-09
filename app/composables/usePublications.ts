import { getPublications } from '~/services/wordpress/publications'

export function usePublications() {
  return useAsyncData('wordpress-publications', () => getPublications({ per_page: 10, status: 'publish' }))
}
