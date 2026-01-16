// pages/Payment.jsx
import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { 
  CreditCard, Lock, Shield, Check, 
  ArrowLeft, Clock, Users, Calendar,
  MapPin, Package, Tag
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { packages } from '../data/packages';
import { destinations } from '../data/destinations';

const Payment = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Get package or destination details
  const pkg = packages.find(p => p.id === id);
  const destination = destinations.find(d => d.id === id);
  
  const bookingData = state || {
    packageId: pkg?.id,
    packageName: pkg?.name || destination?.name,
    basePrice: pkg?.price || destination?.price,
    travelers: 2,
    selectedDate: new Date().toISOString().split('T')[0],
    totalAmount: (pkg?.price || destination?.price || 0) * 2 * 1.18,
    image: pkg?.image || destination?.image,
    type: pkg ? 'package' : 'destination'
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      navigate('/payment-success', { 
        state: { 
          bookingId: 'BOOK' + Date.now(),
          ...bookingData
        } 
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
            <p className="text-gray-600">Secure payment for {bookingData.packageName}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Details</h2>
                <form onSubmit={handlePayment}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                  
                  <div className="mb-6">
                    <div className="flex space-x-4 mb-4">
                      {['card', 'upi', 'netbanking'].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setPaymentMethod(method)}
                          className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${
                            paymentMethod === method 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {method === 'card' ? 'Credit/Debit Card' : 
                           method === 'upi' ? 'UPI' : 'Net Banking'}
                        </button>
                      ))}
                    </div>

                    {paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            required
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              required
                              value={expiry}
                              onChange={(e) => setExpiry(e.target.value)}
                              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CVV
                            </label>
                            <input
                              type="password"
                              required
                              value={cvv}
                              onChange={(e) => setCvv(e.target.value)}
                              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-4 font-semibold text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <Lock className="h-5 w-5" />
                      <span>Pay {formatPrice(bookingData.totalAmount)}</span>
                    </div>
                  </button>
                </form>
              </div>

              {/* Security Info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Secure Payment</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['256-bit SSL', 'PCI DSS', '3D Secure', 'No Card Storage'].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Order Summary */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h2>
                  
                  {/* Package/Destination Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <img 
                      src={bookingData.image} 
                      alt={bookingData.packageName}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{bookingData.packageName}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                        {bookingData.type === 'package' ? (
                          <Package className="h-4 w-4" />
                        ) : (
                          <MapPin className="h-4 w-4" />
                        )}
                        <span>{bookingData.type === 'package' ? 'Package' : 'Destination'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Date</span>
                      </div>
                      <span className="font-medium">{bookingData.selectedDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>Travelers</span>
                      </div>
                      <span className="font-medium">{bookingData.travelers} persons</span>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-gray-600">
                      <span>Base Price</span>
                      <span>{formatPrice(bookingData.basePrice * bookingData.travelers)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Taxes & Fees (18%)</span>
                      <span>{formatPrice(bookingData.basePrice * bookingData.travelers * 0.18)}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount</span>
                        <span>{formatPrice(bookingData.totalAmount)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Guarantee Badges */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {[
                      'Free cancellation up to 7 days',
                      '24/7 customer support',
                      'Best price guaranteed',
                      'Instant confirmation'
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <div>
                      <h4 className="font-bold text-gray-900">Need Help?</h4>
                      <p className="text-sm text-gray-600">24/7 customer support</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-700 font-medium">
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-gray-500 mt-1">support@travel.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;