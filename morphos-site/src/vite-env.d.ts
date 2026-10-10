/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHROME_WEB_STORE_URL: string
  readonly VITE_ANDROID_APK_URL: string
  readonly VITE_ANDROID_PLAY_STORE_URL: string
  readonly VITE_WINDOWS_DOWNLOAD_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
