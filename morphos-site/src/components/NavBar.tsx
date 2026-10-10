import { Link } from 'react-router-dom'

/** Logo only — right-side section links are removed from the landing experience. */
export function NavBar() {
  return (
    <header className="nav-bar">
      <Link to="/" className="brand">
        SociTea
      </Link>
    </header>
  )
}
