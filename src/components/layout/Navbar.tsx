import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { SociTeaLogo } from '@/components/brand/SociTeaLogo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { getSignInUrl, isWebAppAvailable } from '@/config/products'

const navItems = [
  { to: '/features', label: 'Features' },
  { to: '/download', label: 'Download' },
  { to: '/extension', label: 'Extension' },
  { to: '/about', label: 'About' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const signInUrl = getSignInUrl()
  const webAvailable = isWebAppAvailable()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
      isActive ? 'text-forest bg-sage/70' : 'text-muted hover:text-forest hover:bg-sage/50',
    ].join(' ')

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b bg-cream/90 backdrop-blur-md transition-all duration-300',
        scrolled ? 'border-line shadow-sm py-2' : 'border-transparent py-3',
      ].join(' ')}
    >
      <Container className="grid grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <div className="justify-self-start">
          <SociTeaLogo />
        </div>

        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-2 lg:flex">
          {webAvailable ? (
            <Button
              href={signInUrl}
              variant="ghost"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign in
            </Button>
          ) : (
            <Button to="/web-app" variant="ghost" size="sm">
              Sign in
            </Button>
          )}
          <Button to="/download" size="sm">
            Get SociTea
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-xl border border-line bg-white text-forest lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-cream lg:hidden">
          <Container className="flex flex-col gap-2 py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/web-app" className={linkClass}>
                Web app
              </NavLink>
              <NavLink to="/faq" className={linkClass}>
                FAQ
              </NavLink>
            </nav>
            <div className="mt-2 flex flex-col gap-2 border-t border-line pt-4">
              <Button to="/web-app" variant="secondary">
                Sign in — coming soon
              </Button>
              <Button to="/download">Get SociTea</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
