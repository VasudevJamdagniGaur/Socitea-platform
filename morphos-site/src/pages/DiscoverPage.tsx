import { Link, useNavigate } from 'react-router-dom'
import { PageShell } from '../components/PageShell'

const sampleIdeas = [
  {
    id: 'tech',
    topic: 'Technology',
    title: 'Why small AI tools beat giant platforms for daily creators',
    blurb: 'Sample idea — explore how lightweight assistants fit into a real content workflow.',
  },
  {
    id: 'creativity',
    topic: 'Creativity',
    title: 'The quiet power of unfinished drafts',
    blurb: 'Sample idea — unfinished notes often hide the first line of a great post.',
  },
  {
    id: 'productivity',
    topic: 'Productivity',
    title: 'One idea a day beats a monthly content crunch',
    blurb: 'Sample idea — consistency compounds when discovery becomes a habit.',
  },
  {
    id: 'culture',
    topic: 'Culture',
    title: 'What internet culture teaches us about authentic voice',
    blurb: 'Sample idea — trends fade; a clear point of view travels further.',
  },
]

export function DiscoverPage() {
  const navigate = useNavigate()

  return (
    <PageShell title="Discover">
      <main className="page">
        <div className="page-inner">
          <p className="badge">Discover · sample ideas</p>
          <h1>Discover Ideas Worth Sharing</h1>
          <p className="lead">
            Find inspiration in the things you read, explore, and experience. SociTea helps you
            turn interesting discoveries into ideas for your next piece of content. The cards below
            are illustrative sample ideas, not a live discovery feed.
          </p>
          <div className="grid-2">
            {sampleIdeas.map((idea) => (
              <article key={idea.id} className="card">
                <p className="badge">{idea.topic}</p>
                <h3 style={{ marginTop: '0.85rem' }}>{idea.title}</h3>
                <p style={{ marginTop: '0.65rem' }}>{idea.blurb}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ marginTop: '1.1rem' }}
                  onClick={() =>
                    navigate(`/create?idea=${encodeURIComponent(idea.title)}`)
                  }
                >
                  Use This Idea
                </button>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link className="btn btn-secondary" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  )
}
