import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { messageCM } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';

function MessageFromCm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    messageCM()
      .then(({ data }) => {
        if (data) {
          console.log(data, 'data');
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
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative w-full ">
          <div className="relative z-10 p-5">
            <motion.h2
              className="text-4xl font-bold mb-6 text-center"
              initial={{ y: '10vh', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ type: 'tween', duration: 1 }}
            >
              Message From Hon'ble Chief Minister of Odisha
            </motion.h2>

            <section className="relative  rounded-lg px-16 py-8 z-10">
              <div className="flex flex-col md:flex-row items-center md:space-x-8">
                {/* Left column with image */}
                <motion.div
                  ref={ref}
                  className="w-full md:w-2/5 mb-6 md:mb-0"
                  initial={{ x: '-20vw', opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ type: 'tween', duration: 1 }}
                >
                  <div className="text-center">
                    <img
                      loading="lazy"
                      className="mx-auto w-full max-w-[250px] transition hover:-translate-y-2"
                      src={
                        STRAPI_API_BASE_URL + data?.cm?.image?.url ||
                        'unable to load image'
                      }
                      alt={data?.cm?.name}
                    />
                  </div>
                </motion.div>

                {/* Right column with text */}
                <div className="w-full md:w-3/5 animate-fade-in-up">
                  <div className="mb-6">
                    <motion.p
                      className="text-gray-600 leading-relaxed text-lg"
                      initial={{ y: '10vh', opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ type: 'tween', duration: 1 }}
                    >
                      {data?.cm?.description || 'Unable to load description'}
                    </motion.p>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {data?.cm?.name || 'Unable to load name'}
                  </h2>

                  <h3 className="text-lg font-medium text-gray-700">
                    Hon'ble Chief Minister of Odisha
                  </h3>
                </div>
              </div>
            </section>
          </div>

          {/* SVG Wave Background */}
          <div className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 283.5 27.8"
              preserveAspectRatio="none"
              className="w-full h-full transform scale-y-[-1]"
            >
              <defs>
                <linearGradient
                  id="myGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#7c2d12" /> {/* orange-900 */}
                  <stop offset="100%" stopColor="#facc15" /> {/* yellow-500 */}
                  <stop offset="100%" stopColor="#292524" /> {/* stone-900 */}
                </linearGradient>
              </defs>

              <path
                fill="url(#myGradient)"
                stroke="transparent"
                strokeWidth="1"
                d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageFromCm;
