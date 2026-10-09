import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'mint'
type Size = 'sm' | 'md' | 'lg'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  disabled?: boolean
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children' | 'disabled'> & {
    to?: undefined
    href?: undefined
  }

type ButtonAsLink = CommonProps & {
  to: string
  href?: undefined
  type?: undefined
  onClick?: () => void
}

type ButtonAsAnchor = CommonProps & {
  href: string
  to?: undefined
  target?: string
  rel?: string
  type?: undefined
  onClick?: () => void
}

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const variants: Record<Variant, string> = {
  primary:
    'bg-forest text-white hover:bg-forest-dark shadow-soft disabled:bg-forest/40 disabled:shadow-none',
  secondary:
    'bg-white text-forest border border-line hover:border-forest/30 hover:bg-sage/60',
  ghost: 'bg-transparent text-forest hover:bg-sage/70',
  outline:
    'bg-transparent text-forest border border-forest/25 hover:border-forest hover:bg-white',
  mint: 'bg-mint text-forest-dark hover:brightness-95 font-semibold',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm rounded-xl',
  md: 'h-11 px-5 text-sm rounded-xl',
  lg: 'h-12 px-6 text-base rounded-2xl',
}

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    disabled,
  } = props

  const classes = cx(
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200',
    'disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  )

  if ('to' in props && props.to) {
    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {children}
        </span>
      )
    }
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {children}
        </span>
      )
    }
    return (
      <a
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
      >
        {children}
      </a>
    )
  }

  const { type = 'button', onClick, ...rest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
