import React from 'react';

const OdishaAtGlance: React.FC = () => {
  const content = [
    {
      title: 'Subsidies and Incentives',
      description:
        'OFDC has sanctioned subsidies and incentives to the Odia language feature films. It has also sanctioned soft loans and term loans for filmmaking, construction of theatres for the exhibition of Odia cinema in order to improve the market potentiality of Odia films and screen density.',
    },
    {
      title: 'Film Festivals and Archives',
      description:
        'OFDC has organized several film festivals, including Children’s Film Festival & Regional Film Festivals, for the betterment of the Odia film industry. It has also set up the Odia Film Archives for preserving the cinematic heritage of the state.',
    },
    {
      title: 'Scholarships and Skill Development',
      description:
        'In order to encourage the talents of the industry and to boost skill development, students continuing their education in various wings of film production in different institutions of the country are being provided with scholarships.',
    },
  ];
  return (
    <div className="bg-gray-100  min-h-screen  pb-24">
      <div className="max-w-6xl mx-auto px-2">
        <div className="bg-white shadow-lg rounded-lg p-8">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">
              A Cursory Look
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/sambad-english/media/post_banners/wp-content/uploads/2023/10/kalinga-studio-750x430-1.jpg"
                alt="Kalinga Studio"
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
              <p className="text-gray-700 leading-relaxed">
                The Odisha Film Development Corporation Ltd. (OFDC) has made
                significant strides over the years in promoting the Odia Film
                Industries. Established on 22nd April, 1976 following its
                incorporation as a public sector undertaking of the Government
                of Odisha, it has achieved milestones like setting up of Kalinga
                Studio which provided complete facilities for indoor and outdoor
                shooting, editing, dubbing, and music recordings. Such
                infrastructure building enhances cost-effectiveness and
                efficiency in Odia film production in comparison to other
                regional film industries such as those in Tamil Nadu and West
                Bengal.
              </p>
            </div>
          </section>
        </div>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-6 mt-24 gap-y-24 px-6 ">
          {content.map((data, i) => (
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
                {data.title}
              </div>
              <div className="mt-4 pb-8 pt-8 px-2 relative">
                <p className=" relative text-[13px] z-10 pr-6">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OdishaAtGlance;
