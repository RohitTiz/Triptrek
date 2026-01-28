import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Search, User, MapPin, LogOut, Settings } from 'lucide-react';
import LoginModal from './LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
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

  // Check if user is logged in
  useEffect(() => {
    const checkUserLogin = () => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      } else {
        setCurrentUser(null);
      }
    };

    checkUserLogin();
    
    // Listen for storage changes (for login/logout from other tabs)
    window.addEventListener('storage', checkUserLogin);
    
    // Check on page load
    window.addEventListener('load', checkUserLogin);
    
    return () => {
      window.removeEventListener('storage', checkUserLogin);
      window.removeEventListener('load', checkUserLogin);
    };
  }, []);

  // Handle scroll effect
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

  // Close user dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserDropdown && !event.target.closest('.user-dropdown-container')) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showUserDropdown]);

  // Function to handle navigation
  const handleNavClick = (href, e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setShowUserDropdown(false);
    
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
    if (currentUser) {
      setShowUserDropdown(!showUserDropdown);
    } else {
      setIsLoginModalOpen(true);
    }
    setIsMenuOpen(false);
  };

  // Function to handle Book Tour button
  const handleBookTour = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setShowUserDropdown(false);
    
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

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCurrentUser(null);
    setShowUserDropdown(false);
    setIsMenuOpen(false);
    navigate('/');
    window.location.reload();
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsLoginModalOpen(false);
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isLoginModalOpen, showUserDropdown]);

  // Determine if we're on homepage
  const isHomePage = location.pathname === '/';

  return (
    <>
      <header className={`fixed inset-x-0 top-6 z-50 transition-all duration-300`}>
        <div className="mx-4 lg:mx-8 xl:mx-12">
          <div className={`rounded-2xl transition-all duration-300 shadow-2xl ${
            isScrolled || !isHomePage
              ? 'bg-white/98 backdrop-blur-lg border border-gray-200' 
              : 'bg-white/95 backdrop-blur-md shadow-[0_10px_60px_-15px_rgba(0,0,0,0.3)]'
          }`}>
            <div className="px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
              <div className="flex min-h-14 lg:min-h-16 items-center justify-between">
                {/* Logo */}
                <a 
                  href="/" 
                  onClick={(e) => handleNavClick('/', e)}
                  className="flex cursor-pointer items-center gap-2 sm:gap-3"
                >
                  <div className="relative">
                    <div className={`relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 ${
                      isScrolled || !isHomePage
                        ? 'border-green-600 bg-white' 
                        : 'border-white bg-gradient-to-r from-saffron-500 to-green-600'
                    }`}>
                      <Globe className={`h-5 w-5 sm:h-6 sm:w-6 ${
                        isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
                      }`} />
                      <div className={`absolute -bottom-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full border ${
                        isScrolled || !isHomePage
                          ? 'border-green-600 bg-white' 
                          : 'border-white bg-white'
                      }`}>
                        <MapPin className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${
                          isScrolled || !isHomePage ? 'text-green-600' : 'text-saffron-600'
                        } fill-current`} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col leading-tight">
                    <div className="relative">
                      <span className={`text-lg font-bold sm:text-xl ${
                        isScrolled || !isHomePage
                          ? 'text-gray-900' 
                          : 'text-green-700'
                      }`}>
                        trip.trekindia
                      </span>
                    </div>
                    <span className={`text-xs font-medium ${
                      isScrolled || !isHomePage ? 'text-gray-600' : 'text-green-600'
                    }`}>
                      Explore Incredible India
                    </span>
                  </div>
                </a>

                {/* Delhi Location Badge */}
                <div className={`hidden items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 lg:flex ${
                  isScrolled || !isHomePage
                    ? 'bg-gray-50 text-gray-800 border border-gray-200' 
                    : 'bg-gray-50 text-gray-800 border border-gray-200'
                }`}>
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium">Based in Delhi, India</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-4 lg:flex lg:gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className={`relative font-medium transition-all duration-300 group text-gray-800 hover:text-green-600`}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ))}
                </nav>

                {/* Right side buttons */}
                <div className="hidden items-center gap-3 lg:flex lg:gap-4">
                  <button className={`p-2 transition-colors duration-300 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-green-600`}>
                    <Search className="h-5 w-5" />
                  </button>
                  
                  {/* User Profile Button with Dropdown */}
                  <div className="user-dropdown-container relative">
                    <button 
                      onClick={handleUserClick}
                      className={`p-2 transition-colors duration-300 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-green-600 flex items-center gap-2 ${
                        currentUser ? 'bg-gray-50' : ''
                      }`}
                    >
                      <User className="h-5 w-5" />
                      {currentUser && (
                        <span className="text-sm font-medium hidden xl:inline">
                          Hi, {currentUser.name?.split(' ')[0] || 'User'}
                        </span>
                      )}
                    </button>
                    
                    {/* User Dropdown Menu */}
                    {showUserDropdown && currentUser && (
                      <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-lg py-2 shadow-xl z-50">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-saffron-400 to-green-500 text-white font-bold">
                              {currentUser.name?.charAt(0) || currentUser.email?.charAt(0) || 'U'}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{currentUser.name || 'User'}</p>
                              <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="py-1">
                          <a 
                            href="/profile" 
                            onClick={(e) => handleNavClick('/profile', e)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            <User className="h-4 w-4" />
                            My Profile
                          </a>
                          
                          <a 
                            href="/bookings" 
                            onClick={(e) => handleNavClick('/bookings', e)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            My Bookings
                          </a>
                          
                          <a 
                            href="/settings" 
                            onClick={(e) => handleNavClick('/settings', e)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            <Settings className="h-4 w-4" />
                            Settings
                          </a>
                        </div>
                        
                        <div className="border-t border-gray-100 py-1">
                          <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <LogOut className="h-4 w-4" />
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    onClick={handleBookTour}
                    className={`rounded-full px-5 py-2.5 font-medium shadow-lg transition-all duration-300 lg:px-6 ${
                      isScrolled || !isHomePage
                        ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white hover:from-saffron-600 hover:to-saffron-700 shadow-lg' 
                        : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg'
                    }`}
                  >
                    Book Indian Tour
                  </button>
                </div>

                {/* Mobile menu button */}
                <button
                  className={`p-2 transition-colors duration-300 lg:hidden hover:bg-gray-100 rounded-lg text-gray-600 hover:text-green-600`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="border-t border-gray-100 bg-white py-4 shadow-inner rounded-b-2xl lg:hidden">
                {/* Mobile Location Badge */}
                <div className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-lg bg-gray-50 px-4 py-3 border border-gray-200">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-800">Based in Delhi, India</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className="mx-2 rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-all duration-300"
                    >
                      {item.label}
                    </a>
                  ))}
                  
                  {/* User info in mobile menu */}
                  {currentUser && (
                    <div className="mx-4 mb-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-saffron-400 to-green-500 text-white font-bold">
                          {currentUser.name?.charAt(0) || currentUser.email?.charAt(0) || 'U'}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{currentUser.name || 'User'}</p>
                          <p className="text-xs text-gray-500">{currentUser.email}</p>
                        </div>
                      </div>
                      
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <a 
                          href="/profile" 
                          onClick={(e) => handleNavClick('/profile', e)}
                          className="rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-100"
                        >
                          Profile
                        </a>
                        <a 
                          href="/bookings" 
                          onClick={(e) => handleNavClick('/bookings', e)}
                          className="rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-100"
                        >
                          Bookings
                        </a>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-3 px-4 pt-2">
                    {!currentUser ? (
                      <button 
                        onClick={handleUserClick}
                        className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 font-medium text-gray-800 transition-all duration-300 hover:bg-gray-100 shadow-sm"
                      >
                        <User className="mr-2 h-5 w-5" />
                        Sign In / Sign Up
                      </button>
                    ) : (
                      <button 
                        onClick={handleLogout}
                        className="flex w-full items-center justify-center rounded-full border border-red-200 bg-white px-6 py-3 font-medium text-red-600 transition-all duration-300 hover:bg-red-50 shadow-sm"
                      >
                        <LogOut className="mr-2 h-5 w-5" />
                        Logout
                      </button>
                    )}
                    
                    <button 
                      onClick={handleBookTour}
                      className="w-full rounded-full bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-800"
                    >
                      Book Indian Tour
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
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