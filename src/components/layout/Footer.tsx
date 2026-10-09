import { Link } from 'react-router-dom'
import { SociTeaLogo } from '@/components/brand/SociTeaLogo'
import { Container } from '@/components/ui/Container'
import { getConfiguredSocialLinks, products } from '@/config/products'

const productLinks = [
  { to: '/features', label: 'Features' },
  { to: '/download', label: 'Download' },
  { to: '/extension', label: 'Extension' },
  { to: '/web-app', label: 'Web app' },
]

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' },
]

const legalLinks = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
]

export function Footer() {
  const year = new Date().getFullYear()
  const social = getConfiguredSocialLinks()

  return (
    <footer className="mt-auto border-t border-line bg-forest-dark text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <SociTeaLogo variant="footer" linkToHome />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {products.brand.shortDescription}
            </p>
            {social.length > 0 && (
              <ul className="flex flex-wrap gap-3 pt-1">
                {social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-mint hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {products.legal.companyName}. All rights reserved.
          </p>
          <p>One creative space. Multiple ways to create.</p>
        </div>
      </Container>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { to: string; label: string }[]
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-mint">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-sm text-white/75 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
