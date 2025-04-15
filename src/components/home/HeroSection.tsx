import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { paths } from '../../routes/Path';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { herosection } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    herosection()
      .then(({ data }) => {
        if (data) {
          setData(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching hero section:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const images = data[0]?.heroCaraousel || [];

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

  return (
    <div className="w-full">
      {loading ? (
        <Loader />
      ) : (
        <Slider {...settings}>
          {images.map((slide: any, index: number) => (
            <div key={index} className="relative h-[100vh] md:h-[75vh]">
              <img
                src={
                  STRAPI_API_BASE_URL + slide.url ||
                  STRAPI_API_BASE_URL + slide.url
                }
                alt={slide.url}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div
                data-slide={index}
                className="absolute inset-0 flex flex-col items-center justify-center text-white mt-[140px] z-50 animate-fadeInUp"
              >
                <h3 className="text-2xl md:text-5xl font-bold mb-6 text-center">
                  {data[0]?.heading}
                </h3>
                <p className="text-lg md:text-xl mb-8 text-center">
                  {data[0]?.subHeading}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <button
                    className="px-6 py-3 font-bold rounded-xl bg-orange-500 hover:bg-orange-400 text-white transition-all duration-300"
                    onClick={() => navigate(paths.userDashboard)}
                  >
                    BOOK FOR PREVIEW SCREEN
                  </button>
                  <button className="px-6 py-3 font-bold rounded-xl bg-orange-500 hover:bg-orange-400 text-white transition-all duration-300">
                    LOCATION BOOKING GUIDELINE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default HeroSection;
