import { Link } from 'react-router-dom'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getAndroidAvailability, getExtensionAvailability, getWebAppAvailability } from '@/config/products'

export function FAQPreview() {
  const android = getAndroidAvailability()
  const extension = getExtensionAvailability()
  const web = getWebAppAvailability()

  return (
    <section className="py-16 sm:py-20" aria-label="FAQ preview">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            title="Questions, answered clearly."
            description="Availability and product status stay honest — no invented downloads or fake launch claims."
          />
          <Button to="/faq" variant="secondary" className="mt-6">
            View all FAQs
          </Button>
        </div>
        <Accordion
          items={[
            {
              id: 'what',
              question: 'What is SociTea?',
              answer:
                'SociTea is an AI-powered platform for discovering ideas and turning them into social content you can refine and share.',
            },
            {
              id: 'android',
              question: 'Is SociTea available for Android?',
              answer:
                android === 'available'
                  ? 'Yes — a verified Android download link is configured on the Download page.'
                  : 'Not yet. The Android app is planned; the Download page will unlock when a verified Play Store or APK URL is published.',
            },
            {
              id: 'extension',
              question: 'How do I install the browser extension?',
              answer:
                extension === 'available' ? (
                  <>
                    Use Add to Chrome on the{' '}
                    <Link to="/extension" className="font-semibold text-forest underline">
                      Extension
                    </Link>{' '}
                    page.
                  </>
                ) : (
                  <>
                    The Chrome Web Store listing is not published yet. See the{' '}
                    <Link to="/extension" className="font-semibold text-forest underline">
                      Extension
                    </Link>{' '}
                    page for status and a local developer install guide.
                  </>
                ),
            },
            {
              id: 'web',
              question: 'Is SociTea available on the web?',
              answer:
                web === 'available'
                  ? 'Yes — open it from the Web app page using the configured application URL.'
                  : 'The web workspace is in development. The /web-app page explains what is planned and how to stay updated.',
            },
          ]}
        />
      </Container>
    </section>
  )
}
