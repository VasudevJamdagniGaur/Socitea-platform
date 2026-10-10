import { PageShell } from '../components/PageShell'

export function HomePage() {
  return (
    <PageShell
      title="SociTea — Discover. Create. Share."
      showParticles={false}
      showNav={false}
    >
      <h1 className="sr-only">SociTea home</h1>
      <iframe
        className="home-frame"
        src="/experience/index.html"
        title="SociTea immersive experience"
      />
    </PageShell>
  )
}
