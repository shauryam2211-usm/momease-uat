import { useState, useEffect } from 'react'
import Hero from '../Hero/Hero'
import motherImage from '../../assets/images/mother.avif'

// Google Form integration
// Form: https://docs.google.com/forms/d/e/1FAIpQLSc9v46o-gr8TChB6zDbYuDGe6AfbdkGfOM6PeNoeZWJDYfRGg/viewform
// Get entry IDs: Open form in edit mode → ⋮ → "Get pre-filled link" → fill Name & Email → Get link → copy entry.xxx values from URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc9v46o-gr8TChB6zDbYuDGe6AfbdkGfOM6PeNoeZWJDYfRGg/formResponse'
const GOOGLE_FORM_FIELDS = {
  name: 'entry.1910709853',
  email: 'entry.1391614403',
}
import bottleImage from '../../assets/images/bottle.png'
import solutionImage from '../../assets/images/solution.jpeg'
import bottleDemoImage from '../../assets/images/bottledemo.png'
import worksImage from '../../assets/images/works.jpeg'
import parentingImage from '../../assets/images/parenting.jpeg'
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
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    if (!trimmedName || !trimmedEmail) {
      setMessage('Please enter both name and email.')
      return
    }
    setIsLoading(true)
    setMessage('')

    const formData = new FormData()
    formData.append(GOOGLE_FORM_FIELDS.name, trimmedName)
    formData.append(GOOGLE_FORM_FIELDS.email, trimmedEmail)

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })
      setMessage("🎉 You're on the waitlist!")
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
          <h2 className="section-title">
            <span className="word-block word-1">Parenting</span>
            <span className="word-block word-2">Challenges</span>
          </h2>
          <div className="challenges-content-wrapper">
            <div className="challenges-image-container">
              <img src={parentingImage} alt="Parenting challenges - exhausted parents with baby" className="challenges-image" />
            </div>
            <div className="challenges-text-content">
              <div className="challenge-item">
                <div className="challenge-icon-text">⏰</div>
                <div className="challenge-text">
                  <h3>Tracking Feeding Times</h3>
                  <p>Never miss a feeding schedule or wonder when your baby last ate.</p>
                </div>
              </div>
              <div className="challenge-item">
                <div className="challenge-icon-text">🌡️</div>
                <div className="challenge-text">
                  <h3>Milk Safety Concerns</h3>
                  <p>Worrying about milk temperature and freshness throughout the day.</p>
                </div>
              </div>
              <div className="challenge-item">
                <div className="challenge-icon-text">🧼</div>
                <div className="challenge-text">
                  <h3>Hygiene Management</h3>
                  <p>Ensuring bottles are always clean and sanitized properly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section solution-section">
        <div className="solution-background-image">
          <img src={solutionImage} alt="Solution background" className="solution-bg-img" />
        </div>
        <div className="container">
          <h2 className="section-title">
            <span className="word-block word-1">Our</span>
            <span className="word-block word-2">Solution</span>
          </h2>
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
                <li className="temperature-monitoring">✓ Temperature monitoring</li>
                <li>✓ Hygiene reminders</li>
                <li>✓ Mobile app integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <div className="container">
          <h2 className="section-title">
            <span className="word-block word-1">Key</span>
            <span className="word-block word-2">Features</span>
          </h2>
          <div className="features-content-wrapper">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-circle">
                  <span className="feature-icon">📱</span>
                </div>
                <h3>Smart Tracking</h3>
                <p>Automatic feeding time and quantity tracking with detailed analytics.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-circle">
                  <span className="feature-icon">🌡️</span>
                </div>
                <h3>Temperature Control</h3>
                <p>Real-time temperature monitoring to ensure milk is always at the perfect temperature.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-circle">
                  <span className="feature-icon">🧼</span>
                </div>
                <h3>Hygiene Monitoring</h3>
                <p>Smart reminders and tracking to maintain bottle cleanliness and safety.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-circle">
                  <span className="feature-icon">📊</span>
                </div>
                <h3>Analytics Dashboard</h3>
                <p>Comprehensive insights into your baby's feeding patterns and habits.</p>
              </div>
            </div>
            <div className="features-bottle-image">
              <img src={bottleDemoImage} alt="Momease Smart Baby Bottle" className="bottle-demo-img" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section how-it-works-section">
        <div className="container">
          <h2 className="section-title">
            <span className="word-block word-1">How</span>
            <span className="word-block word-2">It</span>
            <span className="word-block word-3">Works</span>
          </h2>
          <div className="how-it-works-content">
            <div className="how-it-works-image-container">
              <img src={worksImage} alt="How It Works - Set Up App, Connect to Bottle, Monitor & Relax" className="how-it-works-image" />
            </div>
            <Carousel />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="section waitlist-section">
          <div className="container">
            <h2 className="section-title">
              <span className="word-block word-1">Join</span>
              <span className="word-block word-2">the</span>
              <span className="word-block word-3">Waitlist</span>
            </h2>
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
                      required
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
                    <p className={`form-message ${message.includes('Error') || message.includes('Please enter') ? 'error' : 'success'}`}>
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
