import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, IndianRupee, Award, Shield } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Indian Destinations', href: '/#destinations' },
    { label: 'Tour Packages', href: '/#packages' },
    { label: 'About India', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Travel Blog', href: '#blog' }
  ]

  const indianDestinations = [
    { label: 'Delhi Heritage Tours', href: '#' },
    { label: 'Kerala Backwaters', href: '#' },
    { label: 'Ladakh Adventure', href: '#' },
    { label: 'Rajasthan Heritage', href: '#' },
    { label: 'Goa Beaches', href: '#' },
    { label: 'Himalayan Treks', href: '#' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  // Indian certification badges
  const certifications = [
    { label: 'Ministry of Tourism Approved', icon: Award },
    { label: 'IATO Member', icon: Shield },
    { label: 'ISO Certified', icon: Shield },
    { label: 'Make in India', icon: Award }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Indian Flag Inspired Pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-1/3 bg-saffron-500"></div>
          <div className="h-1/3 bg-white"></div>
          <div className="h-1/3 bg-green-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Certifications Banner */}
          <div className="mb-12">
            <h3 className="text-center text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-saffron-400 via-white to-green-400 bg-clip-text text-transparent">
                Proudly Indian, Serving Globally
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 flex items-center space-x-3">
                  <cert.icon className="h-6 w-6 text-saffron-400" />
                  <span className="text-sm font-medium">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-saffron-500 to-green-500 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <IndianRupee className="absolute -bottom-1 -right-1 h-5 w-5 text-white bg-green-600 rounded-full p-0.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">
                    trip.trekindia
                  </span>
                  <span className="text-sm text-gray-400">Made in India 🇮🇳</span>
                </div>
              </Link>
              <p className="text-gray-400 mb-6">
                <span className="text-saffron-300 font-bold">100% Indian Owned & Operated.</span> We're passionate about showcasing India's incredible diversity to the world from our Delhi headquarters.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-saffron-400" />
                  <span className="text-gray-300">info@trip.trekindia.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-saffron-400" />
                  <span className="text-gray-300">+91 11 2345 6789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-saffron-400" />
                  <div>
                    <span className="text-gray-300 block">Connaught Place</span>
                    <span className="text-gray-500 text-sm">New Delhi, India 110001</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="text-saffron-400">Quick Links</span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-saffron-300 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="h-1 w-1 rounded-full bg-saffron-400 group-hover:scale-150 transition-transform"></span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Indian Destinations */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="text-green-400">Indian Experiences</span>
              </h3>
              <ul className="space-y-3">
                {indianDestinations.map((destination, index) => (
                  <li key={index}>
                    <a 
                      href={destination.href}
                      className="text-gray-400 hover:text-green-300 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="text-green-500 text-lg">•</span>
                      <span>{destination.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Indian Identity */}
            <div>
              <h3 className="text-xl font-bold mb-6">
                <span className="bg-gradient-to-r from-saffron-400 to-green-400 bg-clip-text text-transparent">
                  Support Indian Tourism
                </span>
              </h3>
              <p className="text-gray-400 mb-4">
                Join <span className="text-saffron-300 font-bold">50,000+</span> travelers supporting local Indian communities through sustainable tourism.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-saffron-500/25"
                >
                  Subscribe for Indian Travel Deals
                </button>
              </form>
              
              {/* 100% Indian Assurance */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-saffron-500/10 to-green-500/10 p-3 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl">🇮🇳</div>
                    <p className="text-xs text-gray-300 mt-1">100% Indian Company</p>
                  </div>
                  <div className="h-8 w-px bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-2xl">💼</div>
                    <p className="text-xs text-gray-300 mt-1">Local Guides</p>
                  </div>
                  <div className="h-8 w-px bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-2xl">🤝</div>
                    <p className="text-xs text-gray-300 mt-1">Community First</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-saffron-300 transition-colors duration-300 hover:scale-110 transform bg-gray-800 p-2 rounded-full"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} trip.trekindia. 🇮🇳 Made in India with Pride.
                </p>
                <p className="text-gray-500 text-sm mt-1">Supporting Indian tourism and local communities</p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-saffron-300">Privacy Policy</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-saffron-300">Terms of Service</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-saffron-300">Refund Policy</a>
              </div>
            </div>
            
            {/* Indian Pride Section */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-gray-500 text-sm">
                    <span className="text-saffron-400 font-bold">Proud Member:</span> Indian Association of Tour Operators • Ministry of Tourism, India • Delhi Tourism
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-6 bg-saffron-500 rounded-sm"></div>
                    <div className="h-3 w-6 bg-white rounded-sm"></div>
                    <div className="h-3 w-6 bg-green-500 rounded-sm"></div>
                    <span className="text-gray-400 text-sm ml-2">Indian Flag Colors</span>
                  </div>
                </div>
              </div>
              
              {/* Final Indian Pride Message */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-saffron-500/10 via-white/5 to-green-500/10 px-6 py-3 rounded-full">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-gray-300 font-medium">Atithi Devo Bhava - The Guest is God</span>
                  <span className="text-2xl">🇮🇳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer