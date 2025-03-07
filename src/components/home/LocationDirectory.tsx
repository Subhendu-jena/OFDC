import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const LocationDirectory = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const destinations = [
    {
      title: 'Konark',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2024/12/Konark_.png',
    },
    {
      title: 'Bhitarkanika',
      image:
        'https://ofdc.octamy.com/wp-content/uploads/2024/12/Bhitarkanika_.png',
    },
    {
      title: 'Udayagiri',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2024/12/Udayagiri.png',
    },
    {
      title: 'Puri Beach',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2024/12/Puri_.png',
    },
    {
      title: 'Putsil',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2024/12/Pitsil_.png',
    },
    {
      title: 'Chilika',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2024/12/Chilika-1.png',
    },
  ];

  return (
    <div className="py-4">
      <motion.div
        className=" flex flex-col py-8 "
        initial={{ y: '10vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 1 }}
      >
        <div className="text-xl text-red-500 text-center">
          Around the Odisha
        </div>
        <div className="text-2xl text-white font-bold md:text-4xl text-center">
          LOCATION DIRECTORY
        </div>
      </motion.div>
      <motion.div
        className="w-full px-4"
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 1 }}
      >
        <Slider {...settings}>
          {destinations.map((destination, index) => (
            <div key={index} className="px-2">
              <div className="relative group overflow-hidden rounded-md">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className=" w-full h-[300px] object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white  justify-center items-center flex flex-col transition duration-500">
                  <h2 className="text-xl font-semibold group-hover:block hidden ">
                    Places In
                  </h2>
                  <h3 className="text-2xl font-bold group-hover:hidden">
                    {destination.title}
                  </h3>
                </div>
                <Link
                  to="/location-directory"
                  className="absolute inset-0 z-10"
                  aria-label={`Visit ${destination.title}`}
                ></Link>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <div className="text-center transition duration-300 group mt-8">
        <Link
          to="/location-directory"
          className="inline-flex items-center justify-center px-6 py-3 text-white font-bold rounded-full bg-gradient-to-r from-red-900/90 to-red-500/90 hover:bg-gradient-to-l transition-all duration-500"
        >
          <span>More</span>
          <span className="ml-2 group-hover:ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LocationDirectory;
