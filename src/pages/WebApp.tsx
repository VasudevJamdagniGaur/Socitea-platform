import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import {
  availabilityLabel,
  getWebAppAvailability,
  isWebAppAvailable,
  products,
} from '@/config/products'

const planned = [
  'Discover ideas and inspiration in one workspace',
  'Create social drafts with AI assistance',
  'Organize and revisit saved drafts',
  'Continue work started from the browser extension',
  'Sign in to personalized features when accounts ship',
]

export function WebApp() {
  const available = isWebAppAvailable()
  const status = getWebAppAvailability()

  return (
    <>
      <Seo
        title="Web App"
        description="Entry point for the SociTea web application workspace."
        path="/web-app"
        noIndex={!available}
      />
      <section className="pb-20 pt-14 sm:pt-16">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone={available ? 'success' : 'warning'}>{availabilityLabel(status)}</Badge>
            <span className="text-sm text-muted">SociTea web application entry</span>
          </div>

          {available ? (
            <>
              <SectionHeading
                as="h1"
                className="mt-4"
                title="Open your SociTea workspace."
                description="A verified web application URL is configured. This page is the entry point — not a substitute login screen."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={products.webApp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  Open SociTea Web
                </Button>
                <Button to="/features" variant="secondary" size="lg">
                  Explore features
                </Button>
              </div>
            </>
          ) : (
            <>
              <SectionHeading
                as="h1"
                className="mt-4"
                title="Your SociTea workspace is on its way."
                description="We're building a connected space to discover ideas, create content, and organize your drafts."
              />
              <p className="mt-4 max-w-2xl text-sm text-muted">
                Sign-in and account creation are not available on this marketing site. When the web
                application is deployed, this page will offer a direct open action.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/features" size="lg">
                  Explore features
                </Button>
                <Button to="/download" variant="secondary" size="lg">
                  Download center
                </Button>
                <Button to="/contact" variant="ghost" size="lg">
                  Contact
                </Button>
              </div>
            </>
          )}

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
              <div className="border-b border-line bg-sage/40 px-4 py-3 text-xs text-muted">
                Planned workspace preview · sample UI
              </div>
              <div className="grid min-h-[260px] grid-cols-[88px_1fr] gap-3 p-4">
                <aside className="rounded-2xl bg-forest p-3 text-white">
                  <div className="h-2 w-12 rounded bg-mint/80" />
                  <div className="mt-3 space-y-2">
                    {['Home', 'Create', 'Drafts'].map((item) => (
                      <div key={item} className="rounded-lg bg-white/10 px-2 py-1.5 text-[10px]">
                        {item}
                      </div>
                    ))}
                  </div>
                </aside>
                <div className="space-y-3">
                  <div className="rounded-2xl border border-line bg-cream/70 p-3">
                    <p className="text-xs font-semibold text-forest">Discover</p>
                    <p className="mt-2 text-sm text-ink">Sample idea cards will live here.</p>
                  </div>
                  <div className="rounded-2xl border border-line p-3">
                    <p className="text-xs font-semibold text-forest">Create</p>
                    <p className="mt-2 text-sm text-muted">
                      AI drafting panel — planned capability, not a live demo backend.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Intended capabilities
              </h2>
              <p className="mt-2 text-sm text-muted">
                Clearly marked as planned until the deployed web application is ready.
              </p>
              <ul className="mt-5 space-y-3">
                {planned.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-mint" aria-hidden="true" />
                    <span>
                      <span className="font-semibold text-ink">Planned — </span>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
