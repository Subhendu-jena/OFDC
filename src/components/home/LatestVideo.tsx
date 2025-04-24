import { Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { locationDirectory } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';

function LatestVideo() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
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

  useEffect(() => {
    setLoading(true);
    locationDirectory()
      .then(({ data }) => {
        if (data) {
          setData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const card = data[0]?.locationsCard || [];
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" w-full" ref={ref}>
          <div
            className=" w-full flex justify-between text-2xl font-bold text-red-500 items-center px-2 py-6"
            style={{
              background:
                'url(https://ofdc.octamy.com/wp-content/uploads/2020/09/bg-map.png)',
              objectFit: 'contain',
            }}
          >
            <motion.p
              initial={{ y: '10vh', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ type: 'tween', duration: 1 }}
            >
              LOCATION VIDEOS
            </motion.p>
            <motion.p
              initial={{ y: '10vh', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ type: 'tween', duration: 1 }}
            >
              LATEST SHOOTING
            </motion.p>
          </div>
          <div className=" w-full flex md:flex-row flex-col">
            <div className="w-full sm:w-3/4">
              <div className="w-full px-4">
                <Slider {...settings}>
                  {card.map((destination: any, index: number) => (
                    <div key={index} className="px-2">
                      <div className="relative group overflow-hidden  h-[300px] rounded-xl">
                        {/* Background Image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                          style={{
                            backgroundImage: `url(${STRAPI_API_BASE_URL}${destination?.images[0]?.url})`,
                          }}
                        ></div>

                        {/* Overlay with content */}
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4 transition duration-500">
                          <h2 className="text-xl font-semibold group-hover:block hidden">
                            Places In
                          </h2>
                          <h3 className="text-2xl font-bold group-hover:hidden">
                            {destination?.title}
                          </h3>
                        </div>

                        {/* Additional Text */}
                        <div className="absolute inset-x-0 bottom-0 z-10 text-xl text-white text-center bg-black/50 py-4">
                          Location Videos
                        </div>
                        <div className="w-30 h-30 flex justify-center items-center absolute right-0 bg-red-400 bottom-0 hover:scale-75 duration-200">
                          <Youtube size={40} className="text-white" />
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
                  {card.map((destination: any, index: number) => (
                    <div key={index} className="px-2">
                      <div className="relative group overflow-hidden rounded-xl">
                        <img
                          src={
                            STRAPI_API_BASE_URL + destination?.images[0]?.url ||
                            STRAPI_API_BASE_URL + destination?.images[0]?.url
                          }
                          alt={destination?.title}
                          className=" w-full h-[300px] object-cover transition-transform duration-500"
                        />
                        <Link
                          to="/"
                          className="absolute inset-0 z-10"
                          aria-label={`Visit ${destination?.title}`}
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
      )}
    </>
  );
}

export default LatestVideo;
