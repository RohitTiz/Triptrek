// PackageDetail.jsx (Refined version)
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Check, Star, Clock, Users, Calendar, Shield, 
  AlertCircle, ArrowRight, Tag, Share2, Heart, 
  MapPin, ChevronRight, ChevronLeft
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { packages } from '../data/packages';

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pkg = packages.find(p => p.id === id);
  
  const images = [
    pkg?.image,
    'https://images.unsplash.com/photo-1593693399741-6e8ac64b8a3d?w=400&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w-400&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80',
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (!pkg) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Package not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center space-x-3">
              {pkg.popular && (
                <span className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-1.5 text-sm font-semibold text-white">
                  Most Popular
                </span>
              )}
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
                {pkg.duration}
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">{pkg.name}</h1>
            <p className="mb-8 text-xl text-blue-100">{pkg.description}</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= Math.floor(pkg.rating) ? 'text-amber-400 fill-current' : 'text-gray-400'}`}
                  />
                ))}
                <span className="text-white">
                  {pkg.rating} ({pkg.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20">
                  <Share2 className="h-5 w-5 text-white" />
                </button>
                <button className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20">
                  <Heart className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={images[currentImageIndex]}
                  alt="Main"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 rounded-full bg-white/90 p-2 backdrop-blur-sm transition-all hover:bg-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 top-1/2 rounded-full bg-white/90 p-2 backdrop-blur-sm transition-all hover:bg-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2 p-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`overflow-hidden rounded-lg ${currentImageIndex === idx ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="h-20 w-full object-cover transition-transform hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8 rounded-2xl bg-white p-8 shadow-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Package Highlights</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {pkg.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 rounded-lg bg-gray-50 p-4 transition-all hover:bg-gray-100"
                  >
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span className="font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-xl font-bold text-gray-900">What's Included</h3>
                <ul className="space-y-4">
                  {(pkg.inclusions || []).map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-xl font-bold text-gray-900">What's Not Included</h3>
                <ul className="space-y-4">
                  {(pkg.exclusions || []).map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                        <AlertCircle className="h-3.5 w-3.5 text-gray-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-2xl">
              <div className="mb-6 text-center">
                <div className="mb-2 text-4xl font-bold text-gray-900">{formatPrice(pkg.price)}</div>
                <div className="text-gray-500">per person</div>
              </div>

              {/* Date Selection */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  <Calendar className="mr-2 inline h-4 w-4" />
                  Travel Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* Travelers */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  <Users className="mr-2 inline h-4 w-4" />
                  Travelers
                </label>
                <div className="flex items-center justify-between rounded-lg border border-gray-300 p-1">
                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{travelers} persons</span>
                  <button
                    onClick={() => setTravelers(Math.min(15, travelers + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  <Tag className="mr-2 inline h-4 w-4" />
                  Coupon Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="SUMMER15"
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <button className="rounded-lg bg-gray-900 px-4 py-3 font-medium text-white hover:bg-gray-800">
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Summary */}
              <div className="mb-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Base Price</span>
                  <span>{formatPrice(pkg.price * travelers)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount ({appliedCoupon.discount}%)</span>
                    <span>-{formatPrice((pkg.price * travelers * appliedCoupon.discount) / 100)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & Fees</span>
                  <span>{formatPrice(pkg.price * travelers * 0.18)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount</span>
                    <span>{formatPrice(pkg.price * travelers * 1.18)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-4 font-semibold text-white transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-lg">
                Book Now
              </button>

              <div className="mt-4 text-center text-sm text-gray-500">
                Free cancellation • 24/7 support • Best price guarantee
              </div>
            </div>

            {/* Support Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-6">
              <div className="mb-4 flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-gray-900">Book with Confidence</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Best Price Guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Flexible Cancellation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PackageDetail;