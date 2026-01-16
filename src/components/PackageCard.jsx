// PackageCard.jsx
import { Check, Star, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PackageCard = ({ pkg }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Link to={`/package/${pkg.id}`} className="group">
      <div className={`relative overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
        pkg.popular ? 'border-blue-500/20 ring-1 ring-blue-500/10' : 'border-gray-200'
      }`}>
        {pkg.popular && (
          <div className="absolute left-4 top-4 z-10">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg">
              Most Popular
            </span>
          </div>
        )}

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={pkg.image} 
            alt={pkg.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h3 className="mb-1 text-xl font-bold text-gray-900">{pkg.name}</h3>
              <p className="line-clamp-2 text-sm text-gray-600">{pkg.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{formatPrice(pkg.price)}</div>
              <div className="text-xs text-gray-500">per person</div>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-5 flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{pkg.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">12-15</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-amber-500 fill-current" />
              <span className="text-gray-600">{pkg.rating} ({pkg.reviews})</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6 grid grid-cols-2 gap-2">
            {pkg.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                <span className="truncate text-xs text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="group/btn flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 text-white transition-all duration-300 hover:from-gray-800 hover:to-gray-700">
            <span className="text-sm font-medium">View Details</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;