import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Search, User, MapPin } from 'lucide-react';
import LoginModal from './LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/#destinations' },
    { label: 'Indian Tours', href: '/#packages' },
    { label: 'About India', href: '/#about' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/#contact' },
  ];

  // Handle scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle navigation
  const handleNavClick = (href, e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (href === '/') {
      navigate('/');
      window.scrollTo(0, 0);
    } else if (href.startsWith('/#')) {
      // This is a hash link to homepage sections
      const hash = href.split('#')[1];
      
      if (location.pathname === '/') {
        // Already on homepage, scroll to section
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // Not on homepage, navigate to homepage with hash
        navigate(`/#${hash}`);
      }
    } else {
      // Regular page navigation
      navigate(href);
    }
  };

  // Function to handle User icon click
  const handleUserClick = () => {
    setIsLoginModalOpen(true);
    setIsMenuOpen(false);
  };

  // Function to handle Book Tour button
  const handleBookTour = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById('packages');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      navigate('/#packages');
    }
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsLoginModalOpen(false);
      }
    };

    if (isLoginModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isLoginModalOpen]);

  // Determine if we're on homepage
  const isHomePage = location.pathname === '/';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-saffron-100' 
          : 'bg-transparent backdrop-blur-0'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="/" 
              onClick={(e) => handleNavClick('/', e)}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="relative">
                <div className={`relative flex items-center justify-center h-10 w-10 rounded-full border-2 ${
                  isScrolled || !isHomePage
                    ? 'border-gray-900 bg-white' 
                    : 'border-white bg-white/10 backdrop-blur-sm'
                }`}>
                  <Globe className="h-6 w-6 text-gray-900" />
                  <div className="absolute -bottom-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-white border border-gray-900">
                    <MapPin className="h-3 w-3 text-green-600 fill-current" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="relative">
                  <span className={`text-xl font-bold leading-tight ${
                    isScrolled || !isHomePage
                      ? 'text-gray-900 drop-shadow-sm' 
                      : 'text-white drop-shadow-lg'
                  }`}>
                    trip.trekindia
                  </span>
                </div>
                <span className={`text-xs font-medium ${
                  isScrolled || !isHomePage
                    ? 'text-gray-600' 
                    : 'text-white/90 drop-shadow-md'
                }`}>
                  Explore Incredible India
                </span>
              </div>
            </a>

            {/* Delhi Location Badge */}
            <div className={`hidden lg:flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isScrolled || !isHomePage
                ? 'bg-saffron-50 text-gray-800' 
                : 'bg-white/90 text-gray-900 backdrop-blur-sm'
            }`}>
              <MapPin className="h-4 w-4" />
              <span className="font-medium text-sm">Based in Delhi, India</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`font-medium transition-all duration-300 relative group ${
                    isScrolled || !isHomePage
                      ? 'text-gray-700 hover:text-saffron-600' 
                      : 'text-white/90 hover:text-white drop-shadow-md'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled || !isHomePage ? 'bg-saffron-500' : 'bg-white'
                  }`}></span>
                </a>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className={`p-2 transition-colors duration-300 ${
                isScrolled || !isHomePage ? 'text-gray-600 hover:text-saffron-600' : 'text-white/90 hover:text-white drop-shadow-md'
              }`}>
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={handleUserClick}
                className={`p-2 transition-colors duration-300 ${
                  isScrolled || !isHomePage ? 'text-gray-600 hover:text-saffron-600' : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
              >
                <User className="h-5 w-5" />
              </button>
              <button 
                onClick={handleBookTour}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg ${
                  isScrolled || !isHomePage
                    ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white hover:from-saffron-600 hover:to-saffron-700' 
                    : 'bg-white text-gray-900 hover:bg-gray-100 drop-shadow-lg'
                }`}
              >
                Book Indian Tour
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled || !isHomePage ? 'text-gray-600' : 'text-white drop-shadow-md'
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
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-gray-700 hover:text-saffron-600 hover:bg-saffron-50 px-4 py-3 font-medium rounded-lg mx-2"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-4 pt-4 space-y-3">
                  <button 
                    onClick={handleUserClick}
                    className="flex items-center justify-center w-full px-6 py-3 bg-gray-50 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                  >
                    <User className="h-5 w-5 mr-2" />
                    Sign In / Sign Up
                  </button>
                  <button 
                    onClick={handleBookTour}
                    className="w-full px-6 py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-full font-medium hover:from-saffron-600 hover:to-saffron-700 transition-all duration-300 shadow-md"
                  >
                    Book Indian Tour
                  </button>
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
  );
};

export default Header;