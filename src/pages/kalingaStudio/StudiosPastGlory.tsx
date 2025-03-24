import React from 'react';
import { Film, Award, Camera, MapPin, Star } from 'lucide-react';
import KHeroSection from '../../components/KalingaStudio/KHeroSection';
import { motion } from 'framer-motion';

const StudiosPastGlory: React.FC = () => {

  const filmmakers = [
    {
      name: 'Mrinal Sen',
      image:
        'https://indianculturalforum.in/wp-content/uploads/2018/12/Mrinal-Sen-510x729.jpg',
    },
    {
      name: 'Tarun Majumdar',
      image:
        'https://www.getbengal.com/uploads/story_image/Tarun-Majumdar-obit.jpg',
    },
    {
      name: 'Aparna Sen',
      image:
        'https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.6435-9/122577271_971740666644592_4289439948154968451_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EClvV1V2JAoQ7kNvgHdXzYr&_nc_oc=AdkM3kUcyW55FrhbaUC0A0E4lqefPieELrruPRGGTU3-PV33A_WHG03u8SoYwFo4yaZREtxxxUZQuWy3JeWVBgIm&_nc_zt=23&_nc_ht=scontent.fbbi1-2.fna&_nc_gid=kBeXnJYDWiU6FqPw8-kLHg&oh=00_AYEYSVntEQZsTMWQYQL_IpAfNkfQwyOWrPqzoldy_OYTIw&oe=6808AB21',
    },
    {
      name: 'K. Biswanath',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/63/K._Vishwanath_at_National_Film_Awards_Function_2017.jpg',
    },
    {
      name: 'Bhaben Saikia',
      image: 'https://assets.telegraphindia.com/telegraph/14bhaben.jpg',
    },
    {
      name: 'Nabendu Chatterjee',
      image:
        'https://learningandcreativity.com/silhouette/wp-content/uploads/sites/3/2018/07/and-they-made-classics-Nabendu-Ghosh-1.jpg',
    },
    {
      name: 'Amal Paleker',
      image:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201508/amol_palekar_647_082515013139.jpg?VersionId=P9gGeQIAT49LhhNtdh0jHKhORUOhvax8&size=690:388amal_paleker.jpg',
    },
    {
      name: 'Budha Deb Dasgupta',
      image:
        'https://indianculturalforum.in/wp-content/uploads/2021/06/Budhhadeb-dasgupta.PNG.jpg',
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      <KHeroSection
        subHead1="Studio’s Past Glory"
        heading="The Legacy of Odia Cinema World"
        subHead2="From 'Sita Bibaha' in 1934 to the digital era, shaping the cinematic landscape of Odisha and beyond."
        tag="History"
      />

      <section id="history" className="pt-20 pb-24 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gray-50">
          <div className="absolute left-0 top-0 w-full h-full opacity-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-red-300"
                style={{
                  // width: '120%',
                  height: '2px',
                  top: `${i * 240}px`,
                  left: '-10%',
                  transform: `rotate(${2 * i}deg)`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="inline-block text-3xl md:text-5xl font-bold relative">
              <span className="relative z-10">OUR LEGACY</span>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-red-300 opacity-50 z-0"></div>
            </h2>
          </div>

          {/* Timeline items */}
          <div className="flex justify-between  ">
            {[
              {
                year: '1934',
                title: 'Odia Cinema Begins',
                description:
                  "From 'Sita Bibaha' in 1934, Odia filmmakers traveled to Kolkata and Madras due to lack of local facilities.",
                position: 'bottom',
              },
              {
                year: '1980',
                title: 'Foundation Laid',
                description:
                  'Kalinga Studio established as a joint venture between OFDC and M/s. Sarada Enterprises, Chennai.',
                position: 'top',
              },
              {
                year: '1982',
                title: 'Commercial Operations Begin',
                description:
                  'Kalinga Studio began commercial operations, providing complete pre and post-production facilities.',
                position: 'bottom',
              },
              {
                year: '1994',
                title: 'Video Complex Launch',
                description:
                  'First Video Complex in Eastern India with 3 camera setup for online shooting and editing.',
                position: 'top',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: item.position === 'top' ? -50 : 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-1/4 px-2 relative z-10"
              >
                {/* Year marker */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 p-5 rounded-full bg-red-400 flex items-center justify-center z-20">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-red-400">
                    <span className="text-xs font-bold">{item.year}</span>
                  </div>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 z-10"></div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`
                w-full p-4 bg-white rounded-2xl border border-gray-200 shadow-lg 
                hover:shadow-red-100 transition-all duration-300
                ${item.position === 'top' ? 'mb-16 mt-4' : 'mt-16 mb-4'}
              `}
                  style={{
                    marginTop: item.position === 'top' ? '-0px' : '250px',
                  }}
                >
                  <h3 className="text-lg font-bold text-red-500 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section with 3D Card effect */}
      <section
        id="achievements"
        className="py-24 relative bg-gradient-to-b from-white to-gray-100"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl md:text-5xl font-bold relative">
              <span className="relative z-10">AWARD-WINNING LEGACY</span>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-red-300 opacity-50 z-0"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Golden Lotus Award',
                film: 'Bagh Bahadur',
                director: 'Budha Deb Dasgupta',
                description:
                  'The highest National Award received for a film produced at Kalinga Studio.',
              },
              {
                title: 'International Recognition',
                film: 'Multiple Productions',
                director: 'Various Directors',
                description:
                  'Films from Kalinga Studio have been featured at international film festivals around the world.',
              },
              {
                title: "Eastern India's Pride",
                film: 'Regional Cinema',
                director: 'Multiple Filmmakers',
                description:
                  'Kalinga Studio has been instrumental in promoting Eastern Indian cinema on the global stage.',
              },
            ].map((award, index) => (
              <div key={index} className="group perspective">
                <div className="relative preserves-3d group-hover:my-rotate-y-180 w-full h-80 duration-1000">
                  <div className="absolute backface-hidden w-full h-full">
                    <div className="w-full h-full bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between border border-gray-200">
                      <Award className="text-red-500" size={48} />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          {award.title}
                        </h3>
                        <p className="text-red-500 mb-4">{award.film}</p>
                        <div className="flex items-center text-gray-600">
                          <div className="flex text-red-500 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
                    <div className="w-full h-full bg-red-100 rounded-2xl shadow-xl p-8 flex flex-col justify-between">
                      <h3 className="text-xl font-bold mb-2 text-red-700">
                        Director
                      </h3>
                      <p className="text-red-600 mb-4">{award.director}</p>
                      <p className="text-gray-700">{award.description}</p>
                      <button className="mt-4 py-2 px-4 bg-red-500 text-white rounded-full text-sm hover:bg-red-600 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section - Interactive Cards */}
      <section id="facilities" className="py-24 relative bg-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-24 h-24 rounded-full border-2 border-red-300"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl md:text-5xl font-bold relative">
              <span className="relative z-10">WORLD-CLASS FACILITIES</span>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-red-300 opacity-50 z-0"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera size={40} />,
                title: 'Pre-Production Facilities',
                description:
                  'Complete pre-production setup with planning rooms, script development spaces, and casting facilities.',
              },
              {
                icon: <Film size={40} />,
                title: 'Indoor Floor',
                description:
                  'Spacious indoor floor for film shooting with professional lighting and sound equipment.',
              },
              {
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="6"
                      width="20"
                      height="12"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="9"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="17" cy="9" r="1" fill="currentColor" />
                    <path
                      d="M17 13L17 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                title: 'Video Complex',
                description:
                  '3 camera setup with facilities for online shooting and editing, first of its kind in Eastern India (est. 1994).',
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-100/80 to-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="bg-white border border-gray-200 rounded-2xl h-full shadow-md">
                  <div className="h-2 bg-red-400 rounded-t-2xl"></div>

                  <div className="p-8 flex flex-col h-full">
                    <div className="text-red-500 mb-6">{facility.icon}</div>

                    <h3 className="text-xl font-bold mb-4">{facility.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {facility.description}
                    </p>

                    <div className="mt-auto">
                      <button className="py-2 px-4 bg-transparent border border-red-500 text-red-500 rounded-full text-sm hover:bg-red-50 hover:text-red-600 transition-all duration-300 opacity-0 group-hover:opacity-100">
                        Explore Facility
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filmmakers Section - Dynamic Grid */}
      <section id="filmmakers" className="py-24 relative bg-gray-100">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-fixed bg-center opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl md:text-5xl font-bold relative">
              <span className="relative z-10">LEGENDARY FILMMAKERS</span>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-red-300 opacity-50 z-0"></div>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filmmakers.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center w-full"
              >
                <div
                  className={`group relative overflow-hidden h-10 w-60 bg-white rounded-xl hover:bg-red-50 transition-colors duration-300 shadow-md ${
                    director.image ? '' : 'p-4'
                  }`}
                  style={{ height: index % 2 === 0 ? '200px' : '240px' }}
                >
                  {director.image && (
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-fit rounded-xl"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10"></div>

                  <div className="absolute inset-0 p-4 flex flex-col justify-end z-20">
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-red-600 transition-colors">
                      {director.name}
                    </h3>
                    <div className="w-8 h-0.5 bg-red-400 my-2 group-hover:w-full transition-all duration-500"></div>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                      Renowned Filmmaker
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-white bg-opacity-90 p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Global Cinema Influence
              </h3>
              <p className="text-gray-600 mb-6">
                These eminent filmmakers from across India chose Kalinga Studio
                for their award-winning productions, contributing to the rich
                cinematic heritage of Eastern India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { region: 'Odisha', count: 120 },
                  { region: 'West Bengal', count: 45 },
                  { region: 'Assam', count: 28 },
                  { region: 'Bangladesh', count: 15 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold">{item.region}</p>
                      <p className="text-red-500 text-sm">
                        {item.count}+ Films
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default StudiosPastGlory;
