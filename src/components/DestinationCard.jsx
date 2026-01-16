// components/DestinationCard.jsx
import { MapPin, Calendar, Star, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'from-emerald-500 to-emerald-600';
      case 'Moderate': return 'from-amber-500 to-amber-600';
      case 'Challenging': return 'from-rose-500 to-rose-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Link to={`/destination/${destination.id}`} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={destination.image} 
            alt={destination.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Price Tag */}
          <div className="absolute right-4 top-4">
            <div className="rounded-full bg-white/95 px-4 py-2 backdrop-blur-sm shadow-lg">
              <span className="font-bold text-gray-900">{formatPrice(destination.price)}</span>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
              <div className={`rounded-full bg-gradient-to-r ${getDifficultyColor(destination.difficulty)} px-3 py-1 text-xs font-semibold text-white`}>
                {destination.difficulty}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Description */}
          <p className="mb-6 line-clamp-2 text-gray-600">{destination.description}</p>

          {/* Stats Row */}
          <div className="mb-6 grid grid-cols-3 gap-4 border-b border-gray-100 pb-6">
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-full bg-blue-50 p-2">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-gray-900">{destination.duration}</span>
              <span className="text-xs text-gray-500">Duration</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-full bg-amber-50 p-2">
                <Star className="h-4 w-4 text-amber-500 fill-current" />
              </div>
              <span className="text-sm font-semibold text-gray-900">{destination.rating}/5</span>
              <span className="text-xs text-gray-500">Rating</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-full bg-purple-50 p-2">
                <Users className="h-4 w-4 text-purple-600" />
              </div>
              <span className="text-sm font-semibold text-gray-900">{destination.reviews}</span>
              <span className="text-xs text-gray-500">Reviews</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">Highlights</span>
              {destination.highlights.length > 2 && (
                <span className="text-xs text-gray-500">
                  +{destination.highlights.length - 2} more
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {destination.highlights.slice(0, 2).map((highlight, index) => (
                <span 
                  key={index}
                  className="rounded-full bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Season & CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 px-3 py-1.5">
                <span className="text-sm font-semibold text-emerald-700">{destination.season}</span>
              </div>
            </div>
            <button className="group/btn flex items-center space-x-2 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 px-5 py-2.5 text-white transition-all duration-300 hover:from-gray-800 hover:to-gray-700">
              <span className="text-sm font-medium">Explore</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;