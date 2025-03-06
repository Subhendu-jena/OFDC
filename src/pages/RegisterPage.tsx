import React, { useState } from 'react';
import {
  Clapperboard,
  User,
  Lock,
  Mail,
  ListFilter,
  ArrowRight,
} from 'lucide-react';
import { paths } from '../routes/Path';
import { Link } from 'react-router-dom';

// TypeScript interfaces
interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  termsAccepted: boolean;
}

const RegisterPage: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'viewer',
    termsAccepted: false,
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log('Registration form submitted:', formData);
    // Add your registration logic here
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-50">
      {/* Left side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/Logo\OFDC Logo Black.png"
              alt="OFDC Logo"
              className="h-12 md:h-20 w-auto"
            />
            <h1 className="text-2xl font-bold text-gray-800">OFDC</h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            Create an account
          </h2>
          <p className="text-gray-600 mb-4">Join our movie community today</p>

          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              {/* Username Field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Choose a username"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
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
                    required
                    className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Role
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ListFilter className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                  >
                    <option value="viewer">Movie Viewer</option>
                    <option value="critic">Movie Critic</option>
                    <option value="creator">Content Creator</option>
                  </select>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="termsAccepted"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I accept the{' '}
                  <a href="#" className="text-red-500 hover:text-red-400">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
                style={{ backgroundColor: '#FC3C3C' }}
              >
                Create account
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              {/* Login Link */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-600">
                  Already have an account?{' '}
                </span>
                <Link
                  to={paths.login}
                  className="text-sm font-medium text-red-500 hover:text-red-400"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Animation with standard Tailwind classes */}
      <div
        className="hidden md:flex w-1/2 items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#FC3C3C' }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Animated elements */}
          <div className="absolute w-full h-full opacity-10">
            {/* Movie reel pattern */}
            <div className="absolute top-10 left-10 animate-spin animate-duration-7000">
              <svg
                className="w-24 h-24 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <circle cx="12" cy="2" r="2" fill="black" />
                <circle cx="12" cy="22" r="2" fill="black" />
                <circle cx="2" cy="12" r="2" fill="black" />
                <circle cx="22" cy="12" r="2" fill="black" />
                <circle cx="19.07" cy="19.07" r="2" fill="black" />
                <circle cx="4.93" cy="19.07" r="2" fill="black" />
                <circle cx="19.07" cy="4.93" r="2" fill="black" />
                <circle cx="4.93" cy="4.93" r="2" fill="black" />
              </svg>
            </div>
            <div className="absolute bottom-10 right-10 animate-spin animate-duration-10000">
              <svg
                className="w-32 h-32 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <circle cx="12" cy="2" r="2" fill="black" />
                <circle cx="12" cy="22" r="2" fill="black" />
                <circle cx="2" cy="12" r="2" fill="black" />
                <circle cx="22" cy="12" r="2" fill="black" />
                <circle cx="19.07" cy="19.07" r="2" fill="black" />
                <circle cx="4.93" cy="19.07" r="2" fill="black" />
                <circle cx="19.07" cy="4.93" r="2" fill="black" />
                <circle cx="4.93" cy="4.93" r="2" fill="black" />
              </svg>
            </div>
          </div>

          {/* Popcorn icon */}
          <div className="absolute bottom-20 left-20 animate-bounce">
            <svg
              className="w-16 h-16 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 11H5a1 1 0 01-1-1V8a1 1 0 011-1h2v4zm3 0V7h2v4h-2zm3 0V7h2v4h-2zm3 0V7h2a1 1 0 011 1v2a1 1 0 01-1 1h-2z" />
              <path d="M17 13H7l-5 9h20l-5-9z" />
            </svg>
          </div>

          <div className="absolute top-20 right-1/4 animate-pulse">
            <Clapperboard className="h-16 w-16 text-white" />
          </div>

          {/* Content */}
          <div className="z-10 text-center p-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Join Our Movie Community
            </h2>
            <p className="text-xl text-white opacity-80 max-w-md mb-8">
              Create your account to rate films, join discussions, and get
              personalized recommendations.
            </p>

            {/* Feature icons */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-white text-sm">Write Reviews</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <p className="text-white text-sm">Rate Movies</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-white text-sm">Join Discussions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
