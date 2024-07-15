import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  logo,
  arrow
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <h2 className={navLinkItem}>
            <Link to="/" className={logo}>
              LucieBabor
            </Link>
        </h2>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
            <span className="arrow">➔</span> About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/projects" className={navLinkText}>
            <span className="arrow">➔</span> Projects
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout