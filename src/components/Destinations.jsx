// Destinations.jsx
import { MapPin, ChevronRight } from 'lucide-react';
import DestinationCard from './DestinationCard';
import { destinations } from '../data/destinations';

const Destinations = () => {
  const featuredDestinations = destinations.slice(0, 6);

  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 mb-4">
            <MapPin className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Discover Incredible India</h2>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            From Himalayan peaks to tropical beaches, experience the diversity of India's landscapes and cultures
          </p>
        </div>

        {/* Destinations Grid - 3 per row */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white">Ready for Your Adventure?</h3>
              <p className="text-blue-100">25+ destinations waiting to be explored</p>
            </div>
            <button className="inline-flex items-center space-x-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span>View All Destinations</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;