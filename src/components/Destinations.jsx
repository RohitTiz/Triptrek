// components/Destinations.jsx
import { MapPin, ChevronRight } from 'lucide-react';
import DestinationCard from './DestinationCard';
import { destinations } from '../data/destinations';

const Destinations = () => {
  const featuredDestinations = destinations.slice(0, 6);

  return (
    <section id="destinations" className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Discover Incredible India
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-gray-600 px-4">
            From Himalayan peaks to tropical beaches, experience the diversity of India's landscapes and cultures
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center px-4">
          <div className="inline-flex w-full max-w-4xl flex-col items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:flex-row sm:justify-between sm:gap-6 sm:p-6 lg:px-8 lg:py-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Ready for Your Adventure?
              </h3>
              <p className="text-sm text-blue-100 sm:text-base">
                25+ destinations waiting to be explored
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-6 sm:py-3">
              <span className="text-sm sm:text-base">View All Destinations</span>
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;