import { useState } from 'react'
import { FileText, Compass, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

type TabId = 'discover' | 'create' | 'drafts'

const tabs: { id: TabId; label: string; icon: typeof Compass }[] = [
  { id: 'discover', label: 'Discover', icon: Compass },
  { id: 'create', label: 'Create', icon: Sparkles },
  { id: 'drafts', label: 'Drafts', icon: FileText },
]

const sampleIdea = 'Why small daily habits matter more than occasional motivation.'

const samplePost = `Big changes rarely happen overnight.

Sometimes, the smallest habits are the ones that move us forward. A little consistency, repeated every day, can become something remarkable.

Start small. Keep showing up.`

export function ProductShowcase() {
  const [tab, setTab] = useState<TabId>('create')

  return (
    <section className="py-16 sm:py-20" aria-label="Product experience showcase">
      <Container>
        <SectionHeading
          title="One idea. So many ways to share it."
          description="Discover inspiration, shape your thoughts, and create content that sounds like you."
          align="center"
          className="mb-10"
        />

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
          <div
            className="flex flex-wrap gap-2 border-b border-line bg-sage/30 p-3 sm:p-4"
            role="tablist"
            aria-label="Sample product views"
          >
            {tabs.map((item) => {
              const Icon = item.icon
              const selected = tab === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`tab-${item.id}`}
                  aria-controls={`panel-${item.id}`}
                  className={[
                    'inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition',
                    selected
                      ? 'bg-forest text-white shadow-soft'
                      : 'bg-white text-muted hover:text-forest',
                  ].join(' ')}
                  onClick={() => setTab(item.id)}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </button>
              )
            })}
            <span className="ml-auto self-center text-[11px] font-medium uppercase tracking-wider text-muted">
              Sample content
            </span>
          </div>

          <div
            role="tabpanel"
            id={`panel-${tab}`}
            aria-labelledby={`tab-${tab}`}
            className="grid gap-0 lg:grid-cols-[220px_1fr]"
          >
            <aside className="border-b border-line bg-cream/60 p-4 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Discovery sidebar
              </p>
              <ul className="mt-3 space-y-2">
                {['Ideas for you', 'Saved clips', 'Trending topics', 'Writing prompts'].map(
                  (label, index) => (
                    <li
                      key={label}
                      className={[
                        'rounded-xl px-3 py-2 text-sm',
                        index === 0
                          ? 'bg-mint/50 font-semibold text-forest-dark'
                          : 'text-muted hover:bg-white',
                      ].join(' ')}
                    >
                      {label}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-6 rounded-2xl border border-line bg-white p-3">
                <p className="text-xs font-semibold text-forest">Drafts panel</p>
                <ul className="mt-2 space-y-2 text-xs text-muted">
                  <li className="rounded-lg bg-sage/40 px-2 py-1.5">Habits that stick · Draft</li>
                  <li className="rounded-lg px-2 py-1.5">Quiet mornings · Idea</li>
                </ul>
              </div>
            </aside>

            <div className="p-4 sm:p-6">
              {tab === 'discover' && <DiscoverPanel />}
              {tab === 'create' && <CreatePanel />}
              {tab === 'drafts' && <DraftsPanel />}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function DiscoverPanel() {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold text-ink">Feed of interesting ideas</p>
      {[
        {
          title: 'The compound effect of tiny routines',
          blurb: 'How small actions reshape creative output over time.',
        },
        {
          title: 'Reading with intention',
          blurb: 'Turn articles into shareable insights without losing your voice.',
        },
      ].map((card) => (
        <article key={card.title} className="rounded-2xl border border-line bg-cream/50 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
            Sample article card
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-ink">{card.title}</h3>
          <p className="mt-2 text-sm text-muted">{card.blurb}</p>
        </article>
      ))}
    </div>
  )
}

function CreatePanel() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-line bg-cream/40 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">Input idea</p>
        <p className="mt-3 text-sm leading-relaxed text-ink">{sampleIdea}</p>
        <div className="mt-4 inline-flex rounded-xl bg-forest px-3 py-2 text-xs font-semibold text-white">
          AI content creation panel
        </div>
      </div>
      <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Social post preview · sample
        </p>
        <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink">
          {samplePost}
        </pre>
      </div>
    </div>
  )
}

function DraftsPanel() {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-ink">Organized drafts</p>
      {[
        { title: 'Daily habits LinkedIn draft', status: 'Ready to refine' },
        { title: 'Morning focus thread', status: 'Idea captured' },
        { title: 'Extension clip — reading list', status: 'Needs rewrite' },
      ].map((draft) => (
        <div
          key={draft.title}
          className="flex flex-col gap-1 rounded-2xl border border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-medium text-ink">{draft.title}</p>
            <p className="text-xs text-muted">Sample draft content</p>
          </div>
          <span className="text-xs font-semibold text-forest">{draft.status}</span>
        </div>
      ))}
    </div>
  )
}
