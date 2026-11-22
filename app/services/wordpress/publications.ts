import { useWordPressClient } from '~/services/wordpress/client'
import type { Publication } from '~/types/publication'

export function getPublications(params: Record<string, string | number> = {}) {
  const client = useWordPressClient()
  return client<Publication[]>('/posts', { query: { _embed: 1, status: 'publish', ...params } })
}

export function getPublicationBySlug(slug: string) {
  const client = useWordPressClient()
  return client<Publication[]>('/posts', { query: { slug, _embed: 1, status: 'publish' } })
}
