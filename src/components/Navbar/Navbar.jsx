import { useState, useEffect } from 'react'
import './Navbar.css'
import logoImage from '../../assets/images/momease-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = ['challenges', 'solution', 'features', 'how-it-works']
    
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
    e.preventDefault()
    if (href.startsWith('#')) {
      const section = document.querySelector(href)
      if (section) {
        const navbarHeight = 80 // Approximate navbar height
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = sectionPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <>
      <nav className="navbar">
        {/* Logo Section - Left Side */}
        <div className="navbar-logo">
          <img src={logoImage} alt="Momease Logo - Parenting Made Easy" className="logo-image" />
        </div>

        {/* Navigation Menu - Right Side */}
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
                onClick={(e) => { handleNavClick(e, '#challenges'); setIsMenuOpen(false); }}
                className={activeSection === 'challenges' ? 'active' : ''}
              >
                Challenges
              </a>
            </li>
            <li>
              <a 
                href="#solution" 
                onClick={(e) => { handleNavClick(e, '#solution'); setIsMenuOpen(false); }}
                className={activeSection === 'solution' ? 'active' : ''}
              >
                Solution
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                onClick={(e) => { handleNavClick(e, '#features'); setIsMenuOpen(false); }}
                className={activeSection === 'features' ? 'active' : ''}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                onClick={(e) => { handleNavClick(e, '#how-it-works'); setIsMenuOpen(false); }}
                className={activeSection === 'how-it-works' ? 'active' : ''}
              >
                How It Works
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
