// import { Archive, Search } from 'lucide-react';
// import { Globe } from 'lucide-react';
// import { Share2 } from 'lucide-react';
// import { FileText } from 'lucide-react';
import React from 'react';
import bg from '../../assets/pexels-tima-miroshnichenko-7206405.jpg';
import { motion } from 'framer-motion';
const KeyPriorities: React.FC = () => {
  const data = [
    'Trace, Acquire and Preserve the Cinematic Heritage of Odisha as well as a representative collection of Odia cinema for posterity',
    'Classify and document data pertaining to Odia films',
    'Undertake and encourage research on cinema',
    "Serve as a hub for the state's film culture's diffusion",
    'Promote Odia cinema across the globe',

    "Being the state custodian for preservation of cinematic heritage &  committed to acquisition, preservation, restoration and dissemination of Odisha's socio-cultural heritage",
    'This heritage may be in the form of film including celluloid films, still photographs, wall posters, song booklets, posters, lobby cards, documentaries and VHS tapes',
    'Odia Film Archives often collaborates with institutions to not only promote Odia cinema but also to bring world cinema to Odisha in the form of film festivals, seminars and workshops',
  ];
  // const icons = [<Archive />, <FileText />, <Search />, <Share2 />, <Globe />];
  return (
    <div className="p-5 bg-white">
      {' '}
      <div className="m-5 p-5 mx-auto rounded-lg  overflow-hidden">
        <h2 className="text-4xl font-bold mb-4">Key priorities</h2>
        {/* {data.map((locations) => (
    <div className="flex ">
      <Dot size={20} className="text-black" />
      <p className="text-gray-500 text-sm ">{locations}</p>
    </div>
  ))} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* {data.map((locations) => (
            <>
              {' '}
              <img src={bg} alt="" className="absolute p-0 " />
              <div className=" relative rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div  className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              "icon"
              </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Heritage Promotion
                </h3>
                <p className="text-gray-600 mb-4">Promote Odia cinema across the globe {locations}</p>
              </div>
            </>
         ))} */}
          {data.map((location, index) => (
            <motion.div
              key={index}
              className="relative rounded-br-2xl rounded-tl-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow bg-cover bg-center"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl transition-opacity duration-300 hover:opacity-30"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-200 mb-3">
                  {' '}
                  Heritage Promotion
                </h3>
                <p className="text-gray-300 mb-4">{location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyPriorities;
