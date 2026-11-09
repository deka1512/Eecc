import { getCategories } from '~/services/wordpress/categories'
import { getEvents } from '~/services/wordpress/events'

export function useEvents() {
  const config = useRuntimeConfig()

  return useAsyncData('wordpress-events', async () => {
    if (!String(config.public.wordpressUrl || '').trim()) {
      return { items: [], state: 'unconfigured' as const }
    }

    try {
      const categories = await getCategories()
      const eventCategory = categories.find(category =>
        category.slug === 'evenements' ||
        category.slug === 'evenement' ||
        category.name.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '') === 'evenements'
      )

      if (!eventCategory) return { items: [], state: 'category-missing' as const }

      const items = await getEvents({
        categories: eventCategory.id,
        per_page: 60,
        orderby: 'date',
        order: 'desc'
      })

      return {
        items: [...items].sort((a, b) =>
          new Date(a.event_start || a.date).getTime() - new Date(b.event_start || b.date).getTime()
        ),
        state: 'ready' as const
      }
    } catch {
      return { items: [], state: 'error' as const }
    }
  }, { default: () => ({ items: [], state: 'unconfigured' as const }) })
}
