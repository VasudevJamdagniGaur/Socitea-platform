type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  as: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={[
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        className,
      ].join(' ')}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </div>
  )
}
