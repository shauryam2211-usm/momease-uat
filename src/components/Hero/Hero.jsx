import { useState, useEffect } from 'react'
import bottledemo from '../../assets/images/bottledemo.png'
import './Hero.css'

const HERO_PHRASES = [
  'easy.',
  'simple.',
  'stress-free.',
]

const ROTATE_INTERVAL_MS = 2800

const Hero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % HERO_PHRASES.length)
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const handleJoinWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-pill">Smart Parenting Simplified</span>
          <h1 className="hero-title">
            <span className="hero-title-static">Parenting made</span>
            <span className="hero-title-animated" aria-live="polite">
              <span key={phraseIndex} className="hero-title-phrase">
                {HERO_PHRASES[phraseIndex]}
              </span>
            </span>
          </h1>
          <p className="hero-description">
            Track feeding, temperature, and hygiene in one place — so you can focus on what matters most.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="hero-cta-primary"
              onClick={handleJoinWaitlist}
            >
              Join Waitlist →
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={bottledemo}
            alt="Momease smart baby bottle"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
