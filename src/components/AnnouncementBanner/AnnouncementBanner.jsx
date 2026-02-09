import './AnnouncementBanner.css'

const AnnouncementBanner = () => {
  const bannerText = "Parenting Made Easy"
  
  // Create enough duplicates for seamless infinite scroll
  const textInstances = Array(6).fill(bannerText)
  
  return (
    <div className="announcement-banner" aria-label="Announcement">
      <div className="announcement-banner-wrapper">
        <div className="announcement-banner-content">
          {textInstances.map((text, index) => (
            <span 
              key={index} 
              className="announcement-text" 
              aria-hidden={index > 0}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBanner
