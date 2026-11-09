import { getCategories } from '~/services/wordpress/categories'
import { getPublications } from '~/services/wordpress/publications'

export function usePublications() {
  const config = useRuntimeConfig()

  return useAsyncData('wordpress-publications', async () => {
    if (!String(config.public.wordpressUrl || '').trim()) {
      return { items: [], categories: [], state: 'unconfigured' as const }
    }

    try {
      const [items, categories] = await Promise.all([
        getPublications({ per_page: 60, orderby: 'date', order: 'desc' }),
        getCategories()
      ])
      return { items, categories: categories.filter(category => category.slug !== 'uncategorized'), state: 'ready' as const }
    } catch {
      return { items: [], categories: [], state: 'error' as const }
    }
  }, { default: () => ({ items: [], categories: [], state: 'unconfigured' as const }) })
}
