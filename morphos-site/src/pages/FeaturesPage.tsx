import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'

const features = [
  {
    title: 'Discover',
    body: 'Find interesting ideas, topics, and inspiration for your next post.',
  },
  {
    title: 'AI Content Creation',
    body: 'Transform your thoughts and ideas into engaging social media content.',
  },
  {
    title: 'Content Organization',
    body: 'Keep your ideas and drafts organized in one creative workspace.',
  },
  {
    title: 'Browser Extension',
    body: 'Capture inspiration while browsing and bring it into your content creation workflow.',
  },
  {
    title: 'Multiple Content Formats',
    body: 'Adapt your ideas for different social platforms and content styles.',
  },
  {
    title: 'Your Creative Workspace',
    body: "Bring your content creation workflow together through SociTea's available products.",
  },
]

export function FeaturesPage() {
  return (
    <PageShell title="Features">
      <main className="page">
        <div className="page-inner">
          <p className="badge">Features</p>
          <h1>Everything You Need to Create with SociTea</h1>
          <p className="lead">
            SociTea is an AI-powered creative companion for discovering ideas, shaping social
            content, and keeping drafts organized — across the surfaces SociTea supports.
          </p>
          <div className="grid-3">
            {features.map((feature) => (
              <article key={feature.title} className="card">
                <h2>{feature.title}</h2>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to="/create">
              Start creating
            </Link>
            <Link className="btn btn-secondary" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  )
}
