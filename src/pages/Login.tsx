import React, { useState } from 'react';
import { Film, Clapperboard, User, Lock, ArrowRight } from 'lucide-react';
import { paths } from '../routes/Path';
import { useNavigate } from 'react-router-dom';
import { LoginData } from '../types/global';
import { loginController } from '../config/controller';
import { toast } from 'react-toastify';
import { ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });
  const validateForm = () => {
    const errors = { email: '', password: '' };
    let isValid = true;

    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const payload = {
      identifier: formData.email,
      password: formData.password,
      rememberMe: formData.rememberMe,
    };

    loginController({ data: payload })
      .then((response) => {
        toast.success('Login successful');
        if (response?.token) {
          sessionStorage.setItem('token', response?.token);
          sessionStorage.setItem('userID', response?.user?._id);
          sessionStorage.setItem('role', response?.user?.role);
          sessionStorage.setItem('name', response?.user?.name);
          sessionStorage.setItem('email', response?.user?.email);
          sessionStorage.setItem('phoneNo', response?.user?.phoneNo);
        }
        navigate(paths.RoleBasedRedirect);
      })
      .catch((err) => {
        if (err) {
          toast.error('Login failed. Please check your credentials.');
        }
      });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-50">
      
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex  justify-center p-6 md:p-10">
        
        <div className="w-full max-w-md">
          <button
          onClick={() => navigate(paths.home)}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>
          {/* Logo and Title */}
          <div className="flex justify-center items-center space-x-2 ">
            
            <img
              src="/Logo\Logo_OFDC_Booking_Page-removebg-preview.png"
              alt="OFDC Logo"
              className=" w-auto"
            />
            {/* <h1 className="text-2xl font-bold text-gray-800">OFDC</h1> */}
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Welcome back
          </h2>
          <p className="text-gray-600 mb-4">
            Please enter your details to sign in
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your email"
                  />
                </div>
                {formErrors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your password"
                  />
                </div>
                {formErrors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {formErrors.password}
                  </p>
                )}
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href={paths.forgetPassword}
                    className="font-medium text-red-500 hover:text-red-400"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.email || !formData.password}
                style={{ backgroundColor: '#FC3C3C' }}
              >
                Sign in
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              {/* Register Link */}
              <div
                className="text-center mt-4 cursor-pointer text-red-500"
                onClick={() => navigate(paths.register)}
              >
                <span className="text-sm text-gray-600">
                  Don't have an account?{' '}
                </span>
                {/* <Link to={paths.register} className="text-sm font-medium text-red-500 hover:text-red-400"> */}
                Sign up now
                {/* </Link> */}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Animation with standard Tailwind classes */}
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

export default Login;
