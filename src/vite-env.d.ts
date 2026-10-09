/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEBSITE_URL: string
  readonly VITE_SUPPORT_EMAIL: string
  readonly VITE_ANDROID_PLAY_STORE_URL: string
  readonly VITE_ANDROID_APK_URL: string
  readonly VITE_ANDROID_VERSION: string
  readonly VITE_CHROME_WEB_STORE_URL: string
  readonly VITE_EXTENSION_VERSION: string
  readonly VITE_WEB_APP_URL: string
  readonly VITE_WEB_APP_VERSION: string
  readonly VITE_PRIVACY_URL: string
  readonly VITE_TERMS_URL: string
  readonly VITE_COMPANY_NAME: string
  readonly VITE_SOCIAL_TWITTER: string
  readonly VITE_SOCIAL_LINKEDIN: string
  readonly VITE_SOCIAL_GITHUB: string
  readonly VITE_SOCIAL_INSTAGRAM: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
