import Navbar from '../../components/Navbar/Navbar'
import Body from '../../components/Body/Body'
import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Navbar */}
      <header className="site-header">
        <div className="header-container">
          <Navbar />
        </div>
      </header>

      {/* Body Section - Contains all content sections */}
      <Body />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
