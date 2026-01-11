import { Play, Shield, Star, Users, Globe } from 'lucide-react'

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
          Discover Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Perfect Journey
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Curated travel experiences that transform ordinary trips into extraordinary memories. 
          Explore the world with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2">
            <span>Explore Destinations</span>
            <Play className="h-5 w-5" />
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Watch Our Story
          </button>
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
              <span className="text-3xl font-bold">500+</span>
            </div>
            <p className="text-sm text-gray-300">Destinations</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="h-6 w-6 text-yellow-300" />
              <span className="text-3xl font-bold">4.9</span>
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
      </div>
    </section>
  )
}

export default Hero