import { Check, Star, Clock, Users, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PackageCard = ({ pkg }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <Link to={`/package/${pkg.id}`}>
      <div className={`relative rounded-2xl overflow-hidden shadow-xl card-hover border-2 cursor-pointer ${
        pkg.popular ? 'border-blue-500' : 'border-transparent'
      }`}>
        {pkg.popular && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
        )}

        <div className="relative h-56">
          <img 
            src={pkg.image} 
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
              <p className="text-gray-600 mt-2 line-clamp-2">{pkg.description}</p>
            </div>
            <div className="text-right ml-4">
              <div className="text-3xl font-bold text-gray-900">{formatPrice(pkg.price)}</div>
              <div className="text-gray-500">per person</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{pkg.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">Group Size: 12-15</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-gray-600">{pkg.rating} ({pkg.reviews})</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-6">
            {pkg.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700 truncate">{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 group/btn">
            <span>View Package Details</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default PackageCard