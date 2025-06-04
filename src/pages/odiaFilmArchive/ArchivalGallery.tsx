import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { archivalGallery } from '../../config/strapiController';
type GalleryItem = {
  posterImage: { url: string };
  heading: string;
  description: string;
  images: { url: string }[];
};
  const GalleryCard: React.FC<GalleryItem>  = ({
   posterImage,
  heading,
  description,
  images,
  }) => {
    const [preview, setPreview] = useState(false);
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
      <>
        <div className="relative w-[300px] h-max bg-white rounded-tl-[2rem] rounded-br-[2rem] shadow-md   border border-red-200">
          {/* Green shadow corner effect */}
          <div className="absolute bottom-0 right-0 w-full h-full rounded-tl-[9rem] rounded-br-[2rem] bg-red-300 -z-10 translate-x-2 translate-y-2"></div>
          <div onClick={() => setPreview(true)}>
            <img
              src={STRAPI_API_BASE_URL + posterImage?.url}
              alt="Gallery"
              className="w-full h-48 object-cover rounded-tl-[2rem]"
            />
          </div>
          {/* Main content */}

          <div className="p-4 text-center">
            <h2 className="text-[16px] font-semibold"> {heading} </h2>
            <p className="text-gray-600 text-[12px] line-clamp-3 text-justify"> {description} </p>
          </div>
        </div>
        {preview && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="relative w-full max-w-4xl mx-auto p-4">
              {/* Close Button */}
              <button
                onClick={() => setPreview(false)}
                className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 z-50"
              >
                ✕
              </button>

              {/* Image Slider */}
              <Slider {...settings}>
                {images && images.length > 0 ? (
                images.map((image, index) => (
                    <div key={index} className="w-full">
                      <img
                        src={STRAPI_API_BASE_URL + image?.url}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-[80vh] object-contain rounded-lg"
                      />
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    No images available to show.
                  </div>
                )}
              </Slider>
            </div>
          </div>
        )}
      </>
    );
  };
const ArchivalGallery: React.FC = () => {
  const [data, setData] = useState<GalleryItem[]>([]);

  useEffect(() => {
    archivalGallery()
      .then((response: any) => {
        const archiveEntry = response.data[0];
        if (archiveEntry?.archivalGallery) {
          setData(archiveEntry.archivalGallery);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch archive data:', error);
      });
  }, []);
  return (
    <>
      {/* <ComingSoon/> */}
      <div><h2 className="text-4xl font-bold text-red-600 border-b pb-2 bg-white py-2">Archival Gallery</h2></div>
      <div className='bg-white -z-40 relative'><div className="min-h-screen grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {data.map((item, idx) => (
          <GalleryCard
            key={idx}
            posterImage={item.posterImage}
            heading={item.heading}
            description={item.description}
            images={item.images}
          />
        ))}
      </div></div>
    </>
  );
};

export default ArchivalGallery;
