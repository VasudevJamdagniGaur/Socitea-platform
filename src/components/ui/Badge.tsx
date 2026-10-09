import type { ReactNode } from 'react'

type BadgeTone = 'neutral' | 'success' | 'warning' | 'mint'

const tones: Record<BadgeTone, string> = {
  neutral: 'bg-sage text-muted border-line',
  success: 'bg-mint/50 text-forest border-mint',
  warning: 'bg-[#F5EFE3] text-[#6B5A3E] border-[#E8DFD0]',
  mint: 'bg-mint text-forest-dark border-transparent',
}

type BadgeProps = {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

export function Badge({ children, tone = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide',
        tones[tone],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
