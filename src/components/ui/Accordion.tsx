import { useId, useState, type KeyboardEvent, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

export type AccordionItem = {
  id: string
  question: string
  answer: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

export function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
  const baseId = useId()
  const [openIds, setOpenIds] = useState<string[]>([])

  function toggle(id: string) {
    setOpenIds((current) => {
      const isOpen = current.includes(id)
      if (allowMultiple) {
        return isOpen ? current.filter((item) => item !== id) : [...current, id]
      }
      return isOpen ? [] : [id]
    })
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = items.length - 1
    let next = index
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      next = index === last ? 0 : index + 1
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      next = index === 0 ? last : index - 1
    } else if (event.key === 'Home') {
      event.preventDefault()
      next = 0
    } else if (event.key === 'End') {
      event.preventDefault()
      next = last
    } else {
      return
    }
    const target = document.getElementById(`${baseId}-trigger-${items[next].id}`)
    target?.focus()
  }

  return (
    <div className={['space-y-3', className].join(' ')}>
      {items.map((item, index) => {
        const open = openIds.includes(item.id)
        const panelId = `${baseId}-panel-${item.id}`
        const triggerId = `${baseId}-trigger-${item.id}`

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
          >
            <h3 className="m-0">
              <button
                id={triggerId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span className="text-base font-semibold text-ink">{item.question}</span>
                <ChevronDown
                  className={[
                    'h-5 w-5 shrink-0 text-muted transition-transform duration-300',
                    open ? 'rotate-180' : '',
                  ].join(' ')}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={[
                'grid transition-[grid-template-rows] duration-300 ease-out',
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              ].join(' ')}
            >
              <div className="overflow-hidden">
                <div className="border-t border-line px-5 py-4 text-[15px] leading-relaxed text-muted">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
