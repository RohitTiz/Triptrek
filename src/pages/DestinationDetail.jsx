import { useParams, Link } from 'react-router-dom'
import { MapPin, Calendar, Star, Users, Clock, Shield, Check, ArrowRight, Mountain, Waves, Trees, Sun } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { destinations } from '../data/destinations'
import { packages } from '../data/packages'

const DestinationDetail = () => {
  const { id } = useParams()
  const destination = destinations.find(d => d.id === id)
  const relatedPackages = packages.filter(pkg => pkg.destinations.includes(id))

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Destination not found</h1>
          <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const getIconForHighlight = (index) => {
    const icons = [Mountain, Waves, Trees, Sun, MapPin]
    return icons[index % icons.length]
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
                {destination.name}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl">{destination.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.highlights.map((highlight, index) => {
                  const Icon = getIconForHighlight(index)
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <Icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">{highlight}</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Experience the best of {destination.name.split(',')[0]} with this unique attraction
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Itinerary */}
            {destination.itinerary && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {destination.itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-blue-500 pl-6 py-2">
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                          Day {day.day}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{day.title}</h3>
                      </div>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.includes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>Duration</span>
                  </div>
                  <span className="font-semibold">{destination.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Sun className="h-5 w-5" />
                    <span>Best Time</span>
                  </div>
                  <span className="font-semibold">{destination.bestTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>Difficulty</span>
                  </div>
                  <span className={`font-semibold px-3 py-1 rounded-full ${
                    destination.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    destination.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {destination.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Star className="h-5 w-5" />
                    <span>Rating</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">{destination.rating}/5</span>
                    <span className="text-gray-500 ml-1">({destination.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-gray-900">{formatPrice(destination.price)}</div>
                  <div className="text-gray-500">per person</div>
                </div>
                <Link 
                  to={`/package/${relatedPackages[0]?.id || ''}`}
                  className="w-full btn-primary py-4 text-lg flex items-center justify-center space-x-2"
                >
                  <span>View Packages</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Related Packages */}
            {relatedPackages.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Available Packages</h3>
                <div className="space-y-4">
                  {relatedPackages.map((pkg) => (
                    <Link 
                      key={pkg.id}
                      to={`/package/${pkg.id}`}
                      className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{pkg.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{pkg.duration}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{formatPrice(pkg.price)}</div>
                          <div className="flex items-center justify-end mt-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 ml-1">{pkg.rating}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Safety Info */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Safety & Guidelines</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• All guides are certified and experienced</li>
                    <li>• First aid kit available at all times</li>
                    <li>• Emergency evacuation plan in place</li>
                    <li>• COVID-19 safety protocols followed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DestinationDetail