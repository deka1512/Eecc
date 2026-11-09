export interface WordPressRenderedText { rendered: string }
export interface WordPressMedia { source_url: string; alt_text?: string }
export interface WordPressTerm { id: number; name: string; slug: string }
export interface Publication {
  id: number
  date: string
  modified?: string
  slug: string
  link: string
  status?: string
  title: WordPressRenderedText
  excerpt: WordPressRenderedText
  content: WordPressRenderedText
  featured_media?: number
  categories?: number[]
  _embedded?: {
    'wp:featuredmedia'?: WordPressMedia[]
    'wp:term'?: WordPressTerm[][]
  }
}
