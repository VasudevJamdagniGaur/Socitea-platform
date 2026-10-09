import { Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import {
  getAndroidAvailability,
  getAndroidDownloadUrl,
  isAndroidDownloadable,
  products,
} from '@/config/products'

type AndroidCardProps = {
  showInstructions?: boolean
}

export function AndroidCard({ showInstructions = false }: AndroidCardProps) {
  const status = getAndroidAvailability()
  const downloadable = isAndroidDownloadable()
  const href = getAndroidDownloadUrl()
  const viaPlay = Boolean(products.android.playStoreUrl && href === products.android.playStoreUrl)

  return (
    <ProductCard
      title={products.android.name}
      platform={products.android.platform}
      description={products.android.description}
      status={status}
      visual={<AndroidVisual />}
      details={
        <ul className="space-y-1">
          <li>Requires {products.android.minOs}</li>
          {products.android.version ? (
            <li>Version {products.android.version}</li>
          ) : (
            <li>Version will appear when a release is published</li>
          )}
          {showInstructions && (
            <li className="pt-2 leading-relaxed">
              {downloadable
                ? viaPlay
                  ? 'Opens the verified Google Play listing in a new tab.'
                  : 'Opens the configured official APK download URL.'
                : 'The Android download link has not been published yet. No simulated download is offered.'}
            </li>
          )}
        </ul>
      }
      actions={
        downloadable ? (
          <Button
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            {viaPlay ? 'Get it on Google Play' : 'Download APK'}
          </Button>
        ) : (
          <>
            <Button disabled className="w-full">
              Coming soon
            </Button>
            <p className="text-center text-xs text-muted">
              Play Store and APK links are not configured yet.
            </p>
          </>
        )
      }
    />
  )
}

function AndroidVisual() {
  return (
    <div className="flex items-end justify-center gap-4 py-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-mint">
        <Smartphone className="h-7 w-7" aria-hidden="true" />
      </div>
      <div className="relative h-40 w-[88px] rounded-[1.4rem] border-[3px] border-forest-dark bg-white shadow-soft">
        <div className="absolute inset-x-4 top-2 h-1.5 rounded-full bg-line" />
        <div className="absolute inset-x-2 top-6 bottom-3 overflow-hidden rounded-xl bg-sage/50 p-2">
          <div className="h-2 w-10 rounded bg-forest/30" />
          <div className="mt-2 space-y-1.5">
            <div className="h-8 rounded-lg bg-white" />
            <div className="h-8 rounded-lg bg-mint/50" />
            <div className="h-8 rounded-lg bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
