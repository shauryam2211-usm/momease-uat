import './Hero.css'
import bottleImage from '../../assets/images/bottle.png'

const Hero = () => {
  const handleJoinWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              <span>Parenting made easy.</span>
            </h1>
            <div className="hero-description">
              <p>Track feeding instantly with AI-powered monitoring.</p>
              <p>Enjoy unlimited, real-time milk safety alerts.</p>
              <p>Save 5+ hours weekly on baby care management.</p>
            </div>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={handleJoinWaitlist}
              >
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="hero-right">
            <div className="bottle-visual">
              <img src={bottleImage} alt="Momease Smart Baby Bottle" className="bottle-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
