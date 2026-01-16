// DestinationDetail.jsx - Fixed version
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MapPin, Calendar, Star, Users, Clock, Shield, 
  Check, ArrowRight, Mountain, Waves, Trees, Sun,
  ChevronLeft, ChevronRight, Heart, Share2, Compass,
  Navigation, Camera, Globe, Utensils
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { destinations } from '../data/destinations';
import { packages } from '../data/packages';

const DestinationDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSidebarSticky, setIsSidebarSticky] = useState(true);
  
  const destination = destinations.find(d => d.id === id);
  const relatedPackages = packages.filter(pkg => pkg.destinations.includes(id));

  const images = [
    destination?.image,
    'https://images.unsplash.com/photo-1593693399741-6e8ac64b8a3d?w=1200&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getIconForHighlight = (highlight) => {
    const iconMap = {
      'Parvati River': Waves,
      'Chalal Trek': Mountain,
      'Israeli Cuisine': Utensils,
      'Hot Springs': Sun,
      'Malana Village': Globe,
      'Rohtang Pass': Navigation,
      'Solang Valley': Mountain,
      'Hidimba Temple': Globe,
      'Beas River': Waves,
      'Pangong Lake': Waves,
      'Nubra Valley': Mountain,
      'Magnetic Hill': Navigation,
      'Monasteries': Globe,
      'Khardung La': Navigation,
      'Snow Trekking': Mountain,
      'Summit View': Camera,
      'Campsite': Globe,
      'Forest Trails': Trees,
      'Sunrise Views': Camera,
      'Beach Hopping': Waves,
      'Portuguese Architecture': Globe,
      'Water Sports': Waves,
      'Night Markets': Utensils,
      'Seafood': Utensils,
      'Houseboat Stay': Waves,
      'Alleppey Backwaters': Waves,
      'Tea Plantations': Trees,
      'Ayurvedic Spa': Heart,
      'Kathakali Dance': Globe,
      'Ganga Aarti': Globe,
      'Morning Boat Ride': Waves,
      'Ancient Temples': Globe,
      'Street Food': Utensils,
      'Sarnath': Globe,
      'Lake Pichola': Waves,
      'City Palace': Globe,
      'Boat Ride': Waves,
      'Jag Mandir': Globe,
      'Cultural Shows': Globe,
      'Burj Khalifa': Globe,
      'Desert Safari': Navigation,
      'Dubai Mall': Globe,
      'Palm Jumeirah': Waves,
      'Global Village': Globe,
      'Amber Fort': Globe,
      'Hawa Mahal': Globe,
      'Jantar Mantar': Globe,
      'Local Markets': Utensils,
      'River Rafting': Waves,
      'Yoga Retreats': Heart,
      'Lakshman Jhula': Globe,
      'Beatles Ashram': Globe,
      'Radhanagar Beach': Waves,
      'Scuba Diving': Waves,
      'Cellular Jail': Globe,
      'Havelock Island': Waves,
      'Sea Walk': Waves,
    };
    return iconMap[highlight] || Compass;
  };

  // Handle sidebar stickiness on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector('.sidebar-content');
      if (sidebar) {
        const rect = sidebar.getBoundingClientRect();
        const isAtBottom = window.innerHeight >= rect.bottom;
        setIsSidebarSticky(!isAtBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!destination) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Compass className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Destination not found</h1>
          <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist or has been moved.</p>
          <a 
            href="/destinations"
            className="inline-flex items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-semibold hover:from-blue-700 hover:to-purple-700"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      {/* Hero Section - Redesigned */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        <div className="absolute inset-0">
          <img 
            src={destination.image} 
            alt={destination.name}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1.5 text-sm font-semibold text-white">
                {destination.difficulty} Level
              </span>
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
                {destination.season}
              </span>
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
                {destination.duration}
              </span>
            </div>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {destination.name}
            </h1>
            <p className="mb-8 text-lg md:text-xl text-blue-100 max-w-3xl">{destination.description}</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= Math.floor(destination.rating) ? 'text-amber-400 fill-current' : 'text-gray-400'}`}
                  />
                ))}
                <span className="text-white font-medium">
                  {destination.rating} <span className="text-blue-200">({destination.reviews} reviews)</span>
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105">
                  <Share2 className="h-5 w-5 text-white" />
                </button>
                <button className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105">
                  <Heart className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                  src={images[currentImageIndex]}
                  alt={destination.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 backdrop-blur-sm transition-all hover:bg-white hover:scale-105"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 backdrop-blur-sm transition-all hover:bg-white hover:scale-105"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 w-2 rounded-full ${currentImageIndex === idx ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 p-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`overflow-hidden rounded-lg transition-all ${currentImageIndex === idx ? 'ring-2 ring-blue-500 scale-95' : 'hover:scale-105'}`}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="h-20 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Must-Experience Highlights</h2>
                  <p className="text-gray-600 mt-2">Discover what makes {destination.name.split(',')[0]} truly special</p>
                </div>
                <span className="rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1 text-sm font-semibold text-blue-700">
                  {destination.highlights.length} experiences
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => {
                  const Icon = getIconForHighlight(highlight);
                  return (
                    <div
                      key={index}
                      className="group flex items-start space-x-4 rounded-xl bg-gradient-to-r from-gray-50 to-white p-5 transition-all hover:shadow-md hover:-translate-y-1"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">{highlight}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Immerse yourself in this unforgettable aspect of {destination.name.split(',')[0]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Itinerary Section */}
            {destination.itinerary && (
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Perfect {destination.duration} Itinerary</h2>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200" />
                  <div className="space-y-6">
                    {destination.itinerary.map((day) => (
                      <div key={day.day} className="relative flex items-start space-x-6">
                        <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                          <span className="text-lg font-bold text-white">Day {day.day}</span>
                        </div>
                        <div className="flex-1 rounded-xl bg-gradient-to-r from-gray-50 to-white p-6 hover:shadow-md transition-shadow">
                          <h3 className="mb-2 text-xl font-semibold text-gray-800">{day.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* What's Included */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Everything You Need</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.includes.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 rounded-xl bg-white/80 p-4 backdrop-blur-sm hover:bg-white transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className={`sidebar-content space-y-6 ${isSidebarSticky ? 'lg:sticky lg:top-6' : ''}`}>
              {/* Quick Info Card */}
              <div className="rounded-2xl bg-white p-6 shadow-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Destination Details</h3>
                
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-xl bg-blue-50 p-3">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Trip Duration</div>
                      <div className="font-semibold text-gray-900">{destination.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="rounded-xl bg-amber-50 p-3">
                      <Sun className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Best Time to Visit</div>
                      <div className="font-semibold text-gray-900">{destination.bestTime}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="rounded-xl bg-purple-50 p-3">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Difficulty Level</div>
                      <div className={`font-semibold px-3 py-1 rounded-full inline-block ${
                        destination.difficulty === 'Easy' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : destination.difficulty === 'Moderate'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {destination.difficulty}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="rounded-xl bg-rose-50 p-3">
                      <Star className="h-6 w-6 text-rose-600 fill-current" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Traveler Rating</div>
                      <div className="font-semibold text-gray-900">
                        {destination.rating}/5 from {destination.reviews} reviews
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Card */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {formatPrice(destination.price)}
                    </div>
                    <div className="text-sm text-gray-500">Starting price per person</div>
                  </div>
                  
                  <a
                    href={relatedPackages.length > 0 ? `/package/${relatedPackages[0].id}` : '/packages'}
                    className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-4 text-center font-semibold text-white transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>View Available Packages</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Related Packages - Only show if available */}
              {relatedPackages.length > 0 && (
                <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-6 border border-blue-100">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Available Packages</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-blue-700">
                      {relatedPackages.length}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {relatedPackages.slice(0, 3).map((pkg) => (
                      <a
                        key={pkg.id}
                        href={`/package/${pkg.id}`}
                        className="group block rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 pr-4">
                            <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-1">
                              {pkg.name}
                            </h4>
                            <p className="mt-1 text-sm text-gray-600">{pkg.duration}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-gray-900">{formatPrice(pkg.price)}</div>
                            <div className="mt-1 flex items-center justify-end">
                              <Star className="h-4 w-4 text-amber-400 fill-current" />
                              <span className="ml-1 text-sm text-gray-600">{pkg.rating}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  {relatedPackages.length > 3 && (
                    <div className="mt-4 text-center">
                      <a 
                        href="/packages" 
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View all {relatedPackages.length} packages →
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Safety Info - Fixed positioning */}
              <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200 shadow-sm">
                <div className="mb-4 flex items-center space-x-3">
                  <div className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">Travel With Confidence</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    'Certified local guides & expert hosts',
                    '24/7 emergency support during trip',
                    'All equipment quality checked',
                    'Medical & evacuation plans',
                    'Regular safety briefings',
                    'COVID-safe protocols'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    All our partners follow strict safety guidelines and are regularly audited.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetail;