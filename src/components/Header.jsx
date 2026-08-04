
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Check a Certificate', href: '/#checker', className: 'nav-link px-2 link-secondary' },
  { label: 'Features', href: '/#hanging-icons', className: 'nav-link px-2 link-body-emphasis' },
  { label: 'Pricing', href: '/#pricing', className: 'nav-link px-2 link-body-emphasis' },
]

const Header = ()=>{
  return (
    <header className="p-3 mb-3 border-bottom">
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="/" className="d-block link-body-emphasis text-decoration-none me-4">
          <Logo/>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}><a href={link.href} className={link.className}>{link.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header