import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import {
  getAndroidDownloadUrl,
  getWindowsDownloadUrl,
  isAndroidDownloadable,
  isWindowsDownloadable,
} from '../config/products'

export function DownloadPage() {
  const windowsReady = isWindowsDownloadable()
  const androidReady = isAndroidDownloadable()
  const windowsUrl = getWindowsDownloadUrl()
  const androidUrl = getAndroidDownloadUrl()

  return (
    <PageShell title="Download">
      <main className="page">
        <div className="page-inner">
          <p className="badge">Download center</p>
          <h1>Get SociTea for Your Device</h1>
          <p className="lead">
            Choose the SociTea version that fits your workflow. Download the Windows application for
            your desktop or the Android APK for your phone when a verified release URL is available.
          </p>

          <div className="grid-2">
            <article className="card">
              <p className="badge">{windowsReady ? 'Available' : 'Coming soon'}</p>
              <h2 style={{ marginTop: '0.85rem' }}>SociTea for Windows</h2>
              <p style={{ marginTop: '0.65rem' }}>
                Bring your creative workspace to your Windows desktop.
              </p>
              <div style={{ marginTop: '1.2rem' }}>
                {windowsReady ? (
                  <a
                    className="btn btn-primary"
                    href={windowsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download for Windows
                  </a>
                ) : (
                  <button type="button" className="btn btn-primary" disabled>
                    Coming Soon
                  </button>
                )}
              </div>
              {!windowsReady && (
                <p className="status">No verified Windows installer URL is configured.</p>
              )}
            </article>

            <article className="card">
              <p className="badge">{androidReady ? 'Available' : 'Coming soon'}</p>
              <h2 style={{ marginTop: '0.85rem' }}>SociTea for Android</h2>
              <p style={{ marginTop: '0.65rem' }}>
                Discover ideas and create content on your Android device.
              </p>
              <div style={{ marginTop: '1.2rem' }}>
                {androidReady ? (
                  <a
                    className="btn btn-primary"
                    href={androidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download APK
                  </a>
                ) : (
                  <button type="button" className="btn btn-primary" disabled>
                    Coming Soon
                  </button>
                )}
              </div>
              {!androidReady && (
                <p className="status">
                  No verified Play Store or APK URL is configured. Download unavailable.
                </p>
              )}
            </article>
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
