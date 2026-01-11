import { Play, Shield, Star, Users, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
          Explore Incredible
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            India
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Discover the diverse beauty of India - from Himalayan peaks to tropical beaches, 
          ancient temples to vibrant cities. Your perfect Indian adventure starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/#destinations" className="inline-block">
            <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 w-full sm:w-auto">
              <span>Explore Destinations</span>
              <Play className="h-5 w-5" />
            </button>
          </Link>
          <Link to="/#packages" className="inline-block">
            <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              View Packages
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="h-6 w-6 text-blue-300" />
              <span className="text-3xl font-bold">10K+</span>
            </div>
            <p className="text-sm text-gray-300">Happy Travelers</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Globe className="h-6 w-6 text-purple-300" />
              <span className="text-3xl font-bold">50+</span>
            </div>
            <p className="text-sm text-gray-300">Indian Destinations</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="h-6 w-6 text-yellow-300" />
              <span className="text-3xl font-bold">4.8</span>
            </div>
            <p className="text-sm text-gray-300">Average Rating</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Shield className="h-6 w-6 text-green-300" />
              <span className="text-3xl font-bold">24/7</span>
            </div>
            <p className="text-sm text-gray-300">Support</p>
          </div>
        </div>

        {/* Popular Destinations Quick View */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-200 mb-6">Popular Starting Points</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link 
              to="/destination/delhi" 
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 rounded-xl">
                <div className="h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-4 group-hover:bg-gray-800 transition-colors">
                  <span className="text-lg font-bold text-white">Delhi</span>
                  <span className="text-sm text-gray-300">Capital City</span>
                </div>
              </div>
            </Link>
            
            <Link 
              to="/destination/mumbai" 
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-pink-600 p-0.5 rounded-xl">
                <div className="h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-4 group-hover:bg-gray-800 transition-colors">
                  <span className="text-lg font-bold text-white">Mumbai</span>
                  <span className="text-sm text-gray-300">City of Dreams</span>
                </div>
              </div>
            </Link>
            
            <Link 
              to="/destination/bangalore" 
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square bg-gradient-to-br from-green-500 to-teal-600 p-0.5 rounded-xl">
                <div className="h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-4 group-hover:bg-gray-800 transition-colors">
                  <span className="text-lg font-bold text-white">Bangalore</span>
                  <span className="text-sm text-gray-300">Garden City</span>
                </div>
              </div>
            </Link>
            
            <Link 
              to="/destination/kolkata" 
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square bg-gradient-to-br from-yellow-500 to-red-600 p-0.5 rounded-xl">
                <div className="h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-4 group-hover:bg-gray-800 transition-colors">
                  <span className="text-lg font-bold text-white">Kolkata</span>
                  <span className="text-sm text-gray-300">Cultural Hub</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-300 mb-4">Trusted by travelers from</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            <span className="text-gray-300 font-medium">Delhi</span>
            <span className="text-gray-300 font-medium">Mumbai</span>
            <span className="text-gray-300 font-medium">Bangalore</span>
            <span className="text-gray-300 font-medium">Chennai</span>
            <span className="text-gray-300 font-medium">Hyderabad</span>
            <span className="text-gray-300 font-medium">Pune</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="h-8 w-0.5 bg-white/50 mx-auto"></div>
          <div className="h-8 w-0.5 bg-white/30 mx-auto mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero