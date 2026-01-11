import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Check, Shield, Lock, CreditCard, Wallet, Smartphone, ArrowLeft, ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Payment = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { package: pkg, date, travelers, total, coupon } = location.state || {}
  
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })
  const [upiId, setUpiId] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handlePayment = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentSuccess(true)
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }, 2000)
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">No booking details found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-8">
              Your booking for {pkg.name} has been confirmed. We've sent the details to your email.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID</span>
                  <span className="font-semibold">WND{Date.now().toString().slice(-8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Package</span>
                  <span className="font-semibold">{pkg.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Travel Date</span>
                  <span className="font-semibold">{new Date(date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Travelers</span>
                  <span className="font-semibold">{travelers} person(s)</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Paid</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Redirecting to homepage in 3 seconds...
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Package</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Details</h2>
              
              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center space-y-2 ${
                      paymentMethod === 'card' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <CreditCard className="h-8 w-8 text-gray-600" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center space-y-2 ${
                      paymentMethod === 'upi' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Smartphone className="h-8 w-8 text-gray-600" />
                    <span className="font-medium">UPI</span>
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('wallet')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center space-y-2 ${
                      paymentMethod === 'wallet' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Wallet className="h-8 w-8 text-gray-600" />
                    <span className="font-medium">Wallet</span>
                  </button>
                </div>
              </div>

              {/* Payment Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="max-w-xs">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="username@upi"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                  />
                  <div className="grid grid-cols-4 gap-2">
                    {['gpay@oksbi', 'phonepe@ybl', 'paytm@paytm', 'bhim@upi'].map((id) => (
                      <button
                        key={id}
                        onClick={() => setUpiId(id)}
                        className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
                      >
                        {id}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {paymentMethod === 'wallet' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Paytm', 'PhonePe', 'Google Pay', 'Amazon Pay', 'Mobikwik', 'Freecharge'].map((wallet) => (
                    <button
                      key={wallet}
                      className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-center"
                    >
                      {wallet}
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-8 flex items-center space-x-2 text-sm text-gray-600">
                <Lock className="h-4 w-4" />
                <span>Your payment is secure and encrypted</span>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Payment Security</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 256-bit SSL encryption for secure transactions</li>
                    <li>• Your card details are never stored on our servers</li>
                    <li>• All transactions are PCI DSS compliant</li>
                    <li>• Money-back guarantee as per cancellation policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{pkg.name}</h4>
                    <p className="text-sm text-gray-600">{pkg.duration}</p>
                    <p className="text-sm text-gray-600">Travelers: {travelers}</p>
                    <p className="text-sm text-gray-600">Date: {new Date(date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t pt-6">
                <div className="flex justify-between text-gray-600">
                  <span>Package Price</span>
                  <span>{formatPrice(pkg.price * travelers)}</span>
                </div>
                
                {coupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Coupon Discount ({coupon.code})</span>
                    <span>-{formatPrice((pkg.price * travelers * coupon.discount) / 100)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & Fees (18%)</span>
                  <span>{formatPrice(total * 0.18)}</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total Amount</span>
                    <span>{formatPrice(total + (total * 0.18))}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full btn-primary py-4 text-lg font-semibold mt-8 flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Pay Now</span>
                    <Lock className="h-5 w-5" />
                  </>
                )}
              </button>

              <div className="mt-4 text-center text-sm text-gray-500">
                By proceeding, you agree to our Terms & Conditions
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Payment