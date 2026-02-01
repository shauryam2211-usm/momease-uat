import './Footer.css'
import logoImage from '../../assets/images/momease-logo.png'

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
              <img src={logoImage} alt="Momease Logo" className="footer-logo" />
              <div className="footer-brand-text">
                <span className="logo-text">momease</span>
                <span className="logo-tagline">Parenting Made Easy</span>
              </div>
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
            <p>Phone: +91 8882283654</p>
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
