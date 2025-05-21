import React, { useState } from 'react';
import {
  Clapperboard,
  User,
  Lock,
  Mail,
  ArrowRight,
  PhoneCall,
} from 'lucide-react';
import { paths } from '../routes/Path';
import { Link, useNavigate } from 'react-router-dom';
import { FormData, signupData } from '../types/global';
import { signUpController } from '../config/controller';
import { toast } from 'react-toastify';
import { ArrowLeft } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { Eye } from 'lucide-react';

const RegisterPage: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNo: '',
    termsAccepted: false,
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNo: '',
    termsAccepted: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
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
  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      password: '',
      phoneNo: '',
      confirmPassword: '',
      termsAccepted: false,
    };
    let isValid = true;

    const name = formData.name?.trim() || '';
    const email = formData.email?.trim() || '';
    const password = formData.password?.trim() || '';
    const phone = formData.phoneNo?.trim() || '';

    // Name validation
    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!password) {
      errors.password = 'is required';
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      errors.password =
        'Password must be at least 12 characters, include an uppercase letter, a number, and a special character';
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'mismatch';
      isValid = false;
    }

    // Phone validation
    if (!phone) {
      errors.phoneNo = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phoneNo = 'Phone number must be exactly 10 digits';
      isValid = false;
    }
    if (!formData.termsAccepted) {
      errors.termsAccepted = true;
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (!formData.termsAccepted) {
      toast.error('You must accept the terms and conditions');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpController({
      data: {
        ...formData,
      },
    } as { data: signupData })
      .then((res) => {
        if (res) {
          toast.success('Signup Successful');
          navigate(paths.login);
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(error?.response?.data?.error ?? 'Something went wrong');
        }
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-full w-full bg-gray-50">
      {/* Left side - Registration Form */}
      <div className="w-full md:w-1/2 flex  justify-center p-2 ">
        <div className="w-full max-w-md">
          <button
            onClick={() => navigate(paths.home)}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>
          {/* Logo and Title */}
          <div className="flex items-center justify-center w-full space-x-2">
            <img
              src="/Logo\Logo_OFDC_Booking_Page-removebg-preview.png"
              alt="OFDC Logo"
              className=" w-auto md:h-52"
            />
            {/* <h1 className="text-2xl font-bold text-gray-800">OFDC</h1> */}
          </div>

          <h2 className="text-[28px] font-bold text-gray-900">
            Create an account
          </h2>
          {/* <p className="text-gray-600 mb-2">Join our movie community today</p> */}

          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              {/* Username Field */}
              <div>
                <label
                  htmlFor="name"
                  className=" text-sm font-medium text-gray-700 mb-1 flex items-center justify-between"
                >
                  <div>
                    {' '}
                    Full name <span className="text-red-500">*</span>
                  </div>
                  {formErrors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 border placeholder:text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your fullname"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className=" text-sm font-medium text-gray-700 mb-1 flex items-center justify-between"
                >
                  <div>
                    {' '}
                    Email <span className="text-red-500">*</span>
                  </div>{' '}
                  {formErrors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {formErrors.email}
                    </p>
                  )}
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
                    className="pl-10 w-full py-2 placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phoneNo"
                  className=" text-sm font-medium text-gray-700 mb-1 flex items-center justify-between"
                >
                  <div>
                    Phone Number <span className="text-red-500">*</span>
                  </div>
                  {formErrors.phoneNo && (
                    <p className="text-sm text-red-500 mt-1">
                      {formErrors.phoneNo}
                    </p>
                  )}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneCall className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    id="phoneNo"
                    name="phoneNo"
                    onWheel={(e) => e.currentTarget.blur()}
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {' '}
                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className=" text-sm font-medium text-gray-700 mb-1 flex items-center justify-between"
                  >
                    <div>
                      {' '}
                      Password <span className="text-red-500">*</span>
                    </div>
                    {formErrors.password && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.password}
                      </p>
                    )}
                  </label>
                  {/* <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 w-full placeholder:text-sm py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Create a password"
                    />
                  </div> */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 pr-10 w-full placeholder:text-sm py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                {/* Confirm Password Field */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className=" text-sm font-medium text-gray-700 mb-1 flex items-center justify-between"
                  >
                    <div>
                      {' '}
                      Confirm Password <span className="text-red-500">*</span>
                    </div>
                    {formErrors.confirmPassword && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.confirmPassword}
                      </p>
                    )}
                  </label>
                  {/* <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10 w-full placeholder:text-sm py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Re-enter password"
                    />
                  </div> */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10 pr-10 w-full placeholder:text-sm py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Re-enter password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
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
                  className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="termsAccepted"
                  className="ml-2 w-full text-sm text-gray-700 flex items-center justify-between"
                >
                  <div>
                    I accept the{' '}
                    <a href="#" className="text-red-500 hover:text-red-400">
                      Terms and Conditions{' '}
                      <span className="text-red-500">*</span>
                    </a>
                  </div>
                  <div>
                    {' '}
                    {formErrors.termsAccepted && (
                      <p className="text-sm text-red-500 mt-1">Please Accept</p>
                    )}
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-2 border border-transparent rounded-lg outline-none border-none shadow-sm text-white bg-red-500 hover:bg-red-600  transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                // disabled={!formData.email || !formData.password}
                style={{ backgroundColor: '#FC3C3C' }}
              >
                Create account
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              {/* Login Link */}
              <div className="text-center">
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
        className="hidden md:flex w-1/2 min-h-screen h-full items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#FC3C3C' }}
      >
        <div className="relative w-full min-h-screen h-full flex items-center justify-center">
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
              Step into the SpotLight
            </h2>
            <p className="text-[18px] text-white opacity-80 max-w-md mb-8">
              Create your account and join OFDC to access seamless booking &
              exclusive theatre slots for your cinematic projects.
            </p>

            {/* Feature icons */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-white text-sm">See</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <p className="text-white text-sm">Sense</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-white text-sm">Shape</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
