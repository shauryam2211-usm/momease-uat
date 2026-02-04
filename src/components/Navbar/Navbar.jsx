import { useState, useEffect } from 'react'
import './Navbar.css'
import logoImage from '../../assets/images/momease-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = ['challenges', 'solution', 'features', 'how-it-works', 'waitlist']
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Offset for navbar and some padding

      // Find which section is currently in view
      let currentSection = ''
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          
          if (scrollPosition >= sectionTop) {
            currentSection = sections[i]
            break
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    // Check on mount and on scroll
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleNavClick = (e, href) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsMenuOpen(false)

    if (href && href.startsWith('#')) {
      const sectionId = href.slice(1)
      const section = document.getElementById(sectionId)
      if (section) {
        // Delay allows menu to close before scroll (Android & iOS Safari/Chrome)
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 150)
      }
    }
  }

  const handleJoinWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        {/* Logo Section - Left Side */}
        <div className="navbar-logo">
          <img src={logoImage} alt="Momease Logo - Parenting Made Easy" className="logo-image" />
        </div>

        {/* Navigation Menu - Center/Right */}
        <div className="navbar-content">
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#challenges" 
                onClick={(e) => handleNavClick(e, '#challenges')}
                className={activeSection === 'challenges' ? 'active' : ''}
              >
                Challenges
              </a>
            </li>
            <li>
              <a 
                href="#solution" 
                onClick={(e) => handleNavClick(e, '#solution')}
                className={activeSection === 'solution' ? 'active' : ''}
              >
                Solution
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, '#features')}
                className={activeSection === 'features' ? 'active' : ''}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                onClick={(e) => handleNavClick(e, '#how-it-works')}
                className={activeSection === 'how-it-works' ? 'active' : ''}
              >
                How It Works
              </a>
            </li>
            <li>
              <a 
                href="#waitlist" 
                onClick={(e) => handleNavClick(e, '#waitlist')}
                className={activeSection === 'waitlist' ? 'active' : ''}
              >
                Join Waitlist
              </a>
            </li>
          </ul>
          
          {/* Actions - Right Side */}
          <div className="navbar-actions">
            <button 
              className="btn-cta" 
              onClick={handleJoinWaitlist}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div 
          className={`menu-backdrop ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Navbar
