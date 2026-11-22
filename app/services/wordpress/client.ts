export function useWordPressClient() {
  const config = useRuntimeConfig()
  const baseURL = config.public.wordpressUrl
    ? `${String(config.public.wordpressUrl).replace(/\/$/, '')}/wp-json/wp/v2`
    : '/wp-json/wp/v2'
  return $fetch.create({ baseURL })
}
