import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { equipmentDirectory } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';
import { useFontSize } from './FontSizeContext';
function EqipmentDirectory() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { fontSize } = useFontSize();
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

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    equipmentDirectory()
      .then(({ data }) => {
        if (data) {
          setData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const card = data[0]?.equipmentDirectory || [];
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className=" w-full"
          style={{
            background:
              'url(https://ofdc.octamy.com/wp-content/uploads/2020/09/bg-map.png)',
            objectFit: 'contain',
          }}
          ref={ref}
        >
          <motion.div
            initial={{ y: '10vh', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1 }}
            className=" w-full flex flex-col  items-center px-2 py-6"
          >
            <p className=" text-gray-800 text-4xl font-bold" style={{ fontSize: `${fontSize + 20}px` }}>
              EQUIPMENT DIRECTORY
            </p>
          </motion.div>
          <div className=" w-full flex">
            <div className="w-full px-4">
              <Slider {...settings}>
                {card.map((destination: any, index: number) => (
                  <div key={index} className="px-2 ">
                    <div className="relative group overflow-hidden h-[300px] rounded-xl">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 "
                        style={{
                          backgroundImage: `url(${STRAPI_API_BASE_URL}${destination?.image?.url})`,
                        }}
                      ></div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                      {/* Additional Text */}
                      <div className="absolute inset-x-0 bottom-0 z-10 text-xl py-4 text-center bg-white  group-hover:block hidden duration-500 ">
                        <button className="ml-14 bg-red-500 rounded-full py-2 px-4 duration-300 text-white absolute mt-[-35px]">
                          →
                        </button>

                        <p className=" text-black text-4xl py-8 font-bold" style={{ fontSize: `${fontSize + 20}px` }}>
                          {destination?.title}
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
      )}
    </>
  );
}

export default EqipmentDirectory;
