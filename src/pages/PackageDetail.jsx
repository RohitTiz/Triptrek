import { useParams, Link, useNavigate } from 'react-router-dom'
import { Check, Star, Clock, Users, MapPin, Calendar, Shield, AlertCircle, ArrowRight, Tag, Share2, Heart } from 'lucide-react'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { packages } from '../data/packages'
import { destinations } from '../data/destinations'

const PackageDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState('')
  const [travelers, setTravelers] = useState(2)
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)

  const pkg = packages.find(p => p.id === id)
  const destination = pkg ? destinations.find(d => d.destinations?.includes(pkg.destinations[0])) : null

  const coupons = [
    { code: 'WANDER20', discount: 20, minAmount: 20000 },
    { code: 'SUMMER15', discount: 15, minAmount: 15000 },
    { code: 'FIRST10', discount: 10, minAmount: 10000 }
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const calculateTotal = () => {
    let total = pkg.price * travelers
    if (appliedCoupon && total >= appliedCoupon.minAmount) {
      total = total * (100 - appliedCoupon.discount) / 100
    }
    return Math.round(total)
  }

  const applyCoupon = () => {
    const coupon = coupons.find(c => c.code === couponCode.toUpperCase())
    if (coupon) {
      setAppliedCoupon(coupon)
    } else {
      alert('Invalid coupon code')
    }
  }

  const handleBookNow = () => {
    if (!selectedDate) {
      alert('Please select a travel date')
      return
    }
    navigate(`/package/${id}/payment`, {
      state: {
        package: pkg,
        date: selectedDate,
        travelers,
        total: calculateTotal(),
        coupon: appliedCoupon
      }
    })
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Package not found</h1>
          <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {pkg.popular && (
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {pkg.duration}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{pkg.name}</h1>
              <p className="text-xl text-blue-100 max-w-3xl">{pkg.description}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="h-48">
                    <img 
                      src={`https://images.unsplash.com/photo-1593693399741-6e8ac64b8a3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=${num}`}
                      alt={`Gallery ${num}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Package Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Not Included</h3>
                <ul className="space-y-3">
                  {pkg.exclusions.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary */}
            {destination?.itinerary && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Daily Itinerary</h2>
                <div className="space-y-6">
                  {destination.itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">
                          Day {day.day}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{day.title}</h3>
                      </div>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">{formatPrice(pkg.price)}</div>
                <div className="text-gray-500">per person</div>
                <div className="flex items-center justify-center mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-5 w-5 ${star <= Math.floor(pkg.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({pkg.reviews} reviews)</span>
                </div>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Travel Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Travelers */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Travelers
                </label>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{travelers}</span>
                  <button 
                    onClick={() => setTravelers(travelers + 1)}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    +
                  </button>
                  <span className="text-gray-600 ml-4">
                    Max: 15 per group
                  </span>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Tag className="h-4 w-4 inline mr-1" />
                  Coupon Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button 
                    onClick={applyCoupon}
                    className="px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="mt-2 text-green-600 text-sm">
                    Coupon applied! {appliedCoupon.discount}% discount
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Package Price ({travelers} travelers)</span>
                    <span>{formatPrice(pkg.price * travelers)}</span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Coupon Discount ({appliedCoupon.code})</span>
                      <span>-{formatPrice((pkg.price * travelers * appliedCoupon.discount) / 100)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>Taxes & Fees</span>
                    <span>{formatPrice(pkg.price * travelers * 0.18)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total Amount</span>
                      <span>{formatPrice(calculateTotal() + (pkg.price * travelers * 0.18))}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleBookNow}
                className="w-full btn-primary py-4 text-lg font-semibold"
              >
                Book Now
              </button>

              <div className="mt-4 text-center text-sm text-gray-500">
                Free cancellation up to 7 days before travel
              </div>
            </div>

            {/* Safety & Support */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Book with Confidence</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Best Price Guarantee</li>
                    <li>• 24/7 Customer Support</li>
                    <li>• Flexible Cancellation</li>
                    <li>• Secure Payment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-4">Need Help?</h4>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-white hover:bg-gray-100 rounded-lg transition-colors">
                  <div className="font-medium text-gray-800">WhatsApp Support</div>
                  <div className="text-sm text-gray-600">Get instant response</div>
                </button>
                <button className="w-full text-left p-3 bg-white hover:bg-gray-100 rounded-lg transition-colors">
                  <div className="font-medium text-gray-800">Call Us</div>
                  <div className="text-sm text-gray-600">+91 98765 43210</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PackageDetail