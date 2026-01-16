// Packages.jsx
import { Calendar, Plus } from 'lucide-react';
import PackageCard from './PackageCard';
import { packages } from '../data/packages';

const Packages = () => {
  const popularPackages = packages.filter(pkg => pkg.popular);
  const otherPackages = packages.filter(pkg => !pkg.popular);

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center space-x-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 mb-4">
            <Calendar className="h-6 w-6 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">Curated Travel Experiences</h2>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover handpicked journeys across India and beyond, crafted for unforgettable memories
          </p>
        </div>

        {/* Most Popular Packages - 3 per row */}
        {popularPackages.length > 0 && (
          <div className="mb-16">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Featured Journeys</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-6"></div>
              <span className="text-sm font-semibold text-purple-600">{popularPackages.length} packages</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        )}

        {/* Other Packages - 3 per row */}
        {otherPackages.length > 0 && (
          <div className="mb-16">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Explore More</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-12 text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2070')] opacity-10 bg-cover"></div>
          <div className="relative">
            <h3 className="mb-4 text-2xl font-bold text-white">Craft Your Perfect Getaway</h3>
            <p className="mb-8 text-blue-100">
              Tell us your dream, and we'll build the perfect itinerary just for you
            </p>
            <button className="inline-flex items-center justify-center space-x-2 rounded-full bg-white px-8 py-3 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Plus className="h-5 w-5" />
              <span>Design Custom Trip</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;