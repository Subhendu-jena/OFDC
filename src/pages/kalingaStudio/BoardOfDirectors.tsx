import React, { useState } from 'react';
import {
  UserCircle,
  Award,
  Building,
  Briefcase,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Bookmark,
  Globe,
} from 'lucide-react';

const BoardOfDirectors: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const directors = [
    {
      id: 1,
      position: 'Chairman, OFDC',
      name: 'Vacant',
      // localName: 'ଅଧ୍ୟକ୍ଷ, ଓଡିଶା ଚଳଚ୍ଚିତ୍ର ଉନ୍ନୟନ ନିଗମ ଲିମିଟେଡ',
      imageUrl: '/api/placeholder/200/200',
      isVacant: true,
      category: 'leadership',
    },
    {
      id: 2,
      position: 'Managing Director, OFDC Ltd.',
      name: 'Sri Samarth Verma, IAS',
      // localName: 'ଶ୍ରୀ ସମର୍ଥ ବର୍ମା, ଭା.ପ୍ର.ସେ. ପରିଚାଳନା ନିର୍ଦ୍ଦେଶକ',
      imageUrl: 'https://odishanewstune.com/wp-content/uploads/2019/02/Verma-.jpg',
      isVacant: false,
      category: 'leadership',
      bio: "An experienced IAS officer with a strong vision for the growth of Odisha's film industry.",
    },
    {
      id: 3,
      position:
        'Special Secretary to Govt. Industries Department Govt. of Odisha',
      name: 'Sri Subhendra Kumar Nayak, OAS',
      // localName:
      //   'ଶ୍ରୀ ଶୁଭେନ୍ଦ୍ର କୁମାର ନାୟକ, ଓ.ପ୍ର.ସେ. ସ୍ଵତନ୍ତ୍ର ଶାସନ ସଚିବ ଶିଳ୍ପ ବିଭାଗ, ଓଡିଶା ସରକାର',
      imageUrl: '/api/placeholder/200/200',
      isVacant: false,
      category: 'government',
      bio: 'Brings extensive experience in industrial policy development and implementation.',
    },
    {
      id: 4,
      position:
        'Additional Secretary to Govt. Public Enterprise Department Govt. of Odisha',
      name: 'Sri Susanta Kumar Singh, OAS (SAG)',
      // localName:
      //   'ଶ୍ରୀ ସୁଶାନ୍ତ କୁମାର ସିଂ, ଓ.ପ୍ର.ସେ. (ଏସ୍.ଏ.ଜି.) ଅତିରିକ୍ତ ଶାସନ ସଚିବ ସାଧାରଣ ଉଦ୍ୟୋଗ ବିଭାଗ, ଓଡିଶା ସରକାର',
      imageUrl: 'https://img-cdn.thepublive.com/fit-in/1280x720/filters:format(webp)/sambad-english/media/post_attachments/wp-content/uploads/2020/08/susanta-singh.jpg',
      isVacant: false,
      category: 'government',
      bio: 'A strategic leader focused on improving public sector enterprises in Odisha.',
    },
    {
      id: 5,
      position: 'Director Doordarshan Kendra, Bhubaneswar Govt. of India',
      name: 'Director',
      // localName: 'ନିର୍ଦ୍ଦେଶକ ଦୂରଦର୍ଶନ କେନ୍ଦ୍ର, ଭୁବନେଶ୍ୱର ଭାରତ ସରକାର',
      imageUrl: '/api/placeholder/200/200',
      isVacant: false,
      category: 'government',
      bio: "Brings media expertise and broadcasting experience to enhance OFDC's outreach.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* <KHeroSection
        subHead1="Board of Directors"
        heading="Meet the Visionaries"
        subHead2="Meet the visionary leaders guiding the Odisha Film Development Corporation Ltd. toward excellence in film production and promotion."
        tag="Directors"
      /> */}
      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-6 py-12 mt-8">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-16 transform -mt-12 relative z-20">
          <h2 className="text-2xl font-bold text-center text-red-500 mb-6 flex items-center justify-center">
            <Award className="mr-2 text-yellow-500" />
            Leadership Excellence
          </h2>

          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            Our board comprises distinguished individuals who bring diverse
            expertise from government, media, and culture sectors. Together,
            they steer OFDC's mission to develop and promote Odisha's rich
            cinematic heritage and support the growth of the film industry in
            the state.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button className="px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center">
              <UserCircle size={20} className="mr-2" />
              <span>All Directors</span>
            </button>
            <button className="px-6 py-3 bg-white text-red-500 rounded-full shadow-md hover:shadow-lg transition-all flex items-center">
              <Briefcase size={20} className="mr-2" />
              <span>Leadership</span>
            </button>
            <button className="px-6 py-3 bg-white text-red-500 rounded-full shadow-md hover:shadow-lg transition-all flex items-center">
              <Building size={20} className="mr-2" />
              <span>Government Nominees</span>
            </button>
          </div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {directors.map((director) => (
            <div
              key={director.id}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                director.isVacant
                  ? 'bg-gray-50 border-2 border-dashed border-gray-300'
                  : 'bg-white'
              } ${director.category === 'leadership' ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div
                className={`h-3 ${
                  director.category === 'leadership'
                    ? 'bg-yellow-500'
                    : 'bg-blue-600'
                }`}
              ></div>

              <div className="p-6">
                <div className="flex items-start">
                  <div
                    className={`w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ${
                      director.isVacant ? 'bg-gray-200' : ''
                    }`}
                  >
                    {director.isVacant ? (
                      <UserCircle size={96} className="text-gray-400" />
                    ) : (
                      <img
                        src={director.imageUrl}
                        alt={director.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="ml-4 flex-grow">
                    <h3
                      className={`font-bold text-lg ${
                        director.isVacant ? 'text-gray-400' : 'text-blue-900'
                      }`}
                    >
                      {director.name}
                    </h3>
                    {/* <p className="text-sm text-gray-500 mb-2">
                      {director.localName}
                    </p> */}
                    <p
                      className={`text-sm font-medium ${
                        director.category === 'leadership'
                          ? 'text-yellow-600'
                          : 'text-blue-600'
                      }`}
                    >
                      {director.position}
                    </p>
                  </div>
                </div>

                {!director.isVacant && (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleExpand(director.id)}
                      className="flex items-center text-sm text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      {expandedCard === director.id ? (
                        <>
                          <ChevronUp size={16} className="mr-1" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} className="mr-1" />
                          View Details
                        </>
                      )}
                    </button>

                    {expandedCard === director.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-700 text-sm">{director.bio}</p>

                        <div className="mt-4 flex gap-3">
                          <span className="inline-flex items-center text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            <GraduationCap size={14} className="mr-1" />
                            {director.category === 'leadership' ? 'IAS' : 'OAS'}
                          </span>

                          <span className="inline-flex items-center text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                            <Bookmark size={14} className="mr-1" />
                            {director.category === 'leadership'
                              ? 'Leadership'
                              : 'Government Nominee'}
                          </span>

                          <span className="inline-flex items-center text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            <Globe size={14} className="mr-1" />
                            Odisha
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Organizational Structure Visualization */}
        <div className="mt-20 bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
            Organizational Structure
          </h2>

          <div className="flex justify-center">
            <div className="relative max-w-2xl w-full h-64">
              {/* This would be expanded with a proper org chart visualization */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-16 border-2 border-yellow-500 rounded-lg bg-white flex items-center justify-center shadow-lg z-10">
                <span className="text-blue-900 font-bold text-sm">
                  Chairman
                </span>
              </div>

              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-40 h-16 border-2 border-blue-600 rounded-lg bg-white flex items-center justify-center shadow-lg z-10">
                <span className="text-blue-900 font-bold text-sm">
                  Managing Director
                </span>
              </div>

              <div className="absolute top-48 left-1/4 transform -translate-x-1/2 w-40 h-16 border-2 border-blue-400 rounded-lg bg-white flex items-center justify-center shadow-lg z-10">
                <span className="text-blue-900 font-bold text-sm">
                  Govt. Nominees
                </span>
              </div>

              <div className="absolute top-48 left-3/4 transform -translate-x-1/2 w-40 h-16 border-2 border-blue-400 rounded-lg bg-white flex items-center justify-center shadow-lg z-10">
                <span className="text-blue-900 font-bold text-sm">
                  Directors
                </span>
              </div>

              {/* Connector lines */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-400"></div>
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gray-400"></div>
              <div className="absolute top-40 left-1/4 transform -translate-x-1/2 w-0.5 h-8 bg-gray-400"></div>
              <div className="absolute top-40 left-3/4 transform -translate-x-1/2 w-0.5 h-8 bg-gray-400"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BoardOfDirectors;
