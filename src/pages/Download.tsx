import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AndroidCard } from '@/components/product/AndroidCard'
import { BrowserExtensionCard } from '@/components/product/BrowserExtensionCard'
import { WebAppCard } from '@/components/product/WebAppCard'
import { isExtensionStoreAvailable } from '@/config/products'

export function Download() {
  return (
    <>
      <Seo
        title="Download"
        description="Get SociTea for Android, install the browser extension, or open the web experience when each surface is available."
        path="/download"
      />
      <section className="pb-10 pt-14 sm:pt-16">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Download center"
            title="Get SociTea."
            description="Choose the SociTea experience that works best for you. Download and install actions unlock only when verified URLs are configured."
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <AndroidCard showInstructions />
            <BrowserExtensionCard showInstructions />
            <WebAppCard showInstructions />
          </div>
        </Container>
      </section>

      {!isExtensionStoreAvailable() && (
        <section className="pb-20">
          <Container>
            <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Local extension install (developers)
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                These steps apply to a locally built extension only. They are not a published Chrome
                Web Store release.
              </p>
              <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
                <li>Obtain the extension&apos;s built files from your SociTea extension project.</li>
                <li>Open chrome://extensions in Chrome.</li>
                <li>Enable Developer mode.</li>
                <li>Select Load unpacked.</li>
                <li>Choose the extension&apos;s actual build directory.</li>
                <li>Pin SociTea to the browser toolbar.</li>
              </ol>
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
