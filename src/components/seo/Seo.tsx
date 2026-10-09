import { useEffect } from 'react'
import { getCanonicalUrl, products } from '@/config/products'

type SeoProps = {
  title: string
  description: string
  path?: string
  noIndex?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export function Seo({ title, description, path = '/', noIndex = false }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(products.brand.name)
      ? title
      : `${title} · ${products.brand.name}`
    document.title = fullTitle

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'theme-color', '#173D32')
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:image', '/og-image.svg')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', '/og-image.svg')

    const canonical = getCanonicalUrl(path)
    if (canonical.startsWith('http')) {
      upsertLink('canonical', canonical)
      upsertMeta('property', 'og:url', canonical)
    }

    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, path, noIndex])

  return null
}
