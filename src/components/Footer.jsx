
import React from 'react'
import Logo from './Logo'

const FOOTER_COLUMNS = [
  { title: 'Product', links: ['Check a Certificate', 'Features', 'Pricing'] },
  { title: 'Resources', links: ['Documentation', 'API', 'Status'] },
  { title: 'Company', links: ['About', 'Privacy', 'Terms'] },
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
          <h5>{column.title}</h5>
          <ul className="list-unstyled text-small">
            {column.links.map((link) => (
              <li className="mb-1" key={link}><a className="link-secondary text-decoration-none" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
      ))}
      <small className="d-block mb-5 text-muted mt-0">&copy; 2017&ndash;{new Date().getFullYear()} Certificate Checker</small>
    </div>
  </footer>
  )
}

export default Footer