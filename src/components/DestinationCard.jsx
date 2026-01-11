import { MapPin, Calendar, Star, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const DestinationCard = ({ destination }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <Link to={`/destination/${destination.id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={destination.image} 
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
              {formatPrice(destination.price)}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{destination.name}</h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{destination.duration}</span>
            </div>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
              {destination.season}
            </span>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 font-semibold">{destination.rating}</span>
              </div>
              <span className="text-gray-500">({destination.reviews} reviews)</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              destination.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              destination.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {destination.difficulty}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {destination.highlights.slice(0, 2).map((highlight, index) => (
                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {highlight}
                </span>
              ))}
              {destination.highlights.length > 2 && (
                <span className="text-xs text-gray-500">+{destination.highlights.length - 2} more</span>
              )}
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
              <span>Explore</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DestinationCard