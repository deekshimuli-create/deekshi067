import { useEffect } from 'react';
import { useAuth } from '@getmocha/users-service/react';
import { useNavigate } from 'react-router';
import { Loader2 } from 'lucide-react';

export default function AuthCallbackPage() {
  const { exchangeCodeForSessionToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        await exchangeCodeForSessionToken();
        // Redirect to dashboard after successful login
        navigate('/dashboard');
      } catch (error) {
        console.error('Authentication failed:', error);
        // Redirect to home with error state
        navigate('/?error=auth_failed');
      }
    };

    handleCallback();
  }, [exchangeCodeForSessionToken, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md">
        <div className="flex justify-center mb-6">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Completing Sign In...
        </h2>
        <p className="text-gray-600">
          Please wait while we set up your account.
        </p>
      </div>
    </div>
  );
}
