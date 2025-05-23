import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Wifi,
  Coffee,
  Camera,
  ParkingMeter as Parking,
  Utensils,
  Users,
  CalendarRange,
} from 'lucide-react';
import Slider from 'react-slick';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { ArrowLeft } from 'lucide-react';
import { useFontSize } from '../home/FontSizeContext';

interface Image {
  url: string;
  width: number;
  height: number;
  formats: {
    small: {
      url: string;
    };
  };
}

interface LocationCard {
  title: string;
  subTitle: string | null;
  location: string | null;
  phone: string | null;
  isOpen: boolean;
  images: Image[];
}
// const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 824,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  arrows: true,
};
interface LocationDetailsProps {
  locationData?: LocationCard;
  setSelectedProduct?:any;
}
const LocationDetails: React.FC<LocationDetailsProps> = ({ locationData,setSelectedProduct }) => {
  const { fontSize } = useFontSize();
  const activeLocation = locationData;
  const amenities = [
    { icon: Wifi, name: 'Free Wi-Fi' },
    { icon: Coffee, name: 'Cafeteria' },
    { icon: Camera, name: 'Photography Allowed' },
    { icon: Parking, name: 'Parking Available' },
    { icon: Utensils, name: 'Restaurant' },
    { icon: Users, name: 'Tour Guide' },
  ];

  // Placeholder images for demonstration
  // const demoImages = [
  //   'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80',
  //   'https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?auto=format&fit=crop&q=80',
  // ];
  console.log(activeLocation?.images[0]?.url, 'activeLocation?.images');
  return (
    <div className="min-h-screen bg-gray-50 pt-2">
      <div className='p-3 bg-red-700 text-white w-fit rounded-3xl' onClick={() => setSelectedProduct(null)}><ArrowLeft /></div>
      {/* Image Carousel */}
      {/* <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="aspect-video max-h-[600px]"
          >
          {demoImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${activeLocation.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
                />
                </SwiperSlide>
                ))}
                </Swiper> */}
      <div className="container mx-auto px-4 py-2">
        <div className="w-full bg-black ">
          <Slider
            {...settings}
            className=" flex justify-center items-center w-full"
          >
            {activeLocation?.images.map((image: any, index: number) => (
              <div className='h-[50vh] w-full' key={index}>
                {' '}
                <img
                  src={STRAPI_API_BASE_URL + image?.url}
                  key={index}
                  // alt={title}
                  className=" w-full h-[100vh]  object-fit transition-transform duration-500  "
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Location Details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Title and Status */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900" style={{ fontSize: `${fontSize + 14}px` }}>
                {activeLocation?.title}
              </h2>
              {activeLocation?.subTitle && (
                <p className="text-lg text-gray-600 mt-1" style={{ fontSize: `${fontSize + 2}px` }}>
                  {activeLocation?.subTitle}
                </p>
              )}
            </div>
            <div
              className={`px-4 py-2 rounded-full ${activeLocation?.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            >
              {activeLocation?.isOpen ? 'Open' : 'Closed'}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mb-8">
            {activeLocation?.location && (
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-600" />
                <span className="text-gray-700">{activeLocation?.location}</span>
              </div>
            )}
            {activeLocation?.phone && (
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="text-gray-700">{activeLocation?.phone}</span>
              </div>
            )}

            {/* Book Now Button */}
            <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
              <button
                className="w-full md:w-auto px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                onClick={() => alert('Booking functionality to be implemented')}
              >
                <CalendarRange className="h-5 w-5" />
                <span>Book Now</span>
              </button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - About & Amenities */}
            <div className="col-span-3 space-y-8">
              {/* About Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  About {activeLocation?.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {activeLocation?.title} is one of Odisha's most iconic
                  destinations, known for its rich cultural heritage and
                  historical significance. Visitors can explore the magnificent
                  architecture, learn about the local history, and experience
                  the vibrant culture of Odisha.
                </p>
              </div>

              {/* Amenities Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <amenity.icon className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Visiting Hours */}
            <div className="col-span-2 space-y-8">
              <h3 className="text-xl font-semibold mb-4">Visiting Hours</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                {[
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ].map((day) => (
                  <div
                    key={day}
                    className="flex items-center justify-between py-2 border-b last:border-b-0"
                  >
                    <span className="text-gray-600">{day}</span>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-red-600" />
                      <span className="text-gray-900">6:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
