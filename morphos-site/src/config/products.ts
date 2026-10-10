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

function isVerifiedPublicUrl(value: string): boolean {
  if (!isHttpUrl(value)) return false
  const lower = value.toLowerCase()
  const blocked = ['example.com', 'placeholder', 'your-domain', 'todo', 'localhost', '127.0.0.1']
  return !blocked.some((token) => lower.includes(token))
}

export const products = {
  chromeWebStoreUrl: readEnv('VITE_CHROME_WEB_STORE_URL'),
  windowsDownloadUrl: readEnv('VITE_WINDOWS_DOWNLOAD_URL'),
  androidPlayStoreUrl: readEnv('VITE_ANDROID_PLAY_STORE_URL'),
  androidApkUrl: readEnv('VITE_ANDROID_APK_URL'),
}

export function isExtensionStoreAvailable() {
  return isVerifiedPublicUrl(products.chromeWebStoreUrl)
}

export function getWindowsDownloadUrl() {
  return isVerifiedPublicUrl(products.windowsDownloadUrl) ? products.windowsDownloadUrl : ''
}

export function getAndroidDownloadUrl() {
  if (isVerifiedPublicUrl(products.androidPlayStoreUrl)) return products.androidPlayStoreUrl
  if (isVerifiedPublicUrl(products.androidApkUrl)) return products.androidApkUrl
  return ''
}

export function isWindowsDownloadable() {
  return Boolean(getWindowsDownloadUrl())
}

export function isAndroidDownloadable() {
  return Boolean(getAndroidDownloadUrl())
}
