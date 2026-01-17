import { X, Mail, User as UserIcon, Lock, Globe, Facebook, Instagram, Twitter, Github } from 'lucide-react'
import { useState } from 'react'

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true)

  if (!isOpen) return null

  const socialButtons = [
    { icon: Facebook, label: 'Facebook', color: 'blue', bg: 'bg-blue-50', hover: 'hover:bg-blue-100' },
    { icon: Instagram, label: 'Instagram', color: 'pink', bg: 'bg-pink-50', hover: 'hover:bg-pink-100' },
    { icon: Twitter, label: 'Twitter', color: 'sky', bg: 'bg-sky-50', hover: 'hover:bg-sky-100' },
    { icon: Github, label: 'GitHub', color: 'gray', bg: 'bg-gray-800', hover: 'hover:bg-gray-900', text: 'text-white' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Animated Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Animated Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 animate-slideUp">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header with Branding */}
        <div className="pt-12 px-8 pb-8">
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-saffron-400 to-saffron-600 rounded-full blur-sm opacity-50"></div>
              <Globe className="relative h-14 w-14 text-saffron-500" />
              <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                <UserIcon className="h-3 w-3 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome Back!' : 'Join Trip.trekindia'}
            </h2>
            <p className="text-gray-600 text-sm text-center">
              {isLogin ? 'Sign in to continue your Indian journey' : 'Create account to explore Incredible India'}
            </p>
          </div>

          {/* Social Login Grid */}
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {socialButtons.map(({ icon: Icon, label, color, bg, hover, text = `text-${color}-600` }) => (
                <button
                  key={label}
                  className={`flex items-center justify-center gap-2 px-4 py-3 ${bg} ${hover} ${text} rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative bg-white px-4">
                <span className="text-sm text-gray-500 bg-white px-2">Or continue with</span>
              </div>
            </div>

            {/* Google Signup Button (Prominent) */}
            <div className="mb-6">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-medium">Sign up with Google</span>
              </button>
            </div>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-5">
            {!isLogin && (
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative group">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-saffron-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all group-hover:border-gray-400"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-saffron-500 transition-colors" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all group-hover:border-gray-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-saffron-500 transition-colors" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all group-hover:border-gray-400"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" />
                    <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center transition-colors peer-checked:bg-saffron-500 peer-checked:border-saffron-500">
                      <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-sm text-saffron-600 hover:text-saffron-700 font-medium transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-medium rounded-lg hover:from-saffron-600 hover:to-saffron-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle between login/signup */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-saffron-600 hover:text-saffron-700 font-medium transition-colors"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50/50 px-8 py-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            By continuing, you agree to our{' '}
            <a href="#" className="text-saffron-600 hover:text-saffron-700 transition-colors">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-saffron-600 hover:text-saffron-700 transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginModal