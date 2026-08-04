
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Check a Certificate', href: '/#checker' },
      { label: 'Features', href: '/#hanging-icons' },
      { label: 'Pricing', href: '/#pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: 'https://github.com/DineshShrestha/certificate-checker#readme' },
      { label: 'Source Code', href: 'https://github.com/DineshShrestha/certificate-checker' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

const Footer = ()=>{
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md logo">
        <Logo/>
      </div>
      {FOOTER_COLUMNS.map((column) => (
        <div className="col-6 col-md" key={column.title}>
          <nav aria-label={column.title}>
            <h5>{column.title}</h5>
            <ul className="list-unstyled text-small">
              {column.links.map((link) => (
                <li className="mb-1" key={link.label}>
                  {link.to ? (
                    <Link className="link-secondary text-decoration-none" to={link.to}>{link.label}</Link>
                  ) : (
                    <a className="link-secondary text-decoration-none" href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
      <small className="d-block mb-5 text-muted mt-0">&copy; 2017&ndash;{new Date().getFullYear()} Certificate Checker</small>
    </div>
  </footer>
  )
}

export default Footer