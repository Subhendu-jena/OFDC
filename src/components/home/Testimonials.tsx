import { Quote } from 'lucide-react';
import Slider from 'react-slick';

function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const testimonials = [
    {
      name: 'Konark',
      image: '',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
    },
    {
      name: 'Bhitarkanika',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
      image: '',
    },
    {
      name: 'Udayagiri',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
      image: '',
    },
    {
      name: 'Puri Beach',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
      image: '',
    },
    {
      name: 'Putsil',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
      image: '',
    },
    {
      name: 'Chilika',
      description:
        'I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.',
      image: '',
    },
  ];

  return (
    <div className=" w-full ">
      <div className=" w-full flex flex-col  items-center px-2 py-6">
        <p className=" text-red-500 font-semibold ">Our Testimonials</p>
        <p className=" text-gray-800 text-4xl font-bold">WHAT THEY SAY</p>
      </div>
      <div className=" w-full">
        <div className="w-full ">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="py-8">
                <div className="relative group flex items-center">
                  {/* Image Wrapper */}
                  <div className="relative w-28 z-50 h-28 flex-shrink-0 ">
                    <div
                      className="absolute left-13 top-1/2 transform -translate-y-1/2 
                      p-4 border-8 border-red-500 rounded-full "
                    >
                      <img
                        src={testimonial?.image}
                        alt={testimonial.name}
                        className="w-16 h-16 z-10 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Testimonial Box */}
                  <div className="flex flex-col gap-4 rounded-lg pr-4 pl-18 bg-white py-12  relative">
                    <div className="text-xl">{testimonial.description}</div>
                    <div className="text-xl font-semibold">
                      {testimonial.name}
                    </div>
                    <Quote className=' text-red-600 absolute bottom-4 right-4' size={80} />
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
