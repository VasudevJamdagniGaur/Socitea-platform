import { Seo } from '@/components/seo/Seo'
import { ExtensionPreview } from '@/components/extension/ExtensionPreview'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import {
  availabilityLabel,
  getExtensionAvailability,
  isExtensionStoreAvailable,
  products,
} from '@/config/products'

export function Extension() {
  const status = getExtensionAvailability()
  const storeReady = isExtensionStoreAvailable()

  return (
    <>
      <Seo
        title="Browser Extension"
        description="Capture inspiration from the web and bring it into your SociTea creative workflow."
        path="/extension"
      />
      <section className="pb-10 pt-14 sm:pt-16">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone={status === 'available' ? 'success' : 'warning'}>
              {availabilityLabel(status)}
            </Badge>
            <span className="text-sm text-muted">Chrome · SociTea Extension</span>
          </div>
          <SectionHeading
            as="h1"
            className="mt-4"
            title="Your next great post can start anywhere."
            description="Capture inspiration from the web and bring it into your SociTea creative workflow."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {storeReady ? (
              <Button
                href={products.extension.chromeWebStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Get the Extension
              </Button>
            ) : (
              <Button disabled size="lg">
                Get the Extension — coming soon
              </Button>
            )}
            <Button href="#how-it-works" variant="secondary" size="lg">
              See How It Works
            </Button>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <ExtensionPreview />
        </Container>
      </section>

      <section id="how-it-works" className="pb-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-ink">How installation works</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Get SociTea',
                body: storeReady
                  ? 'Open the verified Chrome Web Store listing and add SociTea.'
                  : 'When published, Add to Chrome will open the verified store listing. Until then, developers can load a local build.',
              },
              {
                title: 'Capture while browsing',
                body: 'Select text or ideas on the web and open the SociTea popup to reshape them into draft content.',
              },
              {
                title: 'Continue in SociTea',
                body: 'Refine, organize, and prepare posts in your SociTea workspace when the connected products are available.',
              },
            ].map((step, index) => (
              <li key={step.title} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mint text-sm font-bold text-forest-dark">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>

          {!storeReady && (
            <div className="mt-8 rounded-3xl border border-line bg-sage/40 p-6">
              <h3 className="font-semibold text-ink">Developer install guide</h3>
              <p className="mt-2 text-sm text-muted">
                Not a store release. Use only with a locally built SociTea extension package.
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted">
                <li>Obtain the extension&apos;s built files.</li>
                <li>Open chrome://extensions in Chrome.</li>
                <li>Enable Developer mode.</li>
                <li>Select Load unpacked.</li>
                <li>Choose the extension&apos;s actual build directory.</li>
                <li>Pin SociTea to the browser toolbar.</li>
              </ol>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
