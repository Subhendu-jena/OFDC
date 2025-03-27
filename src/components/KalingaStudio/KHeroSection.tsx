import { ChevronRight } from 'lucide-react';
import React from 'react';
import bg from '../../assets/KalingaAssets/ezgif.com-effects.gif';
const KHeroSection: React.FC<{
  subHead1: string;
  heading: string;
  subHead2: string;
  tag: string;
  vdo?: string;
  link: string;
  img?: string;
}> = ({ subHead1, heading, subHead2, tag, vdo, link, img }) => {
  return (
    <>
      <div className="relative grid grid-cols-5 h-[50vh] bg-gradient-to-r from-gray-900 to-black text-white">
        {vdo ? (
          <video
            className="absolute top-0 left-0 w-full h-[50vh]  object-fill"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src={vdo || ''}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : null}
        {img ? (
          // <div>
            <img src={img || ''} alt="" 
              className="absolute top-0 left-0 w-full h-[50vh]  object-fill"
             />
          // </div> 
        ) : null}
        <div className="relative col-span-4  container mx-auto px-12 py-8 md:pt-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-red-500 text-white px-3 py-1 text-sm rounded-full mb-4">
              {subHead1}
            </span>
            <h1
              className={`text-4xl md:text-[48px] font-bold mb-3 ${
                vdo ? 'text-red-500' : 'text-white'
              }`}
            >
              {heading}
            </h1>
            {/* <h1 className="text-4xl md:text-[48px] font-bold mb-3 ">{heading}</h1> */}
            <p className="text-lg md:text-[16px] mb-4 text-gray-100">
              {subHead2}
            </p>
            <div className="flex flex-wrap gap-0">
              <a
                href={link ? link : '#'}
                target={link ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition-colors flex items-center gap-2"
              >
                Explore Our {tag} <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
        {vdo ? null : (
          <div className="pt-16">
            <img src={bg} alt="" />
          </div>
        )}
      </div>
    </>
  );
};

export default KHeroSection;
