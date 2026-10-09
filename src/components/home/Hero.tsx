import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Bookmark, Puzzle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SociTeaMarkIcon } from '@/components/brand/SociTeaLogo'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(189,232,207,0.35), transparent 40%), radial-gradient(circle at 80% 10%, rgba(23,61,50,0.08), transparent 35%)',
        }}
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="eyebrow">Discover. Create. Share.</p>
            <h1 className="mt-4 max-w-xl font-display text-[2.35rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
              Your ideas deserve a bigger audience.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              SociTea helps you turn what you discover, read, and think into content worth sharing.
              Discover ideas, create with AI, and make your voice heard.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button to="/features" size="lg">
                Explore SociTea
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button to="/extension" variant="secondary" size="lg">
                Get the Extension
              </Button>
            </div>
            <Link
              to="/download"
              className="mt-4 inline-flex text-sm font-semibold text-forest underline-offset-4 hover:underline"
            >
              Download the mobile app
            </Link>
            <p className="mt-6 text-sm text-muted">One creative space. Multiple ways to create.</p>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            aria-label="SociTea product preview mockup"
          >
            <HeroProductPreview />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function HeroProductPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-mint/40 via-transparent to-sage/60 blur-2xl" />

      <div className="mock-chrome">
        <div className="flex items-center gap-2 border-b border-line bg-sage/40 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8B4B4]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8D9A8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#B7D7B0]" />
          <div className="ml-2 flex-1 rounded-lg bg-white px-3 py-1.5 text-xs text-muted">
            app.socitea — sample workspace
          </div>
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-[0.9fr_1.1fr] sm:p-4">
          <div className="space-y-3">
            <div className="rounded-2xl border border-line bg-cream/80 p-3">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-forest">
                <Sparkles className="h-3.5 w-3.5" />
                Discover
              </div>
              <ul className="space-y-2">
                {[
                  'Daily habits that compound',
                  'Quiet focus in a noisy feed',
                  'Writing that sounds like you',
                ].map((topic) => (
                  <li
                    key={topic}
                    className="rounded-xl border border-line/80 bg-white px-3 py-2 text-xs text-ink"
                  >
                    {topic}
                    <span className="mt-1 block text-[10px] uppercase tracking-wide text-muted">
                      Sample topic
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-dashed border-forest/20 bg-white p-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-forest">
                  <Bookmark className="h-3.5 w-3.5" />
                  Draft saved
                </div>
                <span className="rounded-full bg-mint/60 px-2 py-0.5 text-[10px] font-semibold text-forest-dark">
                  Just now
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                “Start small. Keep showing up.” — sample draft
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-line bg-white p-3 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                AI creation workspace
              </p>
              <p className="mt-2 rounded-xl bg-sage/50 px-3 py-2 text-xs leading-relaxed text-ink">
                Turn this idea into an engaging LinkedIn post.
              </p>
              <div className="mt-3 rounded-xl border border-line bg-cream/70 p-3">
                <p className="text-[11px] font-medium text-muted">Generated preview · sample</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink">
                  Big changes rarely happen overnight. Sometimes, the smallest habits are the ones
                  that move us forward.
                </p>
                <div className="mt-3 h-16 rounded-lg border border-dashed border-line bg-white/80 p-2 text-[11px] text-muted">
                  Editable draft area — sample content
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-forest-dark p-3 text-white shadow-lift">
              <div className="mb-2 flex items-center gap-2">
                <SociTeaMarkIcon className="h-6 w-6" />
                <div>
                  <p className="text-xs font-semibold">SociTea Extension</p>
                  <p className="text-[10px] text-white/60">Browser popup preview</p>
                </div>
              </div>
              <div className="rounded-xl bg-white/10 p-2.5 text-[11px] leading-relaxed text-white/85">
                Selected text captured from the page — ready to reshape into a post.
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-lg bg-mint px-2 py-1 text-[10px] font-semibold text-forest-dark">
                  <Puzzle className="h-3 w-3" />
                  Capture
                </span>
                <span className="rounded-lg bg-white/10 px-2 py-1 text-[10px] text-white/70">
                  Sample demo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
