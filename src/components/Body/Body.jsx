import React from 'react'
import Hero from '../Hero/Hero'
import AnnouncementBanner from '../AnnouncementBanner/AnnouncementBanner'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import motherImage from '../../assets/images/mother.avif'
import bottleImage from '../../assets/images/bottle.png'
import solutionImage from '../../assets/images/solution.jpeg'
import bottleDemoImage from '../../assets/images/bottledemo.png'
import worksImage from '../../assets/images/works.jpeg'
import challengeImage1 from '../../assets/images/c1.jpg'
import challengeImage2 from '../../assets/images/c2.webp'
import challengeImage3 from '../../assets/images/c3.jpg'
import appintiImage from '../../assets/images/appinti.webp'
import './Body.css'

const StepsGrid = ({ appImage, bottleImage, parentImage }) => {
  const step1Ref = useScrollReveal({ threshold: 0.2 })
  const step2Ref = useScrollReveal({ threshold: 0.2 })
  const step3Ref = useScrollReveal({ threshold: 0.2 })

  const steps = [
    {
      number: 1,
      title: 'App Setup',
      description: 'Download the app and connect your smart bottle via Bluetooth.',
      image: appImage,
      ref: step1Ref
    },
    {
      number: 2,
      title: 'Bottle Connection',
      description: 'Pair your bottle with the app in seconds.',
      image: bottleImage,
      ref: step2Ref
    },
    {
      number: 3,
      title: 'Relaxed Monitoring',
      description: 'Monitor feeding patterns effortlessly while you relax.',
      image: parentImage,
      ref: step3Ref
    }
  ]

  return (
    <div className="how-it-works-steps">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div ref={step.ref} className="how-it-works-step scroll-reveal-stagger">
            <div className="how-it-works-step-image">
              <img src={step.image} alt={step.title} />
              <div className="how-it-works-step-overlay"></div>
            </div>
            <div className="how-it-works-step-content">
              <p className="how-it-works-step-description">{step.description}</p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="how-it-works-arrow">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10L25 20L15 30" stroke="rgba(93, 187, 255, 0.6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

const Body = () => {
  // Scroll reveal refs for section headings
  const challengesBadgeRef = useScrollReveal({ threshold: 0.2 })
  const solutionBadgeRef = useScrollReveal({ threshold: 0.2 })
  const featuresTitleRef = useScrollReveal({ threshold: 0.2 })
  const howItWorksTitleRef = useScrollReveal({ threshold: 0.2 })
  const waitlistTitleRef = useScrollReveal({ threshold: 0.2 })

  // Scroll reveal refs for feature cards
  const feature1Ref = useScrollReveal({ threshold: 0.15 })
  const feature2Ref = useScrollReveal({ threshold: 0.15 })
  const feature3Ref = useScrollReveal({ threshold: 0.15 })

  // Scroll reveal refs for challenge cards
  const challenge1Ref = useScrollReveal({ threshold: 0.15 })
  const challenge2Ref = useScrollReveal({ threshold: 0.15 })
  const challenge3Ref = useScrollReveal({ threshold: 0.15 })

  // Scroll reveal refs for CTA
  const waitlistCtaRef = useScrollReveal({ threshold: 0.2 })

  const handleJoinWaitlist = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc9v46o-gr8TChB6zDbYuDGe6AfbdkGfOM6PeNoeZWJDYfRGg/viewform";
    window.open(googleFormUrl, "_blank");
  };

  return (
    <div className="body-section">
      {/* Mother Image Background */}
      <div className="mother-image-container">
        <img src={motherImage} alt="Mother with baby" className="mother-image" />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Challenges Section */}
      <section id="challenges" className="section challenges-section">
        <div className="challenges-vignette"></div>
        <div className="container">
          <div ref={challengesBadgeRef} className="challenges-badge scroll-reveal">Parenting Challenges</div>
          <div className="challenges-grid">
            <div ref={challenge1Ref} className="challenge-card scroll-reveal-stagger">
              <div className="challenge-image-wrapper">
                <img src={challengeImage1} alt="Parent struggling with feeding schedule" className="challenge-image" />
                <div className="challenge-overlay"></div>
              </div>
              <div className="challenge-content">
                <div className="challenge-icon">⏰</div>
                <h3>Missed Feeding Times</h3>
                <p>Never miss a feeding schedule or wonder when your baby last ate.</p>
              </div>
            </div>
            <div ref={challenge2Ref} className="challenge-card scroll-reveal-stagger">
              <div className="challenge-image-wrapper">
                <img src={challengeImage2} alt="Parent worried about milk temperature" className="challenge-image" />
                <div className="challenge-overlay"></div>
              </div>
              <div className="challenge-content">
                <div className="challenge-icon">🌡️</div>
                <h3>Milk Temperature Anxiety</h3>
                <p>Worrying about milk temperature and freshness throughout the day.</p>
              </div>
            </div>
            <div ref={challenge3Ref} className="challenge-card scroll-reveal-stagger">
              <div className="challenge-image-wrapper">
                <img src={challengeImage3} alt="Parent managing bottle hygiene" className="challenge-image" />
                <div className="challenge-overlay"></div>
              </div>
              <div className="challenge-content">
                <div className="challenge-icon">🧼</div>
                <h3>Hygiene & Cleanliness Stress</h3>
                <p>Ensuring bottles are always clean and sanitized properly.</p>
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
        <div className="solution-glow"></div>
        <div className="container">
          <div ref={solutionBadgeRef} className="solution-badge scroll-reveal">OUR SOLUTION</div>
          <div className="solution-content">
            <div className="solution-text">
              <h3>AI-Powered Smart Baby Bottle</h3>
              <p>
                Our innovative baby bottle combines cutting-edge AI technology with practical parenting needs. 
                It automatically tracks feeding sessions, monitors milk temperature, and ensures optimal hygiene 
                through smart sensors and mobile app integration.
              </p>
              <ul className="solution-features">
                <li>
                  <span className="feature-icon">📊</span>
                  <span className="feature-text">Real-time feeding tracking</span>
                </li>
                <li>
                  <span className="feature-icon">🌡️</span>
                  <span className="feature-text">Temperature monitoring</span>
                </li>
                <li>
                  <span className="feature-icon">🧼</span>
                  <span className="feature-text">Hygiene reminders</span>
                </li>
                <li>
                  <span className="feature-icon">📱</span>
                  <span className="feature-text">Mobile app integration</span>
                </li>
              </ul>
            </div>
            <div className="solution-visual">
              <img src={bottleDemoImage} alt="Momease Smart Baby Bottle" className="solution-bottle-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <div className="container">
          <h2 ref={featuresTitleRef} className="section-title scroll-reveal">
            <span className="word-block word-1">Key</span>
            <span className="word-block word-2">Features</span>
          </h2>
          <div className="features-content-wrapper">
            <div className="features-grid">
              <div ref={feature1Ref} className="feature-card scroll-reveal-stagger">
                <div className="feature-visual">
                  <div className="feature-visual-app">
                    <div className="phone-device">
                      <div className="phone-screen">
                        <div className="app-icon"></div>
                        <div className="sync-waves">
                          <div className="sync-wave wave-out-1"></div>
                          <div className="sync-wave wave-out-2"></div>
                          <div className="sync-wave wave-out-3"></div>
                        </div>
                      </div>
                    </div>
                    <div className="connection-dots">
                      <div className="dot dot-1"></div>
                      <div className="dot dot-2"></div>
                      <div className="dot dot-3"></div>
                    </div>
                  </div>
                </div>
                <div className="feature-card-content">
                  <div className="feature-icon-circle">
                    <span className="feature-icon">📊</span>
                  </div>
                  <h3>Smart Tracking</h3>
                  <p>Automatic feeding time and quantity tracking with detailed analytics.</p>
                </div>
              </div>
              <div ref={feature2Ref} className="feature-card scroll-reveal-stagger">
                <div className="feature-visual">
                  <div className="feature-visual-temperature">
                    <div className="temp-circle">
                      <div className="temp-inner"></div>
                      <div className="temp-waves">
                        <div className="wave wave-1"></div>
                        <div className="wave wave-2"></div>
                        <div className="wave wave-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-card-content">
                  <div className="feature-icon-circle">
                    <span className="feature-icon">🌡️</span>
                  </div>
                  <h3>Temperature Control</h3>
                  <p>Real-time temperature monitoring to ensure milk is always at the perfect temperature.</p>
                </div>
              </div>
              <div ref={feature3Ref} className="feature-card scroll-reveal-stagger">
                <div className="feature-visual">
                  <div className="feature-visual-hygiene">
                    <div className="hygiene-shield">
                      <div className="shield-icon">✓</div>
                    </div>
                    <div className="hygiene-particles">
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                    </div>
                  </div>
                </div>
                <div className="feature-card-content">
                  <div className="feature-icon-circle">
                    <span className="feature-icon">🧼</span>
                  </div>
                  <h3>Hygiene Monitoring</h3>
                  <p>Smart reminders and tracking to maintain bottle cleanliness and safety.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section how-it-works-section">
        <div className="container">
          <h2 ref={howItWorksTitleRef} className="section-title scroll-reveal">
            <span className="word-block word-1">How</span>
            <span className="word-block word-2">It</span>
            <span className="word-block word-3">Works</span>
          </h2>
          <StepsGrid 
            appImage={appintiImage}
            bottleImage={bottleDemoImage}
            parentImage={motherImage}
          />
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="section waitlist-section">
          <div className="container">
            <h2 ref={waitlistTitleRef} className="section-title scroll-reveal">
              <span className="word-block word-1">Join</span>
              <span className="word-block word-2">the</span>
              <span className="word-block word-3">Waitlist</span>
            </h2>
            <div className="waitlist-content">
              <div className="waitlist-text-content">
                <h3 className="waitlist-headline">Start Your Journey to Worry-Free Parenting</h3>
                <p className="waitlist-description">
                  Join thousands of parents who are already experiencing the peace of mind that comes with smart, AI-powered baby care.
                </p>
                <div className="waitlist-trust-points">
                  <div className="trust-point">
                    <span className="trust-icon">✓</span>
                    <span className="trust-text">Early access to exclusive features</span>
                  </div>
                  <div className="trust-point">
                    <span className="trust-icon">✓</span>
                    <span className="trust-text">Special launch pricing for waitlist members</span>
                  </div>
                  <div className="trust-point">
                    <span className="trust-icon">✓</span>
                    <span className="trust-text">Priority support and updates</span>
                  </div>
                </div>
                <div ref={waitlistCtaRef} className="waitlist-cta-container scroll-reveal">
                  <button 
                    onClick={handleJoinWaitlist}
                    className="btn btn-primary waitlist-button"
                  >
                    Join Waitlist Now
                  </button>
                  <p className="waitlist-urgency">Limited spots available • Join today</p>
                </div>
              </div>
              <div className="waitlist-image-container">
                <img src={motherImage} alt="Happy mother with baby" className="waitlist-mother-image" />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Body
