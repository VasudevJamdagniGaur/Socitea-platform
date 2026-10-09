import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { products } from '@/config/products'

export function Terms() {
  return (
    <>
      <Seo
        title="Terms of Use"
        description="Draft terms of use for the SociTea marketing website."
        path="/terms"
      />
      <section className="pb-20 pt-14 sm:pt-16">
        <Container>
          <p className="eyebrow">Legal · Draft for review</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-muted">
            Last updated: {products.legal.lastUpdated}. This document is a draft and must be
            reviewed and finalized before the website is publicly launched.
          </p>

          <div className="prose-legal mt-10">
            <p>
              These draft Terms of Use govern access to the SociTea marketing website operated by{' '}
              {products.legal.companyName}. By using this website, you agree to these draft terms
              for informational browsing. Product-specific terms may apply when Android, extension,
              or web application services launch.
            </p>

            <h2>1. The website</h2>
            <p>
              This site provides information about SociTea and links to product surfaces when
              verified URLs are configured. Marketing descriptions do not guarantee feature
              availability, pricing, release dates, or third-party store approvals.
            </p>

            <h2>2. No fake availability</h2>
            <p>
              Download, install, and open actions are enabled only when official destinations are
              configured. &quot;Coming soon&quot; and &quot;in development&quot; labels mean the
              surface is not yet publicly available through this site.
            </p>

            <h2>3. Acceptable use</h2>
            <ul>
              <li>Do not attempt to disrupt or misuse the website</li>
              <li>Do not scrape the site in a way that impairs service</li>
              <li>Do not use the site for unlawful purposes</li>
            </ul>

            <h2>4. Intellectual property</h2>
            <p>
              SociTea names, logos, and site content are owned by {products.legal.companyName} or
              its licensors unless otherwise noted. You may not copy or reuse brand assets without
              permission, except for ordinary browser caching and linking.
            </p>

            <h2>5. Third-party links</h2>
            <p>
              Links to Play Store, Chrome Web Store, or other destinations (when configured) are
              provided for convenience. SociTea is not responsible for third-party sites or their
              terms.
            </p>

            <h2>6. Disclaimers</h2>
            <p>
              The website is provided &quot;as is&quot; without warranties of any kind to the fullest
              extent permitted by law. AI-assisted product features, when released, may produce
              inaccurate or incomplete output and require human review before publishing.
            </p>

            <h2>7. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {products.legal.companyName} will not be
              liable for indirect, incidental, or consequential damages arising from use of this
              marketing website. This clause will be finalized with counsel before launch.
            </p>

            <h2>8. Contact</h2>
            <p>
              Questions about these draft terms: {products.supportEmail}
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
