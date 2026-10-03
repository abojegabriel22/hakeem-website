import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const navigation = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Credits', href: '#/credits' },
  { label: 'Producing', href: '#/producing' },
  { label: 'Management', href: '#/management' },
]

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => window.localStorage.getItem('hakeem-theme') === 'light' ? 'light' : 'dark')
  const currentPath = window.location.hash.slice(1) || '/'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('hakeem-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#11110f' : '#f7f4ee')
  }, [theme])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#/" aria-label="Hakeem Kae-Kazim home" onClick={() => setMenuOpen(false)}>
          <span className="wordmark-name">Hakeem Kae-Kazim</span>
          <span className="wordmark-role">Actor · Producer · Director</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} id="site-navigation" aria-label="Main navigation">
          {navigation.map((item) => {
            const itemPath = item.href.slice(1) || '/'
            return (
              <a
                key={item.href}
                className="nav-link"
                href={item.href}
                aria-current={currentPath === itemPath ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          })}
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <a className="button button-primary button-small nav-book" href="#/booking" onClick={() => setMenuOpen(false)}>
            Book Hakeem <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main className="page-main">{children}</main>
      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <a className="wordmark" href="#/">
              <span className="wordmark-name">Hakeem Kae-Kazim</span>
              <span className="wordmark-role">Actor · Producer · Director</span>
            </a>
            <p>International film, television, theatre and voice.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <div className="footer-link-list">
              {navigation.slice(1).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
              <a href="#/booking">Bookings</a>
            </div>
            <a className="footer-developer-credit" href="https://abojeprofile.netlify.app" target="_blank" rel="noreferrer">
              Designed &amp; developed by Aboje <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Hakeem Kae-Kazim</span>
          <a href="#/management">Business enquiries through management</a>
        </div>
      </footer>
    </div>
  )
}