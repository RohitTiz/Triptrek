import { MapPin, ArrowRight } from 'lucide-react'
import DestinationCard from './DestinationCard'
import { destinations } from '../data/destinations'

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h2 className="section-title">
              Explore Indian Destinations
            </h2>
          </div>
          <p className="section-subtitle">
            Discover the incredible diversity of India - from Himalayan peaks to tropical beaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-lg px-6 py-3 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors duration-300">
            <span>View All 25+ Destinations</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Destinations