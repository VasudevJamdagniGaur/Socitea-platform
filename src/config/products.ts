/**
 * Central product configuration for SociTea.
 * Update URLs here — pages and CTAs read from these helpers.
 *
 * Only set a URL when it has been verified as a real, public destination.
 * Leave empty strings for unpublished surfaces.
 */

export type AvailabilityStatus = 'available' | 'coming_soon' | 'in_development'

function readEnv(key: string): string {
  const value = import.meta.env[key]
  return typeof value === 'string' ? value.trim() : ''
}

function isHttpUrl(value: string): boolean {
  if (!value) return false
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

/** Reject common placeholder patterns so nonempty fakes never unlock CTAs. */
function isVerifiedPublicUrl(value: string): boolean {
  if (!isHttpUrl(value)) return false
  const lower = value.toLowerCase()
  const blocked = [
    'example.com',
    'placeholder',
    'your-domain',
    'todo',
    'localhost',
    '127.0.0.1',
  ]
  return !blocked.some((token) => lower.includes(token))
}

export const products = {
  brand: {
    name: 'SociTea',
    tagline: 'Discover. Create. Share.',
    description:
      'SociTea helps you discover interesting ideas and turn them into engaging social content with AI.',
    shortDescription:
      'An AI-powered space to discover ideas, create content, and organize drafts.',
  },

  /** Canonical public website origin (no trailing slash). Leave empty until domain is confirmed. */
  websiteUrl: readEnv('VITE_WEBSITE_URL'),

  supportEmail: readEnv('VITE_SUPPORT_EMAIL') || 'hello@socitea.app',

  social: {
    twitter: readEnv('VITE_SOCIAL_TWITTER'),
    linkedin: readEnv('VITE_SOCIAL_LINKEDIN'),
    github: readEnv('VITE_SOCIAL_GITHUB'),
    instagram: readEnv('VITE_SOCIAL_INSTAGRAM'),
  },

  android: {
    name: 'SociTea for Android',
    platform: 'Android',
    description: 'Bring your creative workflow with you on your phone.',
    playStoreUrl: readEnv('VITE_ANDROID_PLAY_STORE_URL'),
    apkUrl: readEnv('VITE_ANDROID_APK_URL'),
    version: readEnv('VITE_ANDROID_VERSION'),
    minOs: 'Android 8.0+',
  },

  extension: {
    name: 'SociTea Extension',
    platform: 'Chrome',
    description: 'Capture inspiration from the web and turn it into content.',
    chromeWebStoreUrl: readEnv('VITE_CHROME_WEB_STORE_URL'),
    version: readEnv('VITE_EXTENSION_VERSION'),
  },

  webApp: {
    name: 'SociTea on the Web',
    platform: 'Web',
    description: 'Explore the SociTea experience directly from your browser.',
    url: readEnv('VITE_WEB_APP_URL'),
    version: readEnv('VITE_WEB_APP_VERSION'),
  },

  legal: {
    privacyExternalUrl: readEnv('VITE_PRIVACY_URL'),
    termsExternalUrl: readEnv('VITE_TERMS_URL'),
    companyName: readEnv('VITE_COMPANY_NAME') || 'SociTea',
    lastUpdated: '2026-03-10',
  },
} as const

export function getWebsiteUrl(): string {
  return isVerifiedPublicUrl(products.websiteUrl) ? products.websiteUrl : ''
}

export function getCanonicalUrl(pathname = '/'): string {
  const base = getWebsiteUrl()
  if (!base) return pathname
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${base}${path === '/' ? '' : path}`
}

export function isAndroidDownloadable(): boolean {
  return (
    isVerifiedPublicUrl(products.android.playStoreUrl) ||
    isVerifiedPublicUrl(products.android.apkUrl)
  )
}

export function getAndroidDownloadUrl(): string {
  if (isVerifiedPublicUrl(products.android.playStoreUrl)) {
    return products.android.playStoreUrl
  }
  if (isVerifiedPublicUrl(products.android.apkUrl)) {
    return products.android.apkUrl
  }
  return ''
}

export function getAndroidAvailability(): AvailabilityStatus {
  return isAndroidDownloadable() ? 'available' : 'coming_soon'
}

export function isExtensionStoreAvailable(): boolean {
  return isVerifiedPublicUrl(products.extension.chromeWebStoreUrl)
}

export function getExtensionAvailability(): AvailabilityStatus {
  return isExtensionStoreAvailable() ? 'available' : 'coming_soon'
}

export function isWebAppAvailable(): boolean {
  return isVerifiedPublicUrl(products.webApp.url)
}

export function getWebAppAvailability(): AvailabilityStatus {
  if (isWebAppAvailable()) return 'available'
  return 'in_development'
}

export function getSignInUrl(): string {
  return isWebAppAvailable() ? products.webApp.url : '/web-app'
}

export function availabilityLabel(status: AvailabilityStatus): string {
  switch (status) {
    case 'available':
      return 'Available'
    case 'coming_soon':
      return 'Coming soon'
    case 'in_development':
      return 'In development'
  }
}

export function getConfiguredSocialLinks(): { label: string; href: string }[] {
  const entries: { label: string; href: string }[] = []
  if (isVerifiedPublicUrl(products.social.twitter)) {
    entries.push({ label: 'X / Twitter', href: products.social.twitter })
  }
  if (isVerifiedPublicUrl(products.social.linkedin)) {
    entries.push({ label: 'LinkedIn', href: products.social.linkedin })
  }
  if (isVerifiedPublicUrl(products.social.github)) {
    entries.push({ label: 'GitHub', href: products.social.github })
  }
  if (isVerifiedPublicUrl(products.social.instagram)) {
    entries.push({ label: 'Instagram', href: products.social.instagram })
  }
  return entries
}
