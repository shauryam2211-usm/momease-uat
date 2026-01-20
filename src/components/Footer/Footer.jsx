import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <span className="logo-icon">🧸</span>
              <span className="logo-text">momease</span>
              <span className="logo-tagline">Parenting Made Easy</span>
            </div>
            <p>AI-powered baby bottle that makes parenting effortless, one bottle at a time.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#challenges" onClick={(e) => handleNavClick(e, '#challenges')}>Challenges</a></li>
              <li><a href="#solution" onClick={(e) => handleNavClick(e, '#solution')}>Solution</a></li>
              <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>How It Works</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@momeaseinnovation.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} momease. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
