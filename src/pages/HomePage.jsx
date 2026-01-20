import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          })
        }, 100)
      }
    }
  }, [location])

  return (
    <div className="min-h-screen bg-white">
      {/* Header REMOVED - Now handled by Layout */}
      <Hero />
      <section id="destinations">
        <Destinations />
      </section>
      <section id="packages">
        <Packages />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      {/* Add missing sections for other hash links */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">About Incredible India</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center">
            India is a land of ancient traditions, vibrant culture, and breathtaking landscapes. 
            From the snow-capped Himalayas to the sun-kissed beaches of Goa, experience the diversity 
            that makes India truly incredible.
          </p>
        </div>
      </section>
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center">
            Have questions? We're here to help you plan your perfect Indian adventure.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage