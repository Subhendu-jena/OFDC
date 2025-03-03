import { Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function LatestVideo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
  const latestShootingSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
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
    <div className=" w-full">
      <div className=" w-full flex justify-between text-2xl font-bold text-red-500 items-center px-2 py-6">
        <p>LOCATION VIDEOS</p>
        <p>LATEST SHOOTING</p>
      </div>
      <div className=" w-full flex">
        <div className="w-full sm:w-3/4">
          <div className="w-full px-4">
            <Slider {...settings}>
              {destinations.map((destination, index) => (
                <div key={index} className="px-2">
                  <div className="relative group overflow-hidden  h-[300px]">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    ></div>

                    {/* Overlay with content */}
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4 transition duration-500">
                      <h2 className="text-xl font-semibold group-hover:block hidden">
                        Places In
                      </h2>
                      <h3 className="text-2xl font-bold group-hover:hidden">
                        {destination.title}
                      </h3>
                    </div>

                    {/* Additional Text */}
                    <div className="absolute inset-x-0 bottom-0 z-10 text-xl text-white text-center bg-black/50 py-4">
                      Location Videos
                    </div>
                    <div className="w-30 h-30 flex justify-center items-center absolute right-0 bg-red-400 bottom-0 hover:scale-75 duration-200">
                      <Youtube size={40} className='text-white' />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full sm:w-1/4">
          <div className="w-full ">
            <Slider {...latestShootingSettings}>
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
                      to="/"
                      className="absolute inset-0 z-10"
                      aria-label={`Visit ${destination.title}`}
                    ></Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center px-2 py-6">
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
    </div>
  );
}

export default LatestVideo;
