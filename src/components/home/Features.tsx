import {
  Compass,
  Files,
  Layers,
  Puzzle,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'

const features = [
  {
    title: 'AI Content Creation',
    description: 'Turn rough thoughts, notes, and inspiration into polished social content.',
    icon: Sparkles,
    label: 'Core',
  },
  {
    title: 'Discover Ideas',
    description: 'Explore interesting topics and find inspiration for your next post.',
    icon: Compass,
    label: 'Core',
  },
  {
    title: 'Browser Extension',
    description: 'Capture inspiration while browsing and bring it into your creative workflow.',
    icon: Puzzle,
    label: 'Planned',
  },
  {
    title: 'Organized Drafts',
    description: 'Keep your ideas and drafts organized so good thoughts never get lost.',
    icon: Files,
    label: 'Core',
  },
  {
    title: 'Multi-Platform Formats',
    description: 'Adapt your ideas to the tone and format of different social platforms.',
    icon: Layers,
    label: 'Planned',
  },
  {
    title: 'Connected Workspace',
    description: 'Build toward a connected experience across supported SociTea products.',
    icon: Workflow,
    label: 'Coming soon',
  },
]

export function Features() {
  return (
    <section className="py-16 sm:py-20" aria-label="Features">
      <Container>
        <SectionHeading
          title="Everything you need to turn ideas into content."
          description="A focused toolkit for discovery, AI-assisted drafting, and keeping your creative work organized — with clearer labels for what is available versus planned."
          className="mb-10"
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group rounded-3xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-mint hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sage text-forest transition group-hover:bg-mint">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <Badge
                    tone={
                      feature.label === 'Core'
                        ? 'success'
                        : feature.label === 'Coming soon'
                          ? 'warning'
                          : 'neutral'
                    }
                  >
                    {feature.label}
                  </Badge>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
