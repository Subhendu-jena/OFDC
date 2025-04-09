import { Dot } from 'lucide-react';
import React from 'react';

const KeyPriorities:React.FC = () => {
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

  return (
   <div className='m-5'> <div className='m-5 p-5 mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
   <h2 className="text-2xl font-bold mb-2">
      Archives Insight
      </h2>
  {data.map((locations) => (
    <div className="flex ">
      <Dot size={20} className="text-black" />
      <p className="text-gray-500 text-sm ">{locations}</p>
    </div>
  ))}
</div></div>
  );
};

export default KeyPriorities;
