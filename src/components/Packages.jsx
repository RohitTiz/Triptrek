// Packages.jsx
import { Calendar } from 'lucide-react';
import PackageCard from './PackageCard';
import { packages } from '../data/packages';

const Packages = () => {
  const popularPackages = packages.filter(pkg => pkg.popular);
  const otherPackages = packages.filter(pkg => !pkg.popular);

  return (
    <section id="packages" className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 mb-3 sm:gap-3 sm:px-6 sm:py-3 sm:mb-4">
            <Calendar className="h-4 w-4 text-purple-600 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
              Curated Travel Experiences
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base lg:text-lg">
            Discover handpicked journeys across India and beyond, crafted for unforgettable memories
          </p>
        </div>

        {/* Most Popular Packages */}
        {popularPackages.length > 0 && (
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="mb-4 flex items-center gap-3 sm:mb-6 lg:mb-8">
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">
                Featured Journeys
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <span className="text-xs font-semibold text-purple-600 sm:text-sm">
                {popularPackages.length} packages
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {popularPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        )}

        {/* Other Packages */}
        {otherPackages.length > 0 && (
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="mb-4 flex items-center gap-3 sm:mb-6 lg:mb-8">
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">
                Explore More
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
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