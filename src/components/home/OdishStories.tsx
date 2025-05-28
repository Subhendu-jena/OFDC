import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { odishaStories } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';
import { useFontSize } from './FontSizeContext';
import Slider from 'react-slick';

function OdishStories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
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
  const { fontSize } = useFontSize();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    odishaStories()
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
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="w-full bg-white"
          style={{
            background:
              'url(https://ofdc.octamy.com/wp-content/uploads/2020/09/bg-map.png)',
            objectFit: 'cover',
          }}
        >
          <div className="w-full">
            <div className="w-full rounded-lg overflow-hidden">
              {/* Heading Section */}
              <motion.div
                className="w-full py-8"
                initial={{ y: '10vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
              >
                <div className="w-full">
                  <div className="w-full">
                    <div
                      className={`text-center transform transition-transform duration-1000 ${true ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                      <div className="inline-block mb-3">
                        <div
                          className="text-[#FC3C3C] font-semibold "
                          style={{ fontSize: `${fontSize + 4}px` }}
                        >
                          <span>ODISHA</span>
                        </div>
                      </div>
                      <h2
                        className="text-2xl md:text-4xl font-bold text-gray-800 "
                        style={{ fontSize: `${fontSize + 20}px` }}
                      >
                        <span>Odisha: Stories Beyond The Lens</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Stories  Section */}
              <motion.div
                className="w-full py-8 transform transition-all duration-1000 translate-x-0 opacity-100"
                initial={{ x: '90vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
              >
                <div className="container mx-auto">
                  {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> */}
                  
                  <Slider {...settings}>
                    {data.map((story: any) => (
                      <div
                        key={story.id}
                        className="w-full hover:shadow-lg transition-shadow duration-300 px-2"
                      >
                        <div className="text-center">
                          <div className="relative overflow-hidden rounded-lg">
                            <img
                              className="w-full h-auto transform hover:scale-125 transition-transform duration-4000 max-h-[300px]"
                              src={
                                STRAPI_API_BASE_URL + story.images[0]?.url ||
                                STRAPI_API_BASE_URL + story.images[0]?.url
                              }
                              alt={story.url}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  {/* </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OdishStories;
