import React from 'react';

const OdishaAtGlance: React.FC = () => {
  return (
    <div className="bg-gray-100  min-h-screen rounded-md pb-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-red-500 mb-8">
          About OFDC
        </h1>

        {/* Content Section */}
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
                The Odisha Film Development Corporation Ltd. (OFDC) has made significant strides over the years in promoting the Odia Film Industries. Established on 22nd April, 1976 following its incorporation as a public sector undertaking of the Government of Odisha, it has achieved milestones like setting up of Kalinga Studio which provided complete facilities for indoor and outdoor shooting, editing, dubbing, and music recordings. Such infrastructure building enhances cost-effectiveness and efficiency in Odia film production in comparison to other regional film industries such as those in Tamil Nadu and West Bengal.
              </p>
            </div>
          </section>

          {/* Subsidies and Incentives */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">
              Subsidies and Incentives
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-gray-700 leading-relaxed">
                OFDC has sanctioned subsidies and incentives to the Odia language feature films. It has also sanctioned soft loans and term loans for filmmaking, construction of theatres for the exhibition of Odia cinema in order to improve the market potentiality of Odia films and screen density.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5NMApbsPN_BF9l09GpVDj0xcSLfcZhPjIw&s"
                alt="Subsidies and Incentives"
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Film Festivals and Archives */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">
              Film Festivals and Archives
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6gCRWNdp3N10V1tWFFgGWXbmdHKe0KhVSQ&s"
                alt="Film Festivals"
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
              <p className="text-gray-700 leading-relaxed">
                OFDC has organized several film festivals, including Children’s Film Festival & Regional Film Festivals, for the betterment of the Odia film industry. It has also set up the Odia Film Archives for preserving the cinematic heritage of the state.
              </p>
            </div>
          </section>

          {/* Scholarships and Skill Development */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">
              Scholarships and Skill Development
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-gray-700 leading-relaxed">
                In order to encourage the talents of the industry and to boost skill development, students continuing their education in various wings of film production in different institutions of the country are being provided with scholarships.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELIzLn9jAmtvAEjJ4u_511PuSlvTfeR9gBw&s"
                alt="Scholarships"
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OdishaAtGlance;