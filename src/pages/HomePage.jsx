import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Destinations from '../components/Destinations'
import Packages from '../components/Packages'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    // Handle hash navigation on homepage
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Destinations />
      <Packages />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage