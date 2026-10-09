import { Check } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Features as FeatureGrid } from '@/components/home/Features'
import { HowItWorks } from '@/components/home/HowItWorks'
import { FinalCTA } from '@/components/home/FinalCTA'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'

const capabilityGroups = [
  {
    title: 'Available in the product vision',
    tone: 'success' as const,
    items: [
      'AI-assisted drafting from notes and ideas',
      'Idea discovery and inspiration browsing',
      'Draft organization for work in progress',
    ],
  },
  {
    title: 'Planned capabilities',
    tone: 'neutral' as const,
    items: [
      'Browser extension capture workflow',
      'Multi-platform tone and format adaptation',
      'Connected experiences across Android, web, and extension',
    ],
  },
  {
    title: 'Not claimed today',
    tone: 'warning' as const,
    items: [
      'Automatic publishing to social networks',
      'Verified cross-device account sync (until accounts ship)',
      'Published store listings without configured URLs',
    ],
  },
]

export function FeaturesPage() {
  return (
    <>
      <Seo
        title="Features"
        description="Explore how SociTea helps you discover ideas, create with AI, and organize drafts across planned product surfaces."
        path="/features"
      />
      <section className="pb-8 pt-14 sm:pt-16">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Features"
            title="A creative workflow built around real ideas."
            description="SociTea connects discovery, AI-assisted creation, and draft organization — with honest labels for what is core, planned, or coming soon."
          />
        </Container>
      </section>

      <FeatureGrid />

      <section className="pb-8">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {capabilityGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-line bg-white p-6 shadow-sm"
              >
                <Badge tone={group.tone}>{group.title}</Badge>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <HowItWorks />
      <FinalCTA />
    </>
  )
}
