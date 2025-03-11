import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { paths } from '../../routes/Path';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const slides = [
    {
      image: 'https://c.ndtvimg.com/2024-07/qrfq0ui_rath-yatra_625x300_07_July_24.jpeg',
    },
    {
      image: 'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=',
    },
    {
      image: 'https://static.vecteezy.com/system/resources/thumbnails/023/790/661/small_2x/beautiful-lake-under-the-mountains-ai-generated-photo.jpg',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
  };
 const navigate = useNavigate()
  return (
    <div className=' w-full'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[100vh] md:h-[75vh]">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
             {/* Dark overlay to reduce brightness */}
             <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Content */}
            <div
              data-slide={index}
              className="absolute inset-0 flex flex-col items-center justify-center  text-white mt-[140px] z-50 animate-fadeInUp"
            >
              <h3 className="text-2xl md:text-5xl font-bold mb-6 text-center">
                FILM MAKING IS A MIRACLE
              </h3>
              <p className="text-lg md:text-xl mb-8 text-center">
                Collaborate with the scenic beauty of Odisha.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="px-6 py-3 font-bold rounded-xl bg-orange-500 hover:bg-orange-400 text-white transition-all duration-300"
                onClick={()=> navigate(paths.bookingForm)}
                >
                  BOOK LOCATION NOW
                </button>
                <button className="px-6 py-3 font-bold rounded-xl bg-orange-500 hover:bg-orange-400 text-white   transition-all duration-300">
                  LOCATION BOOKING GUIDELINE
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
