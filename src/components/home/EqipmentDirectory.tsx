import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function EqipmentDirectory() {
  const settings = {
    dots: true,
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
      name: 'Konark',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2024/12/paar_4k.jpg',
      role: 'Actor',
    },
    {
      name: 'Bhitarkanika',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2024/12/m60.jpg',
      role: 'Actor',
    },
    {
      name: 'Udayagiri',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2024/12/m8.jpg',
      role: 'Actor',
    },
    {
      name: 'Puri Beach',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2024/12/m90.jpg',
      role: 'Actor',
    },
  ];

  return (
    <div
      className=" w-full"
      style={{
        background:
          'url(https://ofdc.octamy.com/wp-content/uploads/2020/09/bg-map.png)',
        objectFit: 'contain',
      }}
    >
      <div className=" w-full flex flex-col  items-center px-2 py-6">
        <p className=" text-gray-800 text-4xl font-bold">EQUIPMENT DIRECTORY</p>
      </div>
      <div className=" w-full flex">
        <div className="w-full px-4">
          <Slider {...settings}>
            {destinations.map((destination, index) => (
              <div key={index} className="px-2 ">
                <div className="relative group overflow-hidden h-[300px]">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 "
                    style={{ backgroundImage: `url(${destination.image})` }}
                  ></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                  {/* Additional Text */}
                  <div className="absolute inset-x-0 bottom-0 z-10 text-xl py-4 text-center bg-white  group-hover:block hidden duration-500 ">
                    <button className="ml-14 bg-red-500 rounded-full py-2 px-4 duration-300 text-white absolute mt-[-35px]">
                      →
                    </button>

                    <p className=" text-black text-4xl py-8 font-bold">
                      {destination.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="w-full flex justify-center items-center px-2 py-6">
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

export default EqipmentDirectory;
