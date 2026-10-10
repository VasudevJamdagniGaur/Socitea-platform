import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { isExtensionStoreAvailable, products } from '../config/products'

export function ExtensionPage() {
  const storeReady = isExtensionStoreAvailable()

  return (
    <PageShell title="Extension">
      <main className="page">
        <div className="page-inner">
          <p className="badge">{storeReady ? 'Available' : 'Coming soon'}</p>
          <h1>SociTea, Wherever You Browse</h1>
          <p className="lead">
            The SociTea browser extension is designed to help you capture inspiration from webpages
            and turn it into content ideas without interrupting your workflow.
          </p>

          <div className="grid-2">
            <section className="card">
              <h2>How it works</h2>
              <p style={{ marginTop: '0.75rem' }}>
                Select text on a webpage, open SociTea, and reshape the capture into a draft-ready
                idea for your creative workspace.
              </p>
              <ol style={{ margin: '1rem 0 0', paddingLeft: '1.2rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                <li>Highlight a passage while browsing.</li>
                <li>Open the SociTea extension popup.</li>
                <li>Choose a content direction and save or continue in SociTea.</li>
              </ol>

              <div style={{ marginTop: '1.25rem' }}>
                {storeReady ? (
                  <a
                    className="btn btn-primary"
                    href={products.chromeWebStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Chrome
                  </a>
                ) : (
                  <button type="button" className="btn btn-primary" disabled>
                    Coming Soon
                  </button>
                )}
              </div>
              {!storeReady && (
                <p className="status">
                  No verified Chrome Web Store URL is configured yet. This is not a published store
                  release.
                </p>
              )}
            </section>

            <section className="card" aria-label="Extension popup preview">
              <h2>Popup preview</h2>
              <div className="popup-preview" style={{ marginTop: '1rem' }}>
                <strong>SociTea</strong>
                <div className="row">Selected text preview — sample webpage passage</div>
                <div className="row">Content type · LinkedIn Post</div>
                <div className="row">Tone · Thoughtful</div>
                <div className="row">Generate content (demo)</div>
              </div>
              {!storeReady && (
                <div style={{ marginTop: '1.25rem' }}>
                  <h3>Local developer install</h3>
                  <p style={{ marginTop: '0.5rem' }}>
                    Only for a locally built extension package — not a store listing.
                  </p>
                  <ol style={{ margin: '0.75rem 0 0', paddingLeft: '1.2rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                    <li>Obtain the extension build files.</li>
                    <li>Open chrome://extensions</li>
                    <li>Enable Developer mode</li>
                    <li>Load unpacked and choose the build directory</li>
                    <li>Pin SociTea to the toolbar</li>
                  </ol>
                </div>
              )}
            </section>
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
