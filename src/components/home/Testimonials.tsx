import { Quote } from 'lucide-react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const testimonials = [
    {
      name: 'Konark',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2020/10/team-4.jpg',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
    },
    {
      name: 'Bhitarkanika',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2020/10/team-4.jpg',
    },
    {
      name: 'Udayagiri',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2020/10/team-4.jpg',
    },
    {
      name: 'Puri Beach',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2020/10/team-4.jpg',
    },
    {
      name: 'Putsil',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2020/10/team-4.jpg',
    },
    {
      name: 'Chilika',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
      image: 'https://ofdc.octamy.com/wp-content/uploads/2020/10/team-4.jpg',
    },
  ];

  return (
    <div className=" w-full " ref={ref}>
      <motion.div
        className=" w-full flex flex-col  items-center px-2 py-6"
        initial={{ y: '10vh', opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: 'tween', duration: 1 }}
      >
        <p className=" text-red-500 font-semibold ">Our Testimonials</p>
        <p className=" text-gray-800 text-4xl font-bold">WHAT THEY SAY</p>
      </motion.div>
      <div className=" w-full">
        <div className="w-full ">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="py-8">
                <div className="relative group flex items-center">
                  {/* Image Wrapper */}
                  <div
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 
                     border-8 p-2 border-red-500 rounded-full bg-white z-10 "
                  >
                    <img
                      src={testimonial?.image}
                      alt={testimonial.name}
                      className="  rounded-full w-20 h-20 z-10 "
                    />
                  </div>
                  {/* Testimonial Box */}
                  <div className="flex flex-col gap-4 rounded-lg pr-4 mx-16 bg-white pl-20 py-8  relative">
                    <div className="text-xl">{testimonial.description}</div>
                    <div className="text-xl font-semibold">
                      {testimonial.name}
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
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
