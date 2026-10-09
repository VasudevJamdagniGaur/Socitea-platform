import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AndroidCard } from '@/components/product/AndroidCard'
import { BrowserExtensionCard } from '@/components/product/BrowserExtensionCard'
import { WebAppCard } from '@/components/product/WebAppCard'

export function PlatformCards() {
  return (
    <section className="py-16 sm:py-20" aria-label="Platform availability">
      <Container>
        <SectionHeading
          title="Your creative space, wherever you need it."
          description="Android, browser extension, and web — each surface links only when a verified destination is configured."
          align="center"
          className="mb-10"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <AndroidCard />
          <BrowserExtensionCard />
          <WebAppCard />
        </div>
      </Container>
    </section>
  )
}
