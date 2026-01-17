import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Globe, Search, User, MapPin } from 'lucide-react'
import LoginModal from './LoginModal' // Add this import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false) // Add this state

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Indian Tours', href: '#packages' },
    { label: 'About India', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Visa Info', href: '#visa' },
  ]

  // Handle scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Initial check
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Function to handle hash navigation
  const handleHashClick = (href, e) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      if (window.location.pathname !== '/') {
        // If not on homepage, navigate to homepage with hash
        window.location.href = `/${href}`
      } else {
        // If on homepage, scroll to section
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
      setIsMenuOpen(false)
    }
  }

  // Function to handle User icon click
  const handleUserClick = () => {
    setIsLoginModalOpen(true)
    setIsMenuOpen(false) // Close mobile menu if open
  }

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsLoginModalOpen(false)
      }
    }

    if (isLoginModalOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isLoginModalOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-saffron-100' 
          : 'bg-transparent backdrop-blur-0'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <Globe className={`h-8 w-8 transition-colors duration-300 ${
                  isScrolled ? 'text-saffron-500' : 'text-white'
                }`} />
                <MapPin className="absolute -bottom-1 -right-1 h-4 w-4 text-green-500 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight">
                  trip.trekindia
                </span>
                <span className="text-xs font-medium text-gray-600">Explore Incredible India</span>
              </div>
            </Link>

            {/* Delhi Location Badge */}
            <div className={`hidden lg:flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-saffron-50 text-gray-800' 
                : 'bg-white/20 text-white backdrop-blur-sm'
            }`}>
              <MapPin className="h-4 w-4" />
              <span className="font-medium text-sm">Based in Delhi, India</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleHashClick(item.href, e)}
                    className={`font-medium transition-all duration-300 relative group ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-saffron-600' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-saffron-500' : 'bg-white'
                    }`}></span>
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-all duration-300 relative group ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-saffron-600' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-saffron-500' : 'bg-white'
                    }`}></span>
                  </Link>
                )
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-saffron-600' : 'text-white/90 hover:text-white'
              }`}>
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={handleUserClick} // Add onClick handler
                className={`p-2 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-saffron-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <User className="h-5 w-5" />
              </button>
              <Link to="#packages" onClick={(e) => handleHashClick('#packages', e)}>
                <button className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white hover:from-saffron-600 hover:to-saffron-700' 
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}>
                  Book Indian Tour
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
              {/* Mobile Location Badge */}
              <div className="flex items-center justify-center space-x-2 px-4 py-3 mb-4 bg-saffron-50 rounded-lg mx-4">
                <MapPin className="h-4 w-4 text-saffron-600" />
                <span className="font-medium text-sm text-gray-800">Based in Delhi, India</span>
              </div>
              
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  item.href.startsWith('#') ? (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleHashClick(item.href, e)}
                      className="text-gray-700 hover:text-saffron-600 hover:bg-saffron-50 px-4 py-3 font-medium rounded-lg mx-2"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-700 hover:text-saffron-600 hover:bg-saffron-50 px-4 py-3 font-medium rounded-lg mx-2"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <div className="px-4 pt-4 space-y-3">
                  {/* Add User button in mobile menu */}
                  <button 
                    onClick={handleUserClick}
                    className="flex items-center justify-center w-full px-6 py-3 bg-gray-50 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                  >
                    <User className="h-5 w-5 mr-2" />
                    Sign In / Sign Up
                  </button>
                  <Link to="#packages" onClick={(e) => {
                    handleHashClick('#packages', e)
                    setIsMenuOpen(false)
                  }}>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-full font-medium hover:from-saffron-600 hover:to-saffron-700 transition-all duration-300 shadow-md">
                      Book Indian Tour
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  )
}

export default Header