import { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { waitlistService } from '../../services/api'
import logoImage from '../../assets/images/momease-logo.jpeg'
import motherImage from '../../assets/images/mother.avif'
import bottleImage from '../../assets/images/bottle.png'
import './Home.css'

const Home = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      await waitlistService.joinWaitlist(email, name)
      setMessage('Successfully joined the waitlist!')
      setEmail('')
      setName('')
    } catch (error) {
      setMessage('Error joining waitlist. Please try again.')
      console.error('Waitlist error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="home-wrapper">
      {/* Mother Image Background */}
      <div className="mother-image-container">
        <img src={motherImage} alt="Mother with baby" className="mother-image" />
      </div>

      {/* Bottle Image Background */}
      <div className="bottle-image-container">
        <img src={bottleImage} alt="Momease Smart Baby Bottle" className="bottle-background-image" />
      </div>

      {/* Header with Logo and Navbar */}
      <header className="site-header">
        <div className="header-container">
          <div className="home-logo-section">
            <img src={logoImage} alt="Momease Logo - Parenting Made Easy" className="logo-image" />
          </div>
          <Navbar />
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

        {/* Challenges Section */}
        <div className="mt-20">
          <section id="challenges" className="section challenges-section">
            <div className="container">
              <h2 className="section-title">Parenting Challenges</h2>
              <div className="challenges-grid">
                <div className="challenge-card">
                  <div className="challenge-icon">⏰</div>
                  <h3>Tracking Feeding Times</h3>
                  <p>Never miss a feeding schedule or wonder when your baby last ate.</p>
                </div>
                <div className="challenge-card">
                  <div className="challenge-icon">🌡️</div>
                  <h3>Milk Safety Concerns</h3>
                  <p>Worrying about milk temperature and freshness throughout the day.</p>
                </div>
                <div className="challenge-card">
                  <div className="challenge-icon">🧼</div>
                  <h3>Hygiene Management</h3>
                  <p>Ensuring bottles are always clean and sanitized properly.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Solution Section */}
        <div className="mt-10">
          <section id="solution" className="section solution-section">
            <div className="container">
              <h2 className="section-title">Our Solution</h2>
              <div className="solution-content">
                <div className="solution-text">
                  <h3>AI-Powered Smart Baby Bottle</h3>
                  <p>
                    Our innovative baby bottle combines cutting-edge AI technology with practical parenting needs. 
                    It automatically tracks feeding sessions, monitors milk temperature, and ensures optimal hygiene 
                    through smart sensors and mobile app integration.
                  </p>
                  <ul className="solution-features">
                    <li>✓ Real-time feeding tracking</li>
                    <li>✓ Temperature monitoring</li>
                    <li>✓ Hygiene reminders</li>
                    <li>✓ Mobile app integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Features Section */}
        <div className="mt-30">
          <section id="features" className="section features-section">
            <div className="container">
              <h2 className="section-title">Key Features</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <h3>📱 Smart Tracking</h3>
                  <p>Automatic feeding time and quantity tracking with detailed analytics.</p>
                </div>
                <div className="feature-card">
                  <h3>🌡️ Temperature Control</h3>
                  <p>Real-time temperature monitoring to ensure milk is always at the perfect temperature.</p>
                </div>
                <div className="feature-card">
                  <h3>🧼 Hygiene Monitoring</h3>
                  <p>Smart reminders and tracking to maintain bottle cleanliness and safety.</p>
                </div>
                <div className="feature-card">
                  <h3>📊 Analytics Dashboard</h3>
                  <p>Comprehensive insights into your baby's feeding patterns and habits.</p>
                </div>
                <div className="feature-card">
                  <h3>🔔 Smart Notifications</h3>
                  <p>Get timely reminders for feeding times, hygiene checks, and more.</p>
                </div>
                <div className="feature-card">
                  <h3>🔋 Long Battery Life</h3>
                  <p>Extended battery life ensures your bottle is always ready when you need it.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* How It Works Section */}
        <div className="mt-30 pl-10 pr-10 max-425">
          <section id="how-it-works" className="section how-it-works-section">
            <div className="container">
              <h2 className="section-title">How It Works</h2>
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Setup</h3>
                  <p>Download the app and connect your smart bottle via Bluetooth.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Track</h3>
                  <p>The bottle automatically tracks feeding sessions and monitors milk safety.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Monitor</h3>
                  <p>View real-time data and insights through the mobile app dashboard.</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Enjoy</h3>
                  <p>Experience worry-free parenting with AI-powered assistance.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Waitlist Section */}
        <div className="mt-10">
          <section id="waitlist" className="section waitlist-section">
            <div className="container">
              <h2 className="section-title">Join the Waitlist</h2>
              <p className="section-subtitle">Be among the first to experience smart parenting</p>
              <form onSubmit={handleWaitlistSubmit} className="waitlist-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Joining...' : 'Join the Waitlist'}
                </button>
                {message && (
                  <p className={`form-message ${message.includes('Error') ? 'error' : 'success'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </section>
        </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
