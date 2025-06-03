import React, { useState } from 'react';
import Slider from 'react-slick';

const ArchivalGallery: React.FC = () => {
  const GalleryCard = ({
    imageSrc,
    title,
    description,
  }: {
    imageSrc: string;
    title: string;
    description: string;
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
        <div className="relative w-[300px] h-max bg-white rounded-tl-[2rem] rounded-br-[2rem] shadow-md  border border-green-200">
          {/* Green shadow corner effect */}
          <div className="absolute bottom-0 right-0 w-full h-full rounded-tl-[9rem] rounded-br-[2rem] bg-red-500 -z-10 translate-x-2 translate-y-2"></div>
          <div onClick={() => setPreview(true)}>
            <img
              src={imageSrc}
              alt="Gallery"
              className="w-full h-48 object-cover rounded-tl-[2rem]"
            />
          </div>
          {/* Main content */}

          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold"> {title} </h2>
            <p className="text-gray-600 text-sm"> {description} </p>
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
                {/* {item?.images && item.images.length > 0 ? (
                  item.images.map((image: any, index: number) => (
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
                )} */}
              </Slider>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <>
      {/* <ComingSoon/> */}
      <div className="min-h-screen grid grid-cols-4 gap-4  top-0">
        <GalleryCard
          imageSrc="https://cdn.pixabay.com/photo/2025/05/17/16/56/bunny-9605962_1280.jpg"
          title="Description here"
          description="Paragraph here"
        />
      </div>
    </>
  );
};

export default ArchivalGallery;
