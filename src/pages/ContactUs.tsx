import { Mail, MapPin, PhoneCall } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { contactUs } from '../config/controller';

const ContactUs: React.FC = () => {
  // const width = '100%',
  //   height = '500px';
  // const containerStyle = {
  //   width,
  //   height,
  // };

  // const center = {
  //   lat: 20.475777247435698, 
  //   lng: 85.87380835582297,
  // };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    await contactUs({ data: formData });
    console.log('Form Data Submitted:', formData);
  };
  // const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  // const [loading, setLoading] = useState(true);
  // const handleMapLoad = () => {
  //   console.log('Google Map Loaded');
  //   setLoading(false);
  // };
  
  return (
    <div className="w-full">
      {/* Header Section */}
      <section
        className="text-light text-center bg-cover bg-no-repeat relative flex justify-center items-center h-[280px]"
        style={{
          backgroundImage:
            "url('https://ofdc.octamy.com/wp-content/uploads/2020/09/breadcrumb.jpg')",
        }}
      >
        <div className="mx-auto pt-4">
          <h2 className="heading-title text-white text-5xl font-bold mb-2">
            CONTACT
          </h2>
          <ol className="flex justify-center space-x-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-gray-300">
                Home -
              </Link>
            </li>
            <li className="text-gray-300">Contact</li>
          </ol>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-200 pt-16 pb-8 w-full flex justify-center">
        <div className="flex md:flex-row max-w-5xl flex-col gap-4">
          {/* Address Card */}
          <div className="bg-white/70 flex flex-col justify-center items-center rounded-md group relative hover:border-red-400 hover:border-b-2 w-[350px] h-[200px]">
            <div className="bg-red-400 rounded-full p-4 mt-[-180px] absolute">
              <MapPin
                className="text-white group-hover:animate-pulse"
                size={50}
              />
            </div>
            <div className="text-2xl font-semibold pb-3">Visit Us Anytime</div>
            <div className="text-xl">Odisha, India</div>
          </div>

          {/* Email Card */}
          <div className="bg-white/70 flex flex-col justify-center items-center rounded-md group relative border-red-400 border-b-2 w-[350px] h-[200px]">
            <div className="bg-red-400 rounded-full p-4 mt-[-180px] absolute">
              <Mail className="text-white animate-pulse" size={50} />
            </div>
            <div className="text-2xl font-semibold pb-3">Send an Email</div>
            <div className="text-xl">filmodisha@gmail.com</div>
          </div>

          {/* Phone Card */}
          <div className="bg-white/70 flex flex-col justify-center items-center rounded-md group relative hover:border-red-400 hover:border-b-2 w-[350px] h-[200px]">
            <div className="bg-red-400 rounded-full p-4 mt-[-180px] absolute">
              <PhoneCall
                className="text-white group-hover:animate-pulse"
                size={50}
              />
            </div>
            <div className="text-2xl font-semibold pb-3">Call Center</div>
            <div className="text-xl">+91 0000000000</div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
     <div className='grid grid-cols-2'> <section className="py-12 bg-white flex justify-center">
        <div className="w-full max-w-3xl bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-6">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className=" p-12">
        {/* <div className="w-full h-[500px]">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <span className="text-lg font-semibold">Loading Map...</span>
            </div>
          )}
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={9}
              onLoad={handleMapLoad}
            />
          </LoadScript>
        </div> */}
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.7477523235925!2d85.873862!3d20.4755511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a191275d382521f%3A0x229b980f193231ef!2sChalachitra%20Bhawan!5e0!3m2!1sen!2sin!4v1745414819968!5m2!1sen!2sin" width="800" height="600" style={{border:'0' }}  loading="lazy" ></iframe>
      </section></div>
    </div>
  );
};

export default ContactUs;
