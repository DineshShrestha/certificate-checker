
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
const Header = ()=>{
  return (
    <header className="p-3 mb-3 border-bottom">
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="/" className="d-block link-body-emphasis text-decoration-none me-4">
          <Logo/>
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/#checker" className="nav-link px-2 link-secondary">Check a Certificate</a></li>
          <li><a href="/#hanging-icons" className="nav-link px-2 link-body-emphasis">Features</a></li>
          <li><a href="/#pricing" className="nav-link px-2 link-body-emphasis">Pricing</a></li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header