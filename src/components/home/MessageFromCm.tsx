import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function MessageFromCm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="relative w-full pb-16">
      <div
        className="relative z-10 p-5"
      >
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
                  src="https://ofdc.octamy.com/wp-content/uploads/2024/12/shrimohanchaaranmajhi.png"
                  alt="Shri Mohan Charan Majhi"
                />
              </div>
            </motion.div>

            {/* Right column with text */}
            <div className="w-full md:w-3/5 animate-fade-in-up">
              <div className="mb-6">
                <motion.p
                  className="text-gray-600 leading-relaxed text-lg"
                  initial={{ y: '10vh', opacity: 0 }}
                  animate={inView?{ y: 0, opacity: 1 }:{}}
                  transition={{ type: 'tween', duration: 1 }}
                >
                  Over the years, OFDC has played a crucial role in the
                  evolution of Odia cinema, offering a range of services and
                  initiatives aimed at enhancing the quality and reach of
                  regional films. To further its mission, OFDC is now embarking
                  on the design and development of a bilingual web portal that
                  will serve as a dynamic platform for managing and
                  disseminating all its content and services.
                </motion.p>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-2">
                SHRI MOHAN CHARAN MAJHI
              </h2>

              <h3 className="text-lg font-medium text-gray-700">
                Hon'ble Chief Minister of Odisha
              </h3>
            </div>
          </div>
        </section>
      </div>

      {/* SVG Wave Background */}
      
    </div>
  );
}

export default MessageFromCm;
