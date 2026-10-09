import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you requested does not exist on the SociTea website."
        path="/404"
        noIndex
      />
      <section className="flex flex-1 items-center py-24">
        <Container className="max-w-xl text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
            This page steeped away.
          </h1>
          <p className="mt-4 text-muted">
            The address may be mistyped, or the page may have moved. Head home or browse the
            download center.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/">Back to home</Button>
            <Button to="/download" variant="secondary">
              Get SociTea
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
