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
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-saffron-100' 
          : 'bg-transparent backdrop-blur-0'
      }`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 lg:min-h-20 items-center justify-between">
            {/* Logo */}
            <a 
              href="/" 
              onClick={(e) => handleNavClick('/', e)}
              className="flex cursor-pointer items-center gap-2 sm:gap-3"
            >
              <div className="relative">
                <div className={`relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 ${
                  isScrolled || !isHomePage
                    ? 'border-gray-900 bg-white' 
                    : 'border-white bg-white/10 backdrop-blur-sm'
                }`}>
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
                  <div className="absolute -bottom-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full border border-gray-900 bg-white">
                    <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-600 fill-current" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col leading-tight">
                <div className="relative">
                  <span className={`text-lg font-bold sm:text-xl ${
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
            <div className={`hidden items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 lg:flex ${
              isScrolled || !isHomePage
                ? 'bg-saffron-50 text-gray-800' 
                : 'bg-white/90 text-gray-900 backdrop-blur-sm'
            }`}>
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Based in Delhi, India</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-4 lg:flex lg:gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`relative font-medium transition-all duration-300 group ${
                    isScrolled || !isHomePage
                      ? 'text-gray-700 hover:text-saffron-600' 
                      : 'text-white/90 hover:text-white drop-shadow-md'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                    isScrolled || !isHomePage ? 'bg-saffron-500' : 'bg-white'
                  }`}></span>
                </a>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="hidden items-center gap-3 lg:flex lg:gap-4">
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
                className={`rounded-full px-5 py-2.5 font-medium shadow-lg transition-all duration-300 lg:px-6 ${
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
              className={`p-2 transition-colors duration-300 lg:hidden ${
                isScrolled || !isHomePage ? 'text-gray-600' : 'text-white drop-shadow-md'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="border-t border-gray-100 bg-white py-4 shadow-lg lg:hidden">
              {/* Mobile Location Badge */}
              <div className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-lg bg-saffron-50 px-4 py-3">
                <MapPin className="h-4 w-4 text-saffron-600" />
                <span className="text-sm font-medium text-gray-800">Based in Delhi, India</span>
              </div>
              
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="mx-2 rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-saffron-50 hover:text-saffron-600"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="space-y-3 px-4 pt-4">
                  <button 
                    onClick={handleUserClick}
                    className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-gray-50 px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100"
                  >
                    <User className="mr-2 h-5 w-5" />
                    Sign In / Sign Up
                  </button>
                  <button 
                    onClick={handleBookTour}
                    className="w-full rounded-full bg-gradient-to-r from-saffron-500 to-saffron-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:from-saffron-600 hover:to-saffron-700"
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