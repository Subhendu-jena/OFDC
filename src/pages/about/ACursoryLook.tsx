import React, { useEffect, useState } from 'react';
import { aCursoryLook } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';

const ACursoryLook: React.FC = () => {
  // const content = [
  //   {
  //     title: 'Subsidies and Incentives',
  //     description:
  //       'OFDC has sanctioned subsidies and incentives to the Odia language feature films. It has also sanctioned soft loans and term loans for filmmaking, construction of theatres for the exhibition of Odia cinema in order to improve the market potentiality of Odia films and screen density.',
  //   },
  //   {
  //     title: 'Film Festivals and Archives',
  //     description:
  //       'OFDC has organized several film festivals, including Children’s Film Festival & Regional Film Festivals, for the betterment of the Odia film industry. It has also set up the Odia Film Archives for preserving the cinematic heritage of the state.',
  //   },
  //   {
  //     title: 'Scholarships and Skill Development',
  //     description:
  //       'In order to encourage the talents of the industry and to boost skill development, students continuing their education in various wings of film production in different institutions of the country are being provided with scholarships.',
  //   },
  // ];
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    aCursoryLook()
      .then(({ data }) => {
        if (data) {
          console.log(data, 'data');
          setData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const card = data[0]?.cursoryLookCard;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" bg-white min-h-screen  pb-24">
          <div className="max-w-7xl mx-auto px-2">
            <section className=" shadow-lg rounded-lg p-8">
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-red-500 mb-4">
                  A Cursory Look
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={
                      data[0]?.image &&
                      STRAPI_API_BASE_URL + data[0]?.image?.url
                    }
                    alt="Kalinga Studio"
                    className="w-full md:w-1/2 rounded-lg shadow-md"
                  />
                  <p className="text-gray-700 h-full leading-relaxed text-justify">
                    {data[0]?.description}
                  </p>
                </div>
              </section>
            </section>
            <section className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-6 mt-24 gap-y-24 px-6 ">
              {card?.map((data: any, i: number) => (
                <div
                  key={i}
                  className="relative transition duration-300 hover:scale-105 bg-white rounded-br-[50%] shadow-lg px-4"
                >
                  <div
                    className="absolute left-4 bg-orange-500 text-white text-center w-full pt-6 pb-4 -mt-10 font-semibold  shadow-black text-sm  shadow-2xl pl-4"
                    style={{
                      clipPath: 'polygon(0% 0%, 100% 30%, 98% 100%, 10% 100%)',
                    }}
                  >
                    {data?.cardHead}
                  </div>
                  <div className="mt-4 pb-8 pt-8 px-2 relative">
                    <p className=" relative text-[13px] text-justify z-10 pr-6">
                      {data?.cardBody}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ACursoryLook;
