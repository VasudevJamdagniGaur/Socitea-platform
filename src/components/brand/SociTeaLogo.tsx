import { Link } from 'react-router-dom'

type LogoVariant = 'full' | 'icon' | 'mono' | 'footer'

type SociTeaLogoProps = {
  variant?: LogoVariant
  className?: string
  linkToHome?: boolean
}

function Mark({ mono = false, className = '' }: { mono?: boolean; className?: string }) {
  const fill = mono ? 'currentColor' : '#173D32'
  const accent = mono ? 'currentColor' : '#BDE8CF'

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill={mono ? 'transparent' : fill} />
      {!mono && (
        <rect x="1" y="1" width="38" height="38" rx="11" stroke={accent} strokeOpacity="0.35" />
      )}
      {/* Stylized cup + leaf mark */}
      <path
        d="M12 16.5c0-1.4 1.1-2.5 2.5-2.5h8c1.4 0 2.5 1.1 2.5 2.5v5.2c0 3.2-2.6 5.8-5.8 5.8h-1.4c-3.2 0-5.8-2.6-5.8-5.8V16.5Z"
        fill={mono ? 'currentColor' : accent}
      />
      <path
        d="M25 18.2h1.6c1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1H25"
        stroke={mono ? 'currentColor' : accent}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity={mono ? 1 : 0.95}
      />
      <path
        d="M16.2 11.2c1.4.2 2.5 1 3.1 2.1"
        stroke={mono ? 'currentColor' : accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={mono ? 0.85 : 1}
      />
      <path
        d="M19.8 10.4c.9.8 1.5 1.8 1.7 2.9"
        stroke={mono ? 'currentColor' : accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={mono ? 0.7 : 0.85}
      />
      {!mono && (
        <ellipse cx="20" cy="31.5" rx="6" ry="1.4" fill="#BDE8CF" opacity="0.35" />
      )}
    </svg>
  )
}

export function SociTeaLogo({
  variant = 'full',
  className = '',
  linkToHome = true,
}: SociTeaLogoProps) {
  const mono = variant === 'mono' || variant === 'footer'
  const content = (
    <span
      className={[
        'inline-flex items-center gap-2.5',
        mono ? 'text-white' : 'text-ink',
        className,
      ].join(' ')}
    >
      <Mark
        mono={variant === 'mono'}
        className={
          variant === 'icon'
            ? 'h-8 w-8'
            : variant === 'footer'
              ? 'h-9 w-9 text-mint'
              : 'h-9 w-9'
        }
      />
      {variant !== 'icon' && (
        <span
          className={[
            'font-display text-[1.35rem] font-semibold tracking-tight leading-none',
            variant === 'footer' || variant === 'mono' ? 'text-white' : 'text-forest-dark',
          ].join(' ')}
        >
          SociTea
        </span>
      )}
    </span>
  )

  if (!linkToHome) return content

  return (
    <Link to="/" className="rounded-lg focus-visible:outline-none" aria-label="SociTea home">
      {content}
    </Link>
  )
}

export function SociTeaMarkIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <Mark className={className} />
}
