import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'

export function NotFoundPage() {
  return (
    <PageShell title="Page not found">
      <main className="page">
        <div className="page-inner">
          <p className="badge">404</p>
          <h1>This page drifted away.</h1>
          <p className="lead">
            The route may be incorrect, or the page may have moved. Return home to continue exploring
            SociTea.
          </p>
          <Link className="btn btn-primary" to="/">
            Back to home
          </Link>
        </div>
      </main>
    </PageShell>
  )
}
