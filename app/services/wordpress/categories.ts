export interface WordPressCategory {
  id: number
  name: string
  slug: string
}

export function getCategories() {
  const client = useWordPressClient()
  return client<WordPressCategory[]>('/categories')
}
