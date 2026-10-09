import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import {
  getWebAppAvailability,
  isWebAppAvailable,
  products,
} from '@/config/products'

type WebAppCardProps = {
  showInstructions?: boolean
}

export function WebAppCard({ showInstructions = false }: WebAppCardProps) {
  const status = getWebAppAvailability()
  const available = isWebAppAvailable()

  return (
    <ProductCard
      title={products.webApp.name}
      platform={products.webApp.platform}
      description={products.webApp.description}
      status={status}
      visual={<WebVisual />}
      details={
        <ul className="space-y-1">
          {products.webApp.version ? (
            <li>Version {products.webApp.version}</li>
          ) : (
            <li>Release version appears when the app is deployed</li>
          )}
          {showInstructions && (
            <li className="pt-2 leading-relaxed">
              {available
                ? 'Opens the verified SociTea web application URL.'
                : 'The marketing site is not the web app. Visit the web app entry page for status.'}
            </li>
          )}
        </ul>
      }
      actions={
        available ? (
          <Button
            href={products.webApp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            Open SociTea Web
          </Button>
        ) : (
          <Button to="/web-app" className="w-full">
            View web app status
          </Button>
        )
      }
    />
  )
}

function WebVisual() {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-line bg-sage/40 px-3 py-2">
        <Globe className="h-4 w-4 text-forest" aria-hidden="true" />
        <div className="h-5 flex-1 rounded bg-white text-[10px] leading-5 text-muted">
          SociTea workspace — sample
        </div>
      </div>
      <div className="grid h-28 grid-cols-[72px_1fr] gap-2 bg-cream/80 p-2">
        <div className="rounded-lg bg-forest/90 p-2">
          <div className="h-2 w-10 rounded bg-mint/70" />
          <div className="mt-2 space-y-1">
            <div className="h-2 rounded bg-white/20" />
            <div className="h-2 rounded bg-white/20" />
            <div className="h-2 rounded bg-white/20" />
          </div>
        </div>
        <div className="rounded-lg bg-white p-2">
          <div className="h-2 w-16 rounded bg-line" />
          <div className="mt-2 h-14 rounded-md bg-sage/60" />
        </div>
      </div>
    </div>
  )
}
