import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function FinalCTA() {
  return (
    <section className="pb-20 pt-8 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-forest/10 bg-forest px-6 py-12 text-white sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 20%, rgba(189,232,207,0.35), transparent 40%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.08), transparent 35%)',
            }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to give your ideas more room?
            </h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              Explore features, check product availability, or reach the team — SociTea is being
              built as a credible creative home, not a hype page.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/download" variant="mint" size="lg">
                Get SociTea
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                Contact the team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
