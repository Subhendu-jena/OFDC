import { Archive, Search } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { FileText } from 'lucide-react';
import React from 'react';
import bg from '../../assets/cycle.jpg';
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
  const icons = [<Archive />, <FileText />, <Search />, <Share2 />, <Globe />];
  return (
    <div className="m-5">
      {' '}
      <div className="m-5 p-5 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-bold mb-2">Archives Insight</h2>
        {/* {data.map((locations) => (
    <div className="flex ">
      <Dot size={20} className="text-black" />
      <p className="text-gray-500 text-sm ">{locations}</p>
    </div>
  ))} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* {data.map((locations) => ( */}
            <>
              {' '}
              <img src={bg} alt="" className="absolute " />
              <div className=" relative rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                {/* <div  className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              "icon"
              </div> */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Heritage Promotion
                </h3>
                <p className="text-gray-600 mb-4">Promote Odia cinema across the globe</p>
              </div>
            </>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default KeyPriorities;
