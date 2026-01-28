import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const user = params.get('user');

    if (token && user) {
      try {
        // Save to localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', decodeURIComponent(user));
        
        // Redirect to home page
        navigate('/');
        window.location.reload();
      } catch (error) {
        console.error('Error handling auth callback:', error);
        navigate('/login');
      }
    } else {
      const error = params.get('error');
      if (error) {
        alert(`Authentication error: ${error}`);
      }
      navigate('/login');
    }
  }, [location, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saffron-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
};

export default AuthCallback;