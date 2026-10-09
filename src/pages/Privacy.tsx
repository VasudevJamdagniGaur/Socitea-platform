import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { products } from '@/config/products'

export function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Draft privacy information for the SociTea website and upcoming products."
        path="/privacy"
      />
      <section className="pb-20 pt-14 sm:pt-16">
        <Container>
          <p className="eyebrow">Legal · Draft for review</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted">
            Last updated: {products.legal.lastUpdated}. This document is a draft and must be
            reviewed and finalized by qualified counsel before public launch.
          </p>

          <div className="prose-legal mt-10">
            <p>
              {products.legal.companyName} (&quot;SociTea,&quot; &quot;we,&quot; &quot;us&quot;)
              operates this marketing website. This draft describes how we intend to handle
              information related to the public site. It does not invent certifications, compliance
              guarantees, or detailed AI training claims.
            </p>

            <h2>1. Scope</h2>
            <p>
              This draft applies to the SociTea marketing website. Separate notices may apply when
              the Android app, browser extension, or web application become available and collect
              account or content data.
            </p>

            <h2>2. Information you may provide</h2>
            <p>
              If you contact us by email or through the contact form mailto fallback, you provide
              the information included in that message (such as name, email address, and message
              content). This website does not store contact form submissions in a database.
            </p>

            <h2>3. Information collected automatically</h2>
            <p>
              Like most websites, hosting providers or analytics tools (if later configured) may
              process technical data such as IP address, browser type, and pages visited. No
              analytics vendor is asserted here until one is actually implemented and disclosed.
            </p>

            <h2>4. How we use information</h2>
            <ul>
              <li>Respond to support and contact requests</li>
              <li>Operate and improve the marketing website</li>
              <li>Communicate about SociTea products when you ask us to</li>
            </ul>

            <h2>5. AI-related processing</h2>
            <p>
              This marketing site does not send your messages to an AI provider. When SociTea
              products use AI features, their data practices, retention, and subprocessors must be
              described accurately in a finalized privacy notice before those features are offered
              to the public.
            </p>

            <h2>6. Sharing</h2>
            <p>
              We do not sell personal information. Service providers that help host or operate
              SociTea may process data solely to provide those services, under appropriate
              agreements once selected.
            </p>

            <h2>7. Retention</h2>
            <p>
              Retention periods for product accounts and content are not yet finalized. Contact
              emails are retained only as long as needed to respond and maintain ordinary business
              records.
            </p>

            <h2>8. Your choices</h2>
            <p>
              You may email {products.supportEmail} to request updates or ask questions about
              information you have sent us. Additional rights may apply depending on your location
              and will be reflected in the finalized policy.
            </p>

            <h2>9. Children</h2>
            <p>
              The SociTea marketing website is not directed to children under 13, and we do not
              knowingly collect personal information from children.
            </p>

            <h2>10. Changes</h2>
            <p>
              We may update this draft as the product launches. Material changes should be reflected
              with a new &quot;Last updated&quot; date.
            </p>

            <h2>11. Contact</h2>
            <p>
              Questions about this draft: {products.supportEmail}
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
