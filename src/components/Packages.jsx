import { Calendar, ArrowRight } from 'lucide-react'
import PackageCard from './PackageCard'
import { packages } from '../data/packages'

const Packages = () => {
  const popularPackages = packages.filter(pkg => pkg.popular)
  const otherPackages = packages.filter(pkg => !pkg.popular)

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Calendar className="h-8 w-8 text-purple-600" />
            <h2 className="section-title">
              Curated Travel Packages
            </h2>
          </div>
          <p className="section-subtitle">
            All-inclusive packages for hassle-free travel experiences across India
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Most Popular Packages</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {popularPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        {otherPackages.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Other Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl max-w-2xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900">Custom Package Available</h3>
              <p className="text-gray-600">Want something different? We'll create a custom package just for you.</p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Create Custom Trip
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages