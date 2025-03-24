import { ChevronRight } from 'lucide-react';
import React from 'react';
import bg from "../../assets/KalingaAssets/ezgif.com-effects.gif"
const KHeroSection: React.FC<{
  subHead1: string;
  heading: string;
  subHead2: string;
  tag: string;
}> = ({ subHead1, heading, subHead2, tag }) => {
  return (
    <>
      <div className="grid grid-cols-5 bg-gradient-to-r from-gray-900 to-black text-white">
        {/* <div className="absolute inset-0 opacity-50 bg-[url('/api/placeholder/1200/600')] bg-fixed bg-center bg-cover">wergh</div> */}
        <div className="col-span-4  container mx-auto px-12 py-8 md:pt-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-red-500 text-white px-3 py-1 text-sm rounded-full mb-4">
              {subHead1}
            </span>
            <h1 className="text-4xl md:text-[48px] font-bold mb-3 ">{heading}</h1>
            <p className="text-lg md:text-[16px] mb-4 text-gray-100">{subHead2}</p>
            <div className="flex flex-wrap gap-0">
              <a
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition-colors flex items-center gap-2"
              >
                Explore Our {tag} <ChevronRight size={18} />
              </a>
            </div>
            {/* <div className="flex flex-wrap gap-4">
              <a className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors">
                Explore Our {tag} <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div> */}
          </div>
        </div>
        <div className='pt-16'><img src={bg} alt="" /></div>
      </div>
    </>
  );
};

export default KHeroSection;
