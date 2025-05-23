import { ChevronRight, Film } from 'lucide-react';
import React from 'react';
// import runningBoy from '../../assets/KalingaAssets/ezgif.com-effects.gif';

const KHeroSection: React.FC<{
  subHead1: string;
  heading: string;
  subHead2: string;
  tag: string;
  vdo?: string;
  link: string;
  img?: string;
  user?: boolean;
}> = ({ subHead1, heading, subHead2, tag, vdo, link, img, user }) => {
  return (
    <div className="w-full">
      {/* Hero Section - Fixed height header */}
      <div className="fixed top-0 left-0 w-full h-[50vh] flex items-center justify-center z-10">
        {/* Background Layer */}
        {user ? (
          <div className="absolute inset-0 bg-[url('/3.jpeg')] bg-cover bg-center opacity-80" />
        ) : vdo ? (
          <>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={vdo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black opacity-40" />
          </>
        ) : img ? (
          <>
            <img
              src={img}
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Text Content */}
        <div className="relative z-20 mt-20 container mx-auto text-center px-4">
          {user ? (
            <>
             <div className='flex justify-center '> <Film size={50} className="text-white mb-4" /></div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {heading}
              </h1>
            </>
          ) : (
            <div className="max-w-3xl mx-auto">
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
              <p className="text-lg md:text-[16px] mb-4 text-gray-100">
                {subHead2}
              </p>
              <a
                href={link || '#'}
                target={link ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition-colors flex items-center justify-center gap-2 mx-auto w-fit"
              >
                Explore Our {tag} <ChevronRight size={18} />
              </a>
            </div>
          )}
        </div>

        {/* Optional Animation */}
        {/* {!user && !vdo && (
          <div className="absolute bottom-0 right-0 z-20 p-4">
            <img src={runningBoy} alt="Running boy" className="w-40 md:w-60" />
          </div>
        )} */}
      </div>

      {/* Push content down if needed */}
      <div className="pt-[50vh]" />
    </div>
  );
};

export default KHeroSection;
