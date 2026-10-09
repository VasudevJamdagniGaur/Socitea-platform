import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FinalCTA } from '@/components/home/FinalCTA'

export function About() {
  return (
    <>
      <Seo
        title="About"
        description="Learn why SociTea exists and how the app, web experience, and extension fit together."
        path="/about"
      />
      <section className="pb-12 pt-14 sm:pt-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            as="h1"
            eyebrow="About SociTea"
            title="Making space for better ideas."
            description="SociTea aims to connect content discovery, AI-assisted creativity, and social expression in one approachable ecosystem."
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-8 shadow-soft">
            <div
              className="absolute inset-0 opacity-70"
              aria-hidden="true"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(189,232,207,0.55), transparent 45%), radial-gradient(circle at 80% 70%, rgba(230,238,231,0.9), transparent 40%)',
              }}
            />
            <div className="relative space-y-4">
              <p className="font-display text-2xl font-semibold text-forest-dark">
                Social + Tea
              </p>
              <p className="text-sm leading-relaxed text-muted">
                A calmer creative metaphor: steep ideas, share thoughtfully, and keep your drafts in
                one place — without noise, fake metrics, or borrowed brand identities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Mission',
              body: 'Help people turn what they discover and think into content worth sharing — with AI as an assistant, not a substitute for voice.',
            },
            {
              title: 'Vision',
              body: 'A connected SociTea ecosystem across web, Android, and browser extension so inspiration can move with you.',
            },
            {
              title: 'Why SociTea exists',
              body: 'Interesting ideas often get lost between tabs, notes, and half-finished drafts. SociTea is being built to close that gap with clarity and care.',
            },
            {
              title: 'How the products fit',
              body: 'The website is the home for discovery and distribution. The web app is the workspace. Android brings the workflow mobile. The extension captures inspiration while browsing.',
            },
          ].map((block) => (
            <article key={block.title} className="rounded-3xl border border-line bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-ink">{block.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{block.body}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="rounded-3xl border border-line bg-sage/40 px-6 py-8 sm:px-10">
            <h2 className="font-display text-2xl font-semibold text-ink">Explore SociTea</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
              This page intentionally omits invented founders, funding stories, or partnership
              claims. What matters is the product direction — and shipping it honestly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/features">Explore features</Button>
              <Button to="/download" variant="secondary">
                Get SociTea
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
