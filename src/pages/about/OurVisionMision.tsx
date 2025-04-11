import { BrainCircuit, CheckCheck, Clapperboard, Eye, FileVideo2, Film, MoveRight, PartyPopper } from 'lucide-react';
import { useState } from 'react';

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

  const visionStatements = [
    {
      title: 'A Thriving Cinematic Hub',
      description:
        "Odisha Film Development Corporation (OFDC) envisions transforming Odisha into a dynamic and thriving hub for cinema, where creativity, culture, and technology converge to elevate the state's film industry to national and international prominence. Our goal is to nurture a sustainable cinematic ecosystem that supports filmmakers, artists, and technicians while preserving and promoting Odisha's rich cultural heritage.",
      icon: Clapperboard,
    },
    {
      title: 'Building a Film-Friendly Environment',
      description:
        'We aspire to create a film-friendly environment by developing world-class infrastructure, fostering innovation, and providing strategic financial support. By encouraging diverse storytelling and high-quality productions, we aim to enhance the global recognition of Odia cinema. Our vision includes making Odisha a preferred destination for filmmakers by offering state-of-the-art studios, post-production facilities, architectural grandeur, and scenic locations that attract both national and international productions.',
        icon: Film,
    },
    {
      title: 'Empowering New and Emerging Talent',
      description:
        'OFDC is committed to empowering new and emerging talents through skill development programmes, training workshops, and collaborations with industry experts. We strive to make filmmaking more accessible and inclusive, ensuring that regional voices are heard on global platforms.',
        icon: BrainCircuit ,
    },
    {
      title: 'Modernizing Film Production',
      description:
        "Through digital transformation and technological advancements, we seek to modernize film production, distribution, and exhibition, making Odia cinema more competitive in the evolving entertainment landscape. We also aim to promote Odisha's film industry through participation in global film festivals, co-production opportunities, and strategic partnerships.",
        icon: FileVideo2 ,
    },
    {
      title: 'A Legacy of Cinematic Excellence',
      description:
        "By upholding artistic excellence and innovation, OFDC's vision is to position Odisha as a centre for cinematic excellence, where filmmakers find inspiration, audiences celebrate diverse stories, and the legacy of Odia cinema continues to flourish for generations to come.",
        icon: PartyPopper ,
    },
  ];
  const [showDes, setShowDes] = useState<number>();
  const handelShowDes = (index: number) => {
    setShowDes((prev) => (prev == index ? -1 : index));
  };
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Content Tabs Section */}
      <div className="max-w-8xl mx-auto px-4">
        <div className=" shadow-2xl overflow-hidden">
          <div className="flex flex-col">
            <div
              className=" border-b opacity-90 bg-[url('/choose-bg-C3iU5jgL.jpg')] bg-cover bg-center rounded-xl md:border-b-0 border-gray-200"
              style={{ borderColor: 'rgba(244, 114, 22, 0.3)' }}
            >
              <img className=" w-full h-16" src="/backstair.png" alt="" />
              <div className="flex items-center justify-center mb-8">
                <h2 className="text-4xl font-bold text-white">Our Mission</h2>
              </div>
              <div className="p-2 w-full gap-2 flex flex-col-reverse md:flex-row">
                <ul className="space-y-4  text-gray-700 md:w-[55%]">
                  {objectives.map((item) => (
                    <li
                      key={item.id}
                      className="flex rounded-2xl items-center mb-1"
                    >
                      <div>
                        <CheckCheck size={15} className="text-red-400 mr-2" />
                      </div>
                      <span className="text-sm text-white">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="md:w-[45%] relative z-10 ">
                  <img className=" w-full " src="/ofdc-2 1.png" alt="" />
                </div>
              </div>

              <div
                className="mt-8 pb-2 pt-4 border-t border-gray-200"
                style={{ borderColor: 'rgba(244, 114, 22, 0.3)' }}
              >
                <p className="text-sm px-2 text-gray-700 italic">
                  Through its initiatives, OFDC remains committed to nurturing a
                  vibrant and sustainable film industry in Odisha.
                </p>
              </div>
              <img
                className=" w-full rotate-180 h-16"
                src="/backstair.png"
                alt=""
              />
            </div>

            <div className=" p-8 ">
              <div className="flex items-center mb-16">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: '#F47216' }}
                >
                  <Eye size={40} className=" text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 ">
                  Our Vision
                </h2>
              </div>

              <div className="w-full  grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-16">
                {visionStatements.map((text, index) => {
                  const Icon = text.icon;
                  return (
                    <div
                      key={index}
                      className={`relative  bg-white rounded-tr-3xl rounded-bl-4xl p-8 group ${index === visionStatements.length - 1 ? 'mb-0' : ''}`}
                    >
                      <div className=" text-4xl flex justify-center items-center left-[35%] p-4 w-18 h-18 absolute bg-white rounded-full text-red-500 group-hover:text-white group-hover:bg-red-400 cursor-pointer -mt-16 transition duration-500 font-bold group-hover:scale-110 group-hover:-mt-18">
                        <Icon size={40} />
                      </div>
                      <div className="text-lg font-semibold pt-6">
                        {text.title}
                      </div>
                      <div
                        className={`text-sm ${showDes == index ? '' : 'line-clamp-3'}`}
                      >
                        {text.description}
                      </div>
                      <div
                        className=" flex items-center  group-hover:text-blue-600 cursor-pointer group group-hover:underline transition duration-500 gap-1 mt-2"
                        onClick={() => handelShowDes(index)}
                      >
                        <p>Read {showDes != index ? 'more' : 'less'} </p>
                        <MoveRight
                          size={15}
                          className=" -rotate-45 group-hover:rotate-340 transition duration-500 "
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVisionMision;
