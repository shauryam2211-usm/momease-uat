import { useState, useEffect } from 'react'
import Hero from '../Hero/Hero'
import { waitlistService } from '../../services/api'
import motherImage from '../../assets/images/mother.avif'
import bottleImage from '../../assets/images/bottle.png'
import './Body.css'

const Carousel = () => {
  const steps = [
    {
      number: 1,
      title: 'Setup',
      description: 'Download the app and connect your smart bottle via Bluetooth.'
    },
    {
      number: 2,
      title: 'Track',
      description: 'The bottle automatically tracks feeding sessions and monitors milk safety.'
    },
    {
      number: 3,
      title: 'Monitor',
      description: 'View real-time data and insights through the mobile app dashboard.'
    },
    {
      number: 4,
      title: 'Enjoy',
      description: 'Experience worry-free parenting with AI-powered assistance.'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length)
    }, 3000) // Rotate every 3 seconds

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="carousel-container">
      {/* Desktop/Tablet: Show all 4 cards in grid */}
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`step-card ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile: Carousel view */}
      <div className="carousel-wrapper">
        <div 
          className="carousel-track"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            WebkitTransform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {steps.map((step, index) => (
            <div key={index} className="carousel-slide">
              <div className="step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-indicators">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const Body = () => {
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
    <div className="body-section">
      {/* Mother Image Background */}
      <div className="mother-image-container">
        <img src={motherImage} alt="Mother with baby" className="mother-image" />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Challenges Section */}
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

      {/* Solution Section */}
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
                <li className="feeding-tracking">✓ Real-time feeding tracking</li>
                <li className="temperature-monitoring">✓ Temperature monitoring</li>
                <li className="hygiene-reminders">✓ Hygiene reminders</li>
                <li className="app-integration">✓ Mobile app integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* How It Works Section */}
      <section id="how-it-works" className="section how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <Carousel />
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="section waitlist-section">
          <div className="container">
            <h2 className="section-title">Join the Waitlist</h2>
            <p className="section-subtitle">Be among the first to experience smart parenting</p>
            <div className="waitlist-content">
              <div className="waitlist-form-container">
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
              <div className="waitlist-image-container">
                <img src={motherImage} alt="Mother with baby" className="waitlist-mother-image" />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Body
