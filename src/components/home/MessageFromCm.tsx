import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { messageCM } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';
// import curve from '../../../public/curve.png';
import { useFontSize } from './FontSizeContext';
function MessageFromCm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const { fontSize } = useFontSize();
  useEffect(() => {
    setLoading(true);
    messageCM()
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
        <div className="relative w-full ">
          <div className="relative z-10 p-5">
            <motion.div
              className="text-4xl font-bold mb-6 text-center"
              initial={{ y: '10vh', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ type: 'tween', duration: 1 }}
            >
              <h1  style={{ fontSize: `${fontSize+14}px` }}>
              Message From Hon'ble Chief Minister of Odisha
            </h1>
            </motion.div>

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
                      className="text-gray-600 leading-relaxed text-sm lg:text-lg"
                      initial={{ y: '10vh', opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ type: 'tween', duration: 1 }}
                      style={{ fontSize: `${fontSize + 2}px` }} >
                      {data?.cm?.description || 'Unable to load description'}
                    </motion.p>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-2"  style={{ fontSize: `${fontSize + 4}px` }}>
                    {data?.cm?.title || 'Unable to load name'}
                  </h2>

                  <h3 className="text-lg font-medium text-gray-700"  style={{ fontSize: `${fontSize + 2}px` }}>
                    Hon'ble Chief Minister of Odisha
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageFromCm;
