import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleJoinWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      const section = document.querySelector(href)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="navbar">
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>
            Use cases
            <span className="dropdown-arrow">▼</span>
          </a>
        </li>
        <li>
          <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>
            Features
            <span className="dropdown-arrow">▼</span>
          </a>
        </li>
        <li><a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')}>Pricing</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
      </ul>
      <div className="navbar-actions">
        <a href="#login" className="login-link">Login</a>
        <button className="signup-btn" onClick={handleJoinWaitlist}>
          Join Waitlist
        </button>
      </div>
      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar
