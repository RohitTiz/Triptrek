import { Check, Star, Clock, Users, MapPin } from 'lucide-react'

const packages = [
  {
    id: 1,
    name: 'Tropical Paradise',
    description: 'Luxury beach resort experience with private villas',
    price: '$1,499',
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Private Villa', 'All Meals Included', 'Spa Access', 'Water Sports', 'Airport Transfer'],
    rating: 4.9,
    reviews: 124,
    popular: true
  },
  {
    id: 2,
    name: 'Mountain Adventure',
    description: 'Guided hiking and camping in majestic mountains',
    price: '$2,199',
    duration: '10 Days',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Expert Guide', 'Camping Gear', 'Mountain Lodge', 'All Meals', 'Transport'],
    rating: 4.8,
    reviews: 89,
    popular: false
  },
  {
    id: 3,
    name: 'Cultural Discovery',
    description: 'Immerse yourself in ancient traditions and heritage',
    price: '$1,899',
    duration: '8 Days',
    image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Local Guides', 'Cultural Shows', 'Heritage Sites', 'Traditional Meals', 'Hotel'],
    rating: 4.7,
    reviews: 156,
    popular: true
  }
]

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured Packages
          </h2>
          <p className="section-subtitle">
            All-inclusive travel experiences tailored for your perfect getaway
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative rounded-2xl overflow-hidden shadow-xl card-hover border-2 ${
                pkg.popular ? 'border-blue-500' : 'border-transparent'
              }`}
            >
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
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                    <p className="text-gray-600 mt-1">{pkg.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">{pkg.price}</div>
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
                    <span className="text-gray-600">Group Size: 12</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-gray-600">{pkg.rating} ({pkg.reviews})</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full btn-primary py-4 text-lg">
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl max-w-2xl mx-auto">
            <MapPin className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Custom Package Available</h3>
              <p className="text-gray-600">Can't find what you're looking for? We'll create a custom package just for you.</p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Create Custom Trip
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages