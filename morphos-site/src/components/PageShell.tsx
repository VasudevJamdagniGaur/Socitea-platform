import { useEffect, type ReactNode } from 'react'
import { NavBar } from './NavBar'
import { ParticleField } from './ParticleField'

type PageShellProps = {
  title: string
  children: ReactNode
  /** Home embeds the Morphos experience and should not mount a second particle system. */
  showParticles?: boolean
  /** Home already has Morphos nav inside the iframe — hide the outer bar to avoid doubled labels. */
  showNav?: boolean
}

export function PageShell({
  title,
  children,
  showParticles = true,
  showNav = true,
}: PageShellProps) {
  useEffect(() => {
    document.title = title.includes('SociTea') ? title : `${title} · SociTea`
  }, [title])

  return (
    <div className="app-shell">
      {showParticles && <ParticleField />}
      {showNav && <NavBar />}
      {children}
    </div>
  )
}
