import HeroSection from '../components/home/HeroSection';

function Home() {
  const stories = [
    {
      id: 1,
      image:
        'https://ofdc.octamy.com/wp-content/uploads/2020/09/New-Project-2.png',
      alt: 'Odisha Story 1',
    },
    {
      id: 2,
      image:
        'https://ofdc.octamy.com/wp-content/uploads/2020/09/New-Project-3.png',
      alt: 'Odisha Story 2',
    },
    {
      id: 3,
      image:
        'https://ofdc.octamy.com/wp-content/uploads/2020/09/New-Project-9.png',
      alt: 'Odisha Story 3',
    },
    {
      id: 4,
      image:
        'https://ofdc.octamy.com/wp-content/uploads/2020/09/New-Project-4.png',
      alt: 'Odisha Story 4',
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <section>
        <HeroSection />
      </section>
      {/* Latest News */}
      <section className=" flex flex-col md:flex-row justify-between -mt-2">
        <button className=" w-full md:w-[15%] px-4 py-3 text-white font-bold bg-[#0B0035] text-lg">
          Latest News
        </button>
        <div className="w-full md:w-[85%] justify-between h-18 flex flex-col ">
          <div className="bg-[#F47216] h-[80%] items-center flex overflow-hidden">
            {' '}
            <div className=" whitespace-nowrap text-white font-semibold animate-marquee">
              Slider text
            </div>
          </div>
          <div className="h-[20%] bg-[#FC3C3C]"></div>
        </div>
      </section>

      <section
        className="w-full bg-white bg-no-repeat bg-left-top relative"
        style={{ backgroundImage: "url('/api/placeholder/1200/800')" }}
      >
        <div className="container mx-auto px-4">
          <div className="w-full rounded-lg overflow-hidden">
            {/* Heading Section */}
            <div className="w-full py-8">
              <div className="container mx-auto">
                <div className="w-full">
                  <div
                    className={`text-center transform transition-transform duration-1000 ${true ? 'translate-x-0' : '-translate-x-full'}`}
                  >
                    <div className="inline-block mb-3">
                      <div className="text-[#FC3C3C] font-semibold text-2xl">
                        <span>ODISHA</span>
                      </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 ">
                      <span>Odisha: Stories Beyond The Lens</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/* Stories Slider Section */}
            <div className="w-full py-8 transform transition-all duration-1000 translate-x-0 opacity-100">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {stories.map((story) => (
                    <div
                      key={story.id}
                      className="w-full hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="text-center">
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            className="w-full h-auto transform hover:scale-125 transition-transform duration-4000 min-h-[300px]"
                            src={story.image}
                            alt={story.alt}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto relative z-10 flex">
        <div className="w-full">
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-6 text-center animate-fade-in-up">
              Message From Hon'ble Chief Minister of Odisha
            </h2>

            <section className=" rounded-lg px-16">
              <div className="flex flex-col md:flex-row items-center md:space-x-8">
                {/* Left column with image */}
                <div className="w-full md:w-2/5 mb-6 md:mb-0 animate-fade-in-left">
                  <div className="text-center">
                    <img
                      loading="lazy"
                      className=" mx-auto w-full max-w-[250px] duration-1000 transition-all hover:animate-bounce"
                      src="https://ofdc.octamy.com/wp-content/uploads/2024/12/shrimohanchaaranmajhi.png"
                      alt="Shri Mohan Charan Majhi"
                    />
                  </div>
                </div>

                {/* Right column with text */}
                <div className="w-full md:w-3/5 animate-fade-in-up">
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Over the years, OFDC has played a crucial role in the
                      evolution of Odia cinema, offering a range of services and
                      initiatives aimed at enhancing the quality and reach of
                      regional films. To further its mission, OFDC is now
                      embarking on the design and development of a bilingual web
                      portal that will serve as a dynamic platform for managing
                      and disseminating all its content and services.
                    </p>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    SHRI MOHAN CHARAN MAJHI
                  </h2>

                  <h3 className="text-lg font-medium text-gray-700">
                    Hon'ble Chief Minister of Odisha
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
