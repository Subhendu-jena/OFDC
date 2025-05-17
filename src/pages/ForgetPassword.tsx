import { Mail } from 'lucide-react';
import { Clapperboard } from 'lucide-react';
import { Film } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../config/controller';
import { toast } from 'react-toastify';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }
    //    forgotPassword({data:{email:email}});
    //    .then((res) => {
    //     console.log(res);
    //     setSuccess(true);
    //     setTimeout(() => {
    //       navigate('/');
    //     }, 2000);
    //    });
    //    .catch((err) => {
    //     console.log(err);
    //    });
    //    if (error) {
    //      setError('');
    try {
      const res = await forgotPassword({ data: { email:email } });
      console.log(res);
      if (res.message) {
      setSuccess(true);
      toast.success('Reset link sent! Please check your email.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);}
    } catch (err) {
      console.error(err);
      const errorMessage = (err as any).response?.data?.error;
      setError(errorMessage);
    }
  };   

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-50">
      {' '}
      <div className=" w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full">
          <button
            onClick={() => navigate('/login')}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
              Forgot Your Password?
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Enter your email address and we'll send you a link to reset your
              password
            </p>

            {success ? (
              <div className="bg-green-50 text-green-800 rounded-lg p-4 text-center">
                Reset link sent! Please check your email. Redirecting...
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-800 rounded-lg p-4 text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Send Reset Link
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div
        className="md:flex md:w-1/2 w-full min-h-[400px] items-center justify-center "
        style={{ backgroundColor: '#FC3C3C' }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main background element with pulse animation */}
          <div className="absolute animate-pulse opacity-20">
            <Clapperboard className="h-64 w-64 text-white" />
          </div>

          {/* Floating film reels using standard Tailwind animations */}
          <div className="absolute top-1/4 left-1/4 animate-bounce transition-transform duration-1000">
            <Film className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-pulse transition-all duration-1000">
            <Film className="h-24 w-24 text-white" />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-ping opacity-75">
            <Film className="h-20 w-20 text-white" />
          </div>

          {/* Movie strip animation using spin */}
          <div className="absolute top-20 right-20 animate-spin duration-3000 opacity-30">
            <svg
              className="w-32 h-32 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M12 2V22" stroke="currentColor" strokeWidth="2" />
              <path
                d="M19.0711 4.92893L4.92893 19.0711"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M22 12H2" stroke="currentColor" strokeWidth="2" />
              <path
                d="M19.0711 19.0711L4.92893 4.92893"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="z-10 text-center p-10">
            <h2 className="text-4xl font-bold text-white mb-4 animate-pulse">
              Your Theatre Awaits
            </h2>
            <p className="text-[18px] text-white opacity-80 max-w-md">
              Login to cue your next screen-where your vision lights up the big
              screen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
