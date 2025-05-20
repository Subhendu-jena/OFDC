import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { paths } from '../../routes/Path';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { herosection } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';
import { useFontSize } from './FontSizeContext';

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();
  const { fontSize } = useFontSize();
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
                <h3
                  // className={`font-bold mb-6 text-center text-[${fontSize + 32}px]`}
                  className="font-bold mb-6 text-center"
                  style={{ fontSize: `${fontSize + 32}px` }}
                >
                  {data[0]?.heading || 'Welcome to Odisha Film City'}
                </h3>
                <p
                  className="mb-8 text-center"
                  style={{ fontSize: `${fontSize + 4}px` }}
                >
                  {data[0]?.subHeading}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <button
                    className="px-6 py-3 font-bold rounded-xl bg-orange-500 hover:bg-orange-400 text-white transition-all duration-300"
                    onClick={() => navigate(paths.userDashboard)}
                  >
                    BOOK FOR PREVIEW SCREEN
                  </button>
                    <a
                      href={STRAPI_API_BASE_URL + data[0]?.guidelines?.url}
                      // download // tells the browser “download, don’t just navigate”
                      target="_blank" // open in a new tab (optional, since download often auto-saves)
                      rel="noopener noreferrer"
                      download

                    >
                  <button className="px-6 py-3 font-bold rounded-xl bg-orange-500 hover:bg-orange-400 text-white transition-all duration-300 cursor-pointer">
                      LOCATION BOOKING GUIDELINE
                  </button>
                    </a>
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
