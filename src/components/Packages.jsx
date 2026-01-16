// Packages.jsx
import { Calendar } from 'lucide-react';
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
      </div>
    </section>
  );
};

export default Packages;