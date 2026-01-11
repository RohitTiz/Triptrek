import { MapPin, Calendar, ArrowRight } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Tropical paradise with stunning beaches and vibrant culture',
    price: '$1,299',
    duration: '7 Days',
    season: 'Year-round'
  },
  {
    id: 2,
    name: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Majestic mountains and pristine alpine lakes',
    price: '$2,199',
    duration: '10 Days',
    season: 'Summer'
  },
  {
    id: 3,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'White-washed buildings with breathtaking sunsets',
    price: '$1,899',
    duration: '8 Days',
    season: 'Spring/Fall'
  },
  {
    id: 4,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Ancient temples and beautiful cherry blossoms',
    price: '$2,499',
    duration: '12 Days',
    season: 'Spring'
  }
]

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Popular Destinations
          </h2>
          <p className="section-subtitle">
            Discover handpicked destinations for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {destination.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                    {destination.season}
                  </span>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 group/btn">
                  <span>Explore Destination</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center justify-center space-x-2 mx-auto">
            <span>View All Destinations</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Destinations