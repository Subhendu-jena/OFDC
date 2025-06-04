import { Quote } from 'lucide-react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { testimonialsApi } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';
import { useFontSize } from './FontSizeContext';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { useSelector } from 'react-redux';
function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
 function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e3342f', // Tailwind red-600
        borderRadius: '50%',
        height: '20px',
        width: '20px',
        cursor: 'pointer',
        zIndex: 2,
        right: '10px',
      }}
      onClick={onClick}
    >
      <ChevronRight color="white" size={20} />
    </div>
  );
}

// Custom Prev Arrow
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e3342f', // Tailwind green-600
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 2,
        left: '10px',
      }}
      onClick={onClick}
    >
      <ChevronLeft color="white" size={20} />
    </div>
  );
}
  const { fontSize } = useFontSize();
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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
  const locale = useSelector((state: any) => state.language.locale);

  useEffect(() => {
    setLoading(true);
    testimonialsApi(locale)
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
  }, [locale]);
  const card = data[0]?.testimonials || [];
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" w-full " ref={ref}>
          <motion.div
            className=" w-full flex flex-col  items-center px-2 py-6"
            initial={{ y: '10vh', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'tween', duration: 1 }}
          >
            <p
              className=" text-red-500 font-semibold "
              style={{ fontSize: `${fontSize}px` }}
            >
             {locale === 'en' ? "Our Testimonials" : "ଆମର ପ୍ରଶଂସାପତ୍ର"}
            </p>
            <p
              className=" text-gray-800 text-4xl font-bold"
              style={{ fontSize: `${fontSize + 20}px` }}
            >
             {locale === 'en' ? "WHAT THEY SAY" : "ସେମାନେ କଣ କୁହନ୍ତି"}
            </p>
          </motion.div>
          <div className="w-full p-2">
            <Slider {...settings}>
              {/* {card.map((testimonial: any, index: number) => (
                <div key={index} className="py-8">
                  <div className="relative group flex items-center">
                    <div
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 
                   border-8 p-2 border-red-500 rounded-full bg-white z-10 "
                    >
                      <img
                        src={
                          STRAPI_API_BASE_URL + testimonial?.image?.url ||
                          STRAPI_API_BASE_URL + testimonial?.image
                        }
                        alt={testimonial.name}
                        className="  rounded-full w-20 h-20 z-10 "
                      />
                    </div>
                    <div className="flex flex-col gap-4 rounded-lg pr-4 mx-16 bg-white pl-20 py-8  relative">
                      <div className="text-xl" style={{ fontSize: `${fontSize + 4}px` }}>{testimonial.description}</div>
                      <div className="text-xl font-semibold" style={{ fontSize: `${fontSize + 4}px` }}>
                        {testimonial?.title}
                      </div>
                      <Quote
                        className=" text-red-600 absolute bottom-4 right-4"
                        size={80}
                      />
                      <div
                        className="absolute left-1/5 bottom-0 transform -translate-x-1/2 translate-y-full 
              w-0 h-0 border-l-32 border-r-32 border-t-32 border-t-white border-l-transparent border-r-transparent"
                      ></div>
                    </div>
                  </div>
                </div>
              ))} */}
              {card.map((testimonial: any, index: number) => (
                <div className="p-2">
                  <div className="max-w-md mx-auto h-[400px] rounded-2xl overflow-hidden" key={index}>
                    {/* Header Image */}
                    <div className=" relative h-40 w-full bg-gray-100 ">
                      <img
                        src={
                          STRAPI_API_BASE_URL + testimonial?.image?.url ||
                          STRAPI_API_BASE_URL + testimonial?.image?.url
                        }
                        alt="Professional headshot of Michael"
                        className="w-full h-full object-center "
                      />
                    </div>

                    {/* Content */}
                      <div className=" absolute flex justify-start mt-[-25px] ml-4 mb-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    <div className="p-6 bg-white pt-8 ">
                      {/* Quote Icon */}

                      {/* Quote Text */}
                      <blockquote className="text-gray-700 text-[14px] leading-relaxed mb-6 line-clamp-5  hover:line-clamp-5 hover:overflow-auto  z-100">
                        {testimonial.description}
                      </blockquote>

                      {/* Attribution */}
                      <div className="border-t border-gray-100 ">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {testimonial?.title}
                        </h3>
                        <p className="text-gray-500 text-sm italic">
                          {testimonial?.designation || 'Designation'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}

export default Testimonials;
