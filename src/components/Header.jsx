import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Globe, Search, User } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Packages', href: '#packages' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent backdrop-blur-0'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Globe className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`} />
            <span className={`text-2xl font-bold font-playfair transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Wanderlust
              <span className="text-blue-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleHashClick(item.href, e)}
                  className={`font-medium transition-all duration-300 relative group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-blue-600' : 'bg-white'
                  }`}></span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-all duration-300 relative group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-blue-600' : 'bg-white'
                  }`}></span>
                </Link>
              )
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>
              <Search className="h-5 w-5" />
            </button>
            <button className={`p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>
              <User className="h-5 w-5" />
            </button>
            <Link to="#packages" onClick={(e) => handleHashClick('#packages', e)}>
              <button className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}>
                Book Now
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
          <div className="lg:hidden bg-white border-t py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleHashClick(item.href, e)}
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 font-medium"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="px-4 pt-4 space-y-3">
                <Link to="#packages" onClick={(e) => {
                  handleHashClick('#packages', e)
                  setIsMenuOpen(false)
                }}>
                  <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header