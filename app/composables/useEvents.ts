import { getCategories } from '~/services/wordpress/categories'
import { getEvents } from '~/services/wordpress/events'
import { demoEvents } from '~/data/demo-content'

export function useEvents() {
  const config = useRuntimeConfig()
  const demoResult = () => ({ items: demoEvents, state: 'demo' as const })

  return useAsyncData('wordpress-events', async () => {
    if (!String(config.public.wordpressUrl || '').trim()) return demoResult()

    try {
      const categories = await getCategories()
      const eventCategory = categories.find(category =>
        category.slug === 'evenements' ||
        category.slug === 'evenement' ||
        category.name.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '') === 'evenements'
      )

      if (!eventCategory) return demoResult()

      const items = await getEvents({
        categories: eventCategory.id,
        per_page: 60,
        orderby: 'date',
        order: 'desc'
      })

      if (!items.length) return demoResult()

      return {
        items: [...items].sort((a, b) =>
          new Date(a.event_start || a.date).getTime() - new Date(b.event_start || b.date).getTime()
        ),
        state: 'ready' as const
      }
    } catch {
      return demoResult()
    }
  }, { default: demoResult })
}
