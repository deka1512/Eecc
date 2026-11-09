import type { ChurchEvent } from '~/types/event'

/** Les événements sont des articles WordPress natifs enrichis par eecc-core. */
export function getEvents(params: Record<string, string | number> = {}) {
  const client = useWordPressClient()
  return client<ChurchEvent[]>('/posts', { query: { _embed: 1, status: 'publish', ...params } })
}

export function getEventBySlug(slug: string, categoryId?: number) {
  const client = useWordPressClient()
  return client<ChurchEvent[]>('/posts', {
    query: { slug, _embed: 1, status: 'publish', ...(categoryId ? { categories: categoryId } : {}) }
  })
}
