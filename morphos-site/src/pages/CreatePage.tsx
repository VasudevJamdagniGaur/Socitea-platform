import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PageShell } from '../components/PageShell'

const formats = ['LinkedIn Post', 'Social Post', 'Caption', 'Outline'] as const
const tones = ['Professional', 'Conversational', 'Thoughtful', 'Bold'] as const

type Format = (typeof formats)[number]
type Tone = (typeof tones)[number]

const samples: Record<Format, Record<Tone, string>> = {
  'LinkedIn Post': {
    Professional:
      'Meaningful progress rarely arrives all at once.\n\nThe ideas we collect, refine, and revisit are what turn scattered inspiration into content with clarity.\n\nStart with one insight. Shape it carefully. Share it when it sounds like you.',
    Conversational:
      'Ever save something interesting… and then completely forget why it mattered?\n\nThat happens to me too. The difference is having a simple place to catch the idea and turn it into a draft before it disappears.\n\nOne spark is enough to start.',
    Thoughtful:
      'Some of the best posts begin as quiet observations.\n\nNot a viral hook. Not a perfect plan. Just a thought worth keeping — and the patience to shape it into something clear.\n\nYour voice grows when you give ideas room to settle.',
    Bold:
      'Stop waiting for the perfect content calendar.\n\nCapture the idea. Shape the draft. Publish the point.\n\nMomentum belongs to creators who turn inspiration into words.',
  },
  'Social Post': {
    Professional: 'One clear idea, refined with care, is more valuable than ten unfinished drafts.',
    Conversational: 'That random note you saved earlier? It might be your next post.',
    Thoughtful: 'Inspiration is everywhere. Expression takes intention.',
    Bold: 'Your next post is already hiding in what you noticed today.',
  },
  Caption: {
    Professional: 'From discovery to draft — a quieter way to create.',
    Conversational: 'Found something interesting. Turning it into words.',
    Thoughtful: 'Small ideas. Clear voice. Steady practice.',
    Bold: 'Capture it. Create it. Share it.',
  },
  Outline: {
    Professional:
      '1. Open with the insight\n2. Explain why it matters\n3. Share one practical takeaway\n4. Close with a clear next step',
    Conversational:
      '1. Hook with a familiar moment\n2. Tell what you noticed\n3. Add one useful tip\n4. Invite a reply',
    Thoughtful:
      '1. Name the feeling or friction\n2. Reflect on the deeper idea\n3. Offer a gentle reframe\n4. Leave space for the reader',
    Bold:
      '1. Lead with a strong claim\n2. Back it with one proof point\n3. Challenge the usual approach\n4. End with a call to act',
  },
}

export function CreatePage() {
  const [params] = useSearchParams()
  const [idea, setIdea] = useState(() => params.get('idea')?.trim() || '')
  const [format, setFormat] = useState<Format>('LinkedIn Post')
  const [tone, setTone] = useState<Tone>('Thoughtful')
  const [output, setOutput] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    const next = params.get('idea')?.trim()
    if (next) setIdea(next)
  }, [params])

  const preview = useMemo(() => samples[format][tone], [format, tone])

  function generate() {
    const seed = idea.trim() || 'a spark of inspiration worth shaping into content'
    const header = `Demo output for: ${seed}\nFormat: ${format} · Tone: ${tone}\n\n`
    setOutput(`${header}${preview}`)
    setStatus('Local demo only — predefined sample content. No live AI request was made.')
  }

  async function copy() {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      setStatus('Copied to clipboard.')
    } catch {
      setStatus('Clipboard access was blocked. You can select and copy the text manually.')
    }
  }

  return (
    <PageShell title="Create">
      <main className="page">
        <div className="page-inner">
          <p className="badge">Create · local demo</p>
          <h1>Turn Your Ideas into Content</h1>
          <p className="lead">
            Use AI-assisted content creation to transform rough thoughts and inspiration into
            engaging posts, captions, and other social content. SociTea helps you create — this
            page does not claim a live model connection unless a verified backend is configured.
          </p>

          <div className="grid-2">
            <section className="card">
              <div className="field">
                <label htmlFor="idea">Your idea</label>
                <textarea
                  id="idea"
                  value={idea}
                  onChange={(event) => setIdea(event.target.value)}
                  placeholder="Describe an idea, note, or spark…"
                />
              </div>

              <div className="field">
                <label>Content format</label>
                <div className="chip-row">
                  {formats.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={item === format ? 'chip active' : 'chip'}
                      aria-pressed={item === format}
                      onClick={() => setFormat(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <label>Tone</label>
                <div className="chip-row">
                  {tones.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={item === tone ? 'chip active' : 'chip'}
                      aria-pressed={item === tone}
                      onClick={() => setTone(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <button type="button" className="btn btn-primary" onClick={generate}>
                Generate
              </button>
            </section>

            <section className="card">
              <h2>Generated preview</h2>
              <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                Sample content for product demonstration.
              </p>
              <textarea
                readOnly
                value={output || 'Generated sample content will appear here.'}
                aria-label="Generated content preview"
              />
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginTop: '1rem' }}
                onClick={copy}
                disabled={!output}
              >
                Copy
              </button>
              {status && (
                <p className="status" role="status">
                  {status}
                </p>
              )}
            </section>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link className="btn btn-secondary" to="/discover">
              Browse sample ideas
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  )
}
