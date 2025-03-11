import { Antenna, CircleCheckBig, Eye, Film, Video } from 'lucide-react';

const OurVisionMision = () => {
  const objectives = [
    { id: 1, text: 'To promote and support quality filmmaking in Odisha.' },
    {
      id: 2,
      text: 'To provide financial assistance, subsidies, and incentives to filmmakers.',
    },
    {
      id: 3,
      text: 'To develop world-class infrastructure for film production.',
    },
    {
      id: 4,
      text: 'To encourage new talent and skill development in the film industry.',
    },
    {
      id: 5,
      text: 'To position Odisha as a preferred destination for national and international filmmakers.',
    },
    { id: 6, text: 'To preserve the cinematic heritage of the state.' },
    {
      id: 7,
      text: 'To promote Odia cinema at national and international film festivals.',
    },
    {
      id: 8,
      text: 'To foster collaborations between filmmakers, artists, and technicians to elevate Odia cinema to global standards.',
    },
    {
      id: 9,
      text: "To encourage regional filmmakers and preserve Odisha's cultural identity through cinema.",
    },
    {
      id: 10,
      text: 'To accommodate screen density in the roots and corner of the state by setting up Block level Multipurpose Cine theatres in each block headquarters of the state.',
    },
    {
      id: 11,
      text: 'To establish a multiplex at Chalachitra Bhawan Complex to address the difficulties for release of Odia Films.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section with Film Background */}
      <div className="relative overflow-hidden bg-black h-96">
        {/* Background overlay with brand color */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        {/* Background image (film reel pattern) */}
        <div className="absolute inset-0 z-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="filmPattern"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="50" cy="15" r="8" fill="white" />
              <circle cx="50" cy="85" r="8" fill="white" />
              <circle cx="15" cy="50" r="8" fill="white" />
              <circle cx="85" cy="50" r="8" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#filmPattern)" />
          </svg>
        </div>

        {/* Content overlay */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="mb-6">
            <Film size={70} className=" text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Odisha Film Development Corporation
          </h1>
          <div
            className="w-24 h-1 bg-orange-500 mb-6"
            style={{ backgroundColor: '#F47216' }}
          ></div>
          <p className="text-xl text-white max-w-3xl">
            Building a vibrant cinematic future for Odisha
          </p>
        </div>
      </div>

      {/* Content Tabs Section */}
      <div className="max-w-6xl mx-auto  -mt-12 px-4 relative z-30">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div
              className="md:w-1/2 p-10 border-b md:border-b-0 md:border-r border-gray-200"
              style={{ borderColor: 'rgba(244, 114, 22, 0.3)' }}
            >
              <div className="flex items-center mb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: '#F47216' }}
                >
                  <Antenna size={40} className=" text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800">
                  Our Mission
                </h2>
              </div>

              <ul className="space-y-4 text-gray-700">
                {objectives.map((item) => (
                  <li key={item.id} className="flex items-start gap-2">
                    <div>
                    <CircleCheckBig size={30} className="text-red-400 mr-2" />
                    </div>
                    <span className="text-md">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-8 pb-2 pt-4 border-t border-gray-200"
                style={{ borderColor: 'rgba(244, 114, 22, 0.3)' }}
              >
                <p className="text-md text-gray-700 italic">
                  Through its initiatives, OFDC remains committed to nurturing a
                  vibrant and sustainable film industry in Odisha.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 p-10">
              <div className="flex items-center mb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: '#F47216' }}
                >
                  <Eye size={40} className=" text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800">Our Vision</h2>
              </div>

              <div className="prose prose-lg text-gray-700 max-w-none">
                <div className="relative pb-8 mb-8">
                  <div
                    className="absolute left-0 h-full w-px bg-gradient-to-b from-orange-500 to-transparent"
                    style={{ backgroundColor: '#F47216' }}
                  ></div>
                  <div className="pl-8">
                    <p className="mb-4 text-md">
                      Odisha Film Development Corporation (OFDC) envisions
                      transforming Odisha into a dynamic and thriving hub for
                      cinema, where creativity, culture, and technology converge
                      to elevate the state's film industry to national and
                      international prominence. Our goal is to nurture a
                      sustainable cinematic ecosystem that supports filmmakers,
                      artists, and technicians while preserving and promoting
                      Odisha's rich cultural heritage.
                    </p>
                  </div>
                </div>

                <div className="relative pb-8 mb-8">
                  <div
                    className="absolute left-0 h-full w-px bg-gradient-to-b from-orange-500 to-transparent"
                    style={{ backgroundColor: '#F47216' }}
                  ></div>
                  <div className="pl-8">
                    <p className="mb-4 text-md">
                      We aspire to create a film-friendly environment by
                      developing world-class infrastructure, fostering
                      innovation, and providing strategic financial support. By
                      encouraging diverse storytelling and high-quality
                      productions, we aim to enhance the global recognition of
                      Odia cinema. Our vision includes making Odisha a preferred
                      destination for filmmakers by offering state-of-the-art
                      studios, post-production facilities, architectural
                      grandeur and scenic locations that attract both national
                      and international productions.
                    </p>
                  </div>
                </div>

                <div className="relative pb-8 mb-8">
                  <div
                    className="absolute left-0 h-full w-px bg-gradient-to-b from-orange-500 to-transparent"
                    style={{ backgroundColor: '#F47216' }}
                  ></div>
                  <div className="pl-8">
                    <p className="mb-4 text-md">
                      OFDC is committed to empowering new and emerging talents
                      through skill development programmes, training workshops,
                      and collaborations with industry experts. We strive to
                      make filmmaking more accessible and inclusive, ensuring
                      that regional voices are heard on global platforms.
                    </p>
                  </div>
                </div>

                <div className="relative pb-8 mb-8">
                  <div
                    className="absolute left-0 h-full w-px bg-gradient-to-b from-orange-500 to-transparent"
                    style={{ backgroundColor: '#F47216' }}
                  ></div>
                  <div className="pl-8">
                    <p className="mb-4 text-md">
                      Through digital transformation and technological
                      advancements, we seek to modernize film production,
                      distribution, and exhibition, making Odia cinema more
                      competitive in the evolving entertainment landscape. We
                      also aim to promote Odisha's film industry through
                      participation in global film festivals, co-production
                      opportunities, and strategic partnerships.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className="absolute left-0 h-full w-px bg-gradient-to-b from-orange-500 to-transparent"
                    style={{ backgroundColor: '#F47216' }}
                  ></div>
                  <div className="pl-8">
                    <p className="mb-4 text-md">
                      By upholding artistic excellence and innovation, OFDC's
                      vision is to position Odisha as a centre for cinematic
                      excellence, where filmmakers find inspiration, audiences
                      celebrate diverse stories, and the legacy of Odia cinema
                      continues to flourish for generations to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Film Elements */}
      <div className="mt-4 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Video size={40} />
        </div>

        {/* CTA Card */}
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-2xl py-12 px-8 text-center relative z-10"
            style={{ backgroundColor: '#F47216' }}
          >
            <div className="mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us in Building Odisha's Cinematic Future
            </h2>
            <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-10">
              Together, we can elevate Odia cinema to new heights of artistic
              excellence and global recognition.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-full text-md shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              Connect With OFDC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVisionMision;
