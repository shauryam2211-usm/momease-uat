import { useState, useEffect } from 'react'
import './Navbar.css'
import logoImage from '../../assets/images/momease-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const sections = ['challenges', 'solution', 'features', 'how-it-works', 'waitlist']
    const navbar = document.querySelector('.navbar')
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // Toggle scrolled class at 80px scroll
      if (scrollPosition > 80) {
        setIsScrolled(true)
        if (navbar) navbar.classList.add('scrolled')
      } else {
        setIsScrolled(false)
        if (navbar) navbar.classList.remove('scrolled')
      }

      // Find which section is currently in view
      let currentSection = ''
      const scrollPositionWithOffset = scrollPosition + 200 // Offset for navbar and some padding
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          
          if (scrollPositionWithOffset >= sectionTop) {
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
    
    // Close menu immediately
    setIsMenuOpen(false)

    if (href && href.startsWith('#')) {
      const sectionId = href.slice(1)
      const section = document.getElementById(sectionId)
      if (section) {
        // Small delay to allow menu to close before scroll
        setTimeout(() => {
          const headerOffset = 80
          const elementPosition = section.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }, 150)
      }
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && 
          !e.target.closest('.navbar-menu') && 
          !e.target.closest('.mobile-menu-toggle')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      // Use setTimeout to avoid immediate closure
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside, true)
        // Also close on touch outside
        document.addEventListener('touchstart', handleClickOutside, true)
      }, 100)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
      document.removeEventListener('touchstart', handleClickOutside, true)
    }
  }, [isMenuOpen])

  const handleJoinWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Logo Section - Left Side */}
        <div className="navbar-logo">
          <img src={logoImage} alt="Momease Logo - Parenting Made Easy" className="logo-image" />
        </div>

        {/* Navigation Menu - Center/Right */}
        <div className="navbar-content">
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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
        </div>
      </nav>
    </>
  )
}

export default Navbar
