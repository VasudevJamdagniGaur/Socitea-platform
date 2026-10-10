import { NavLink } from 'react-router-dom'

const items = [
  { to: '/features', label: 'Features' },
  { to: '/discover', label: 'Discover' },
  { to: '/create', label: 'Create' },
  { to: '/extension', label: 'Extension' },
  { to: '/download', label: 'Download' },
] as const

export function NavBar() {
  return (
    <header className="nav-bar">
      <NavLink to="/" className="brand" end>
        SociTea
      </NavLink>
      <nav className="nav-links" aria-label="Primary">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <span>{item.label}</span>
            <span className="nav-dot" aria-hidden="true">
              •
            </span>
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
