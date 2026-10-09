import { useMemo, useState } from 'react'
import { Check, Copy, Save } from 'lucide-react'
import { SociTeaMarkIcon } from '@/components/brand/SociTeaLogo'
import { Button } from '@/components/ui/Button'

const contentTypes = ['LinkedIn Post', 'X / Twitter', 'Short note'] as const
const tones = ['Warm', 'Professional', 'Bold'] as const

type ContentType = (typeof contentTypes)[number]
type Tone = (typeof tones)[number]

const samples: Record<ContentType, Record<Tone, string>> = {
  'LinkedIn Post': {
    Warm: `Big changes rarely happen overnight.

Sometimes, the smallest habits are the ones that move us forward. A little consistency, repeated every day, can become something remarkable.

Start small. Keep showing up.`,
    Professional: `Meaningful progress is usually cumulative.

Consistent daily habits outperform occasional bursts of motivation because they compound quietly over time.

Focus on systems you can sustain.`,
    Bold: `Motivation is unreliable. Habits are not.

If you want results that last, stop waiting for inspiration and start building tiny, repeatable actions.

Show up. Then show up again.`,
  },
  'X / Twitter': {
    Warm: `Small habits beat big intentions.

A little consistency each day can quietly change everything.`,
    Professional: `Daily systems outperform sporadic motivation.

Compound the small things.`,
    Bold: `Don't wait to feel ready.

Build the habit. Momentum follows.`,
  },
  'Short note': {
    Warm: `Reminder: tiny daily steps still count.`,
    Professional: `Note: prioritize sustainable routines over occasional intensity.`,
    Bold: `Action > inspiration. Start smaller than you think.`,
  },
}

const selectedTextSample =
  'Why small daily habits matter more than occasional motivation.'

export function ExtensionPreview() {
  const [contentType, setContentType] = useState<ContentType>('LinkedIn Post')
  const [tone, setTone] = useState<Tone>('Warm')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  const preview = useMemo(() => samples[contentType][tone], [contentType, tone])

  function generate() {
    setOutput(preview)
    setCopied(false)
    setSaveMessage('')
  }

  async function copyOutput() {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
      setSaveMessage('Clipboard access was blocked in this browser. You can select and copy manually.')
    }
  }

  function saveDraft() {
    setSaveMessage(
      'Saving drafts requires the actual SociTea extension or web application. This page is a local product demo only.',
    )
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="mock-chrome">
        <div className="flex items-center gap-2 border-b border-line bg-sage/40 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8B4B4]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8D9A8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#B7D7B0]" />
          <div className="ml-2 flex-1 rounded-lg bg-white px-3 py-1.5 text-xs text-muted">
            article.example / habits — sample webpage
          </div>
        </div>
        <div className="relative min-h-[280px] bg-gradient-to-br from-cream to-sage/80 p-5 sm:p-8">
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Sample article body. Highlight a sentence, open SociTea, and reshape it into a post —
            illustrated here with local demo data only.
          </p>
          <p className="mt-4 max-w-sm rounded-xl bg-mint/40 px-3 py-2 text-sm font-medium text-forest-dark">
            {selectedTextSample}
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-line bg-white p-4 shadow-lift sm:p-5">
        <div className="mb-4 flex items-center gap-2">
          <SociTeaMarkIcon className="h-8 w-8" />
          <div>
            <p className="font-semibold text-ink">SociTea</p>
            <p className="text-xs text-muted">Extension popup · product demo</p>
          </div>
        </div>

        <label className="block text-xs font-semibold uppercase tracking-wider text-muted">
          Selected text
        </label>
        <p className="mt-1.5 rounded-xl bg-sage/40 px-3 py-2 text-sm text-ink">{selectedTextSample}</p>

        <fieldset className="mt-4">
          <legend className="text-xs font-semibold uppercase tracking-wider text-muted">
            Content type
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {contentTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={[
                  'rounded-xl px-3 py-1.5 text-xs font-semibold transition',
                  contentType === type
                    ? 'bg-forest text-white'
                    : 'bg-cream text-muted hover:text-forest',
                ].join(' ')}
                aria-pressed={contentType === type}
                onClick={() => setContentType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-4">
          <legend className="text-xs font-semibold uppercase tracking-wider text-muted">Tone</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {tones.map((item) => (
              <button
                key={item}
                type="button"
                className={[
                  'rounded-xl px-3 py-1.5 text-xs font-semibold transition',
                  tone === item ? 'bg-mint text-forest-dark' : 'bg-cream text-muted hover:text-forest',
                ].join(' ')}
                aria-pressed={tone === item}
                onClick={() => setTone(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>

        <Button className="mt-4 w-full" onClick={generate}>
          Generate content
        </Button>
        <p className="mt-2 text-[11px] text-muted">
          Demo only — displays predefined sample content. No live AI request is made.
        </p>

        <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-muted">
          Generated preview
        </label>
        <textarea
          readOnly
          value={output || 'Generated sample content will appear here.'}
          className="mt-1.5 min-h-[140px] w-full resize-y rounded-2xl border border-line bg-cream/50 px-3 py-2 text-sm leading-relaxed text-ink"
          aria-label="Generated content preview"
        />

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Button
            variant="secondary"
            className="w-full"
            onClick={copyOutput}
            disabled={!output}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied' : 'Copy'}
          </Button>
          <Button variant="outline" className="w-full" onClick={saveDraft}>
            <Save className="h-4 w-4" />
            Save draft
          </Button>
        </div>
        {saveMessage && (
          <p className="mt-3 text-xs leading-relaxed text-muted" role="status">
            {saveMessage}
          </p>
        )}
      </div>
    </div>
  )
}
