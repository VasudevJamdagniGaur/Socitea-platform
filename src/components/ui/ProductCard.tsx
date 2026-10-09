import type { ReactNode } from 'react'
import { Badge } from './Badge'
import type { AvailabilityStatus } from '@/config/products'
import { availabilityLabel } from '@/config/products'

type ProductCardProps = {
  title: string
  platform: string
  description: string
  status: AvailabilityStatus
  visual: ReactNode
  actions: ReactNode
  details?: ReactNode
  className?: string
}

export function ProductCard({
  title,
  platform,
  description,
  status,
  visual,
  actions,
  details,
  className = '',
}: ProductCardProps) {
  const tone =
    status === 'available' ? 'success' : status === 'in_development' ? 'warning' : 'neutral'

  return (
    <article
      className={[
        'flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft',
        className,
      ].join(' ')}
    >
      <div className="border-b border-line bg-gradient-to-br from-sage/80 to-cream p-5">
        {visual}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={tone}>{availabilityLabel(status)}</Badge>
          <span className="text-xs font-medium uppercase tracking-wider text-muted">
            {platform}
          </span>
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
        </div>
        {details && <div className="text-sm text-muted">{details}</div>}
        <div className="mt-auto flex flex-col gap-3 pt-2">{actions}</div>
      </div>
    </article>
  )
}
