import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { Accordion, type AccordionItem } from '@/components/ui/Accordion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  getAndroidAvailability,
  getExtensionAvailability,
  getWebAppAvailability,
  products,
} from '@/config/products'

export function FAQ() {
  const android = getAndroidAvailability()
  const extension = getExtensionAvailability()
  const web = getWebAppAvailability()

  const items: AccordionItem[] = [
    {
      id: 'what',
      question: 'What is SociTea?',
      answer:
        'SociTea is an AI-powered social content discovery and creation platform. It helps you find interesting ideas, shape them into posts with AI assistance, and keep drafts organized.',
    },
    {
      id: 'ai',
      question: 'How does SociTea use AI?',
      answer:
        'SociTea is designed to assist with drafting and adapting content from ideas, notes, and inspiration. Exact model providers and data-handling details for production AI features will be documented when those services are connected. This marketing site does not call a live AI API.',
    },
    {
      id: 'android-available',
      question: 'Is SociTea available for Android?',
      answer:
        android === 'available'
          ? 'Yes. A verified Android download destination is configured.'
          : 'Not yet publicly available. The Android experience is planned; the Download page will enable install actions only after a verified Play Store or APK URL is set.',
    },
    {
      id: 'android-download',
      question: 'Where can I download the Android application?',
      answer: (
        <>
          Visit the{' '}
          <Link to="/download" className="font-semibold text-forest underline">
            Download
          </Link>{' '}
          page. If no verified Play Store or APK URL is configured, the download button remains
          disabled and no simulated download is offered.
        </>
      ),
    },
    {
      id: 'extension-install',
      question: 'How do I install the browser extension?',
      answer:
        extension === 'available' ? (
          <>
            Use the Chrome Web Store link on the{' '}
            <Link to="/extension" className="font-semibold text-forest underline">
              Extension
            </Link>{' '}
            page.
          </>
        ) : (
          <>
            A published store listing is not configured yet. The{' '}
            <Link to="/extension" className="font-semibold text-forest underline">
              Extension
            </Link>{' '}
            page includes status details and a local developer install guide for built packages.
          </>
        ),
    },
    {
      id: 'web',
      question: 'Is SociTea available on the web?',
      answer:
        web === 'available' ? (
          <>
            Yes. Open it from the{' '}
            <Link to="/web-app" className="font-semibold text-forest underline">
              Web app
            </Link>{' '}
            page.
          </>
        ) : (
          <>
            The web workspace is in development. See{' '}
            <Link to="/web-app" className="font-semibold text-forest underline">
              /web-app
            </Link>{' '}
            for planned capabilities. This marketing site is not the application itself.
          </>
        ),
    },
    {
      id: 'pricing',
      question: 'Is SociTea free?',
      answer:
        'Pricing has not been finalized for public launch. Do not assume free forever, paid tiers, or trial terms until they are officially published.',
    },
    {
      id: 'accounts',
      question: 'Can I use the same account across platforms?',
      answer:
        'Cross-platform accounts are a goal of the connected SociTea ecosystem, but shared sign-in is not available from this website yet. Sign-in will point to the real web application when that URL is configured.',
    },
    {
      id: 'autopublish',
      question: 'Does SociTea publish posts automatically?',
      answer:
        'No. SociTea is designed to help you prepare content. Automatic publishing to social platforms is not a claimed feature of this website.',
    },
    {
      id: 'data',
      question: 'How is my data handled?',
      answer: (
        <>
          See the draft{' '}
          <Link to="/privacy" className="font-semibold text-forest underline">
            Privacy
          </Link>{' '}
          page for the current statement. Production data practices must be reviewed and finalized
          before launch; this site does not invent compliance certifications.
        </>
      ),
    },
    {
      id: 'issues',
      question: 'How do I report an issue?',
      answer: (
        <>
          Email{' '}
          <a
            href={`mailto:${products.supportEmail}`}
            className="font-semibold text-forest underline"
          >
            {products.supportEmail}
          </a>{' '}
          or use the{' '}
          <Link to="/contact" className="font-semibold text-forest underline">
            Contact
          </Link>{' '}
          page.
        </>
      ),
    },
    {
      id: 'contact',
      question: 'How can I contact the SociTea team?',
      answer: (
        <>
          Reach us at{' '}
          <a
            href={`mailto:${products.supportEmail}`}
            className="font-semibold text-forest underline"
          >
            {products.supportEmail}
          </a>{' '}
          or through the contact form at{' '}
          <Link to="/contact" className="font-semibold text-forest underline">
            /contact
          </Link>
          .
        </>
      ),
    },
  ]

  return (
    <>
      <Seo
        title="FAQ"
        description="Answers about SociTea availability, AI use, downloads, privacy, and support."
        path="/faq"
      />
      <section className="pb-20 pt-14 sm:pt-16">
        <Container className="max-w-3xl">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Straightforward answers. Availability, pricing, and sync claims stay limited to what is actually configured."
            className="mb-10"
          />
          <Accordion items={items} />
        </Container>
      </section>
    </>
  )
}
