import React, { useEffect, useState } from 'react';
import { leaderships } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';
import { useFontSize } from '../../components/home/FontSizeContext';
const Leadership: React.FC = () => {
 const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const { fontSize } = useFontSize();
  
  useEffect(() => {
    setLoading(true);
    leaderships()
      .then(({ data }) => {
        if (data) {
          setData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
   <>
   {loading ? (<Loader/>):( <div className="bg-white min-h-screen py-2">
      {/* Header Section */}
      <div className="px-12 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-4" style={{ fontSize: `${fontSize + 32}px` }}>
          Leadership
        </h1>
        <p className="text-lg text-gray-600 w-full leading-relaxed text-justify" style={{ fontSize: `${fontSize + 2}px` }}>
          {data[0]?.mainDescription?.description}
        </p>
      </div>
      {/* chairman Grid */}
      <div className=" py-4">
        <div className=" text-2xl font-semibold pl-12 py-3" style={{ fontSize: `${fontSize + 8}px` }}>Chairman</div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-6">
         {data[0] && data[0].chairman.map((Chairman: any) =>( <Card
            name={Chairman.name}
            position={Chairman.designation}
            image={Chairman.image}
          />))}
        </div>
      </div>
      {/* managing Director Grid */}
      <div className=" py-4">
        <div className=" text-2xl font-semibold pl-12 py-3" style={{ fontSize: `${fontSize + 8}px` }}>
          Managing Director
        </div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-6">
          {data[0] &&
            data[0].managingDirector.map((managingDirector: any) => (
              <Card
                name={managingDirector.name}
                position={managingDirector.designation}
                image={managingDirector?.imageUrl && ( STRAPI_API_BASE_URL +managingDirector?.imageUrl?.url)}
              />
            ))}
        </div>
      </div>
      {/* nominee Grid */}
      <div className=" py-4">
        <div className=" text-2xl font-semibold pl-12 py-3" style={{ fontSize: `${fontSize + 8}px` }}>
          Govt. Nominee Directors
        </div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-6">
          {data[0] &&
            data[0].nomineeDirectors.map(( nom: any) => (
              <Card
                // key={i}
                name={nom.name}
                position={nom.designation}
                image={nom?.imageUrl && ( STRAPI_API_BASE_URL +nom?.imageUrl?.url)}
              />
            ))}
        </div>
      </div>
      {/* independentDirectors Grid */}
      <div className=" py-4">
        <div className=" text-2xl font-semibold pl-12 py-3" style={{ fontSize: `${fontSize + 8}px` }}>
          Independent Directors
        </div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-6">
          {data[0] && data[0].independentDirector.map((nom: any) => (
            <Card
              name={nom.name}
              position={nom.designation}
              image={nom?.imageUrl && ( STRAPI_API_BASE_URL +nom?.imageUrl?.url)}
            />
          ))}
        </div>
      </div>
    </div>)}</>
  );
};

export default Leadership;

const Card = ({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) => {
  const { fontSize } = useFontSize();
  return (
    <div className="bg-white rounded-sm shadow-md text-center transition transform hover:scale-105  w-[255px]">
      <img
        src={
          image ||
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }
        alt="DP"
        className=" w-full h-50 rounded-t-4xl"
      />

      <p className="text-lg pt-2 font-semibold px-2 text-gray-800" style={{ fontSize: `${fontSize + 2}px` }}>{name}</p>
      <p className="text-sm text-gray-500 pb-8 pt-2 px-4" style={{ fontSize: `${fontSize -2}px` }}>{position}</p>
    </div>
  );
};
