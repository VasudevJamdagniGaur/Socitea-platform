import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Find an interesting idea, article, trend, or thought worth exploring.',
    visual: (
      <div className="rounded-2xl border border-line bg-cream/70 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
          Editorial discovery
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          Why small daily habits matter
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Sample card — inspiration from reading, browsing, or a quiet thought.
        </p>
      </div>
    ),
  },
  {
    step: '02',
    title: 'Create',
    description: 'Use AI assistance to shape the idea into content that fits your voice.',
    visual: (
      <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
          Creation interface
        </p>
        <div className="mt-2 rounded-xl bg-sage/50 px-3 py-2 text-xs text-ink">
          Prompt: Rewrite for LinkedIn · warm, concise
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          Sample output appears here for review — not a live AI request.
        </p>
      </div>
    ),
  },
  {
    step: '03',
    title: 'Share',
    description: 'Review your draft, refine the details, and prepare it for the platform you choose.',
    visual: (
      <div className="rounded-2xl border border-line bg-forest-dark p-4 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-mint">
          Post preview
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/90">
          Start small. Keep showing up. Consistency compounds.
        </p>
        <p className="mt-3 text-[11px] text-white/55">
          Preparation only — SociTea does not auto-publish.
        </p>
      </div>
    ),
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20" aria-label="How SociTea works">
      <Container>
        <SectionHeading
          title="From inspiration to expression."
          description="A simple path from curiosity to a draft you are proud to share — without promising automatic publishing."
          align="center"
          className="mb-12"
        />

        <ol className="relative grid gap-6 lg:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-forest/25 to-transparent lg:block"
            aria-hidden="true"
          />
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-3xl border border-line bg-white p-6 shadow-soft"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint text-sm font-bold text-forest-dark">
                {item.step}
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              <div className="mt-5">{item.visual}</div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
