import { Puzzle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import {
  getExtensionAvailability,
  isExtensionStoreAvailable,
  products,
} from '@/config/products'

type BrowserExtensionCardProps = {
  showInstructions?: boolean
}

export function BrowserExtensionCard({ showInstructions = false }: BrowserExtensionCardProps) {
  const status = getExtensionAvailability()
  const storeReady = isExtensionStoreAvailable()

  return (
    <ProductCard
      title={products.extension.name}
      platform={products.extension.platform}
      description={products.extension.description}
      status={status}
      visual={<ExtensionVisual />}
      details={
        <ul className="space-y-1">
          {products.extension.version ? (
            <li>Version {products.extension.version}</li>
          ) : (
            <li>Store version appears after publication</li>
          )}
          {showInstructions && (
            <li className="pt-2 leading-relaxed">
              {storeReady
                ? 'Opens the verified Chrome Web Store listing.'
                : 'Not published yet. See the extension page for a local developer install guide.'}
            </li>
          )}
        </ul>
      }
      actions={
        storeReady ? (
          <Button
            href={products.extension.chromeWebStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            Add to Chrome
          </Button>
        ) : (
          <>
            <Button to="/extension" variant="secondary" className="w-full">
              Coming soon — learn more
            </Button>
            <p className="text-center text-xs text-muted">
              Chrome Web Store URL is not configured.
            </p>
          </>
        )
      }
    />
  )
}

function ExtensionVisual() {
  return (
    <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-line bg-sage/40 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <div className="ml-2 h-5 flex-1 rounded bg-white text-[10px] leading-5 text-muted">
          reading.example — sample page
        </div>
        <Puzzle className="h-4 w-4 text-forest" aria-hidden="true" />
      </div>
      <div className="relative h-28 bg-gradient-to-br from-cream to-sage p-3">
        <div className="h-full rounded-xl bg-white/70 p-2 text-[10px] text-muted">
          Webpage content preview
        </div>
        <div className="absolute bottom-3 right-3 w-36 rounded-xl border border-line bg-forest-dark p-2.5 text-white shadow-lift">
          <p className="text-[10px] font-semibold">SociTea</p>
          <p className="mt-1 text-[9px] text-white/70">Extension popup preview</p>
          <div className="mt-2 h-6 rounded-md bg-mint/80" />
        </div>
      </div>
    </div>
  )
}
