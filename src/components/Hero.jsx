import { Play, Shield, Star, Users, Globe, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image - Changed to India-themed */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <Globe className="h-6 w-6 text-saffron-300" />
            <MapPin className="h-4 w-4 text-green-300" />
            <span className="text-lg font-bold">trip.trekindia</span>
            <span className="text-sm text-gray-300">• Delhi Based</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Discover
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 via-white to-green-400">
            Incredible India
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Your gateway to India's majestic wonders. From Delhi's historic streets to Goa's golden beaches, 
          experience the vibrant colors, rich culture, and unforgettable adventures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/#destinations" className="inline-block">
            <button className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white text-lg px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 w-full sm:w-auto shadow-lg transition-all duration-300">
              <span>Explore Indian Destinations</span>
              <Play className="h-5 w-5" />
            </button>
          </Link>
          <Link to="/#packages" className="inline-block">
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-lg px-8 py-4 rounded-full font-semibold w-full sm:w-auto border border-white/30 transition-all duration-300">
              View India Tour Packages
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="h-6 w-6 text-saffron-300" />
              <span className="text-3xl font-bold">50K+</span>
            </div>
            <p className="text-sm text-gray-300">Happy Travelers</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Globe className="h-6 w-6 text-green-300" />
              <span className="text-3xl font-bold">29+</span>
            </div>
            <p className="text-sm text-gray-300">Indian States</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="h-6 w-6 text-yellow-300" />
              <span className="text-3xl font-bold">4.9</span>
            </div>
            <p className="text-sm text-gray-300">Average Rating</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Shield className="h-6 w-6 text-blue-300" />
              <span className="text-3xl font-bold">24/7</span>
            </div>
            <p className="text-sm text-gray-300">Local Support</p>
          </div>
        </div>

        {/* Popular Indian Destinations Quick View */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-200 mb-6">Start Your Journey From Delhi</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link 
              to="/destination/delhi" 
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square bg-gradient-to-br from-saffron-500 to-red-600 p-0.5 rounded-xl">
                <div className="h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-4 group-hover:bg-gray-800 transition-colors">
                  <MapPin className="h-8 w-8 text-saffron-400 mb-2" />
                  <span className="text-lg font-bold text-white">Delhi</span>
                  <span className="text-sm text-gray-300">Capital City</span>
                </div>
              </div>
            </Link>
            
            <Link 
              to="/destination/agra" 
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-600 p-0.5 rounded-xl">
                <div className="h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-4 group-hover:bg-gray-800 transition-colors">
                  <span className="text-lg font-bold text-white">Agra</span>
                  <span className="text-sm text-gray-300">Taj Mahal</span>
                </div>
              </div>
            </Link>
            
            <Link 
              to="/destination/jaipur" 
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square bg-gradient-to-br from-pink-600 to-orange-500 p-0.5 rounded-xl">
                <div className="h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-4 group-hover:bg-gray-800 transition-colors">
                  <span className="text-lg font-bold text-white">Jaipur</span>
                  <span className="text-sm text-gray-300">Pink City</span>
                </div>
              </div>
            </Link>
            
            <Link 
              to="/destination/goa" 
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-teal-600 p-0.5 rounded-xl">
                <div className="h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-4 group-hover:bg-gray-800 transition-colors">
                  <span className="text-lg font-bold text-white">Goa</span>
                  <span className="text-sm text-gray-300">Beach Paradise</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-300 mb-4">Trusted by travelers across India</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            <span className="text-gray-300 font-medium">Delhi NCR</span>
            <span className="text-gray-300 font-medium">Mumbai</span>
            <span className="text-gray-300 font-medium">Bangalore</span>
            <span className="text-gray-300 font-medium">Kolkata</span>
            <span className="text-gray-300 font-medium">Chennai</span>
            <span className="text-gray-300 font-medium">Hyderabad</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="h-8 w-0.5 bg-gradient-to-b from-saffron-400 to-green-400 mx-auto"></div>
          <div className="h-8 w-0.5 bg-gradient-to-b from-saffron-400/50 to-green-400/50 mx-auto mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero