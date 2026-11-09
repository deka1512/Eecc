export interface WordPressRenderedText { rendered: string }
export interface WordPressMedia { source_url: string; alt_text?: string }
export interface Publication {
  id: number
  date: string
  slug: string
  link: string
  title: WordPressRenderedText
  excerpt: WordPressRenderedText
  content: WordPressRenderedText
  featured_media?: number
  _embedded?: { 'wp:featuredmedia'?: WordPressMedia[] }
}
