import React, { useState } from 'react';
import {
  Target,
  Film,
  Users,
  Briefcase,
  Cpu,
  Archive,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { useFontSize } from '../../components/home/FontSizeContext';
import a from '../../assets/PROMOTING ODIA FILMS.jpg';
import b from '../../assets/Enhancing Film Production Infrastructure.png';
import c from '../../assets/Encouraging Film makers.png';
import d from '../../assets/Boosting Employment.jpeg';
import e from '../../assets/Expanding Digital & Technological Capabilities.jpeg';
import f from '../../assets/Preserving Cinematic Heritage.jpeg';
const ObjectivesPage: React.FC = () => {
  const [activeObjective, setActiveObjective] = useState(0);
  const { fontSize } = useFontSize();
  const objectives = [
    {
      id: 0,
      title: 'Promoting Odia Cinema',
      description:
        'Supporting the growth and development of the Odia film industry by providing state-of-the-art production facilities.',
      icon: <Film className="h-8 w-8" />,
      color: 'bg-red-500',
      image: a,
    },
    {
      id: 1,
      title: 'Enhancing Film Production Infrastructure',
      description:
        'Offering well-equipped studios, shooting floors, and post-production services to filmmakers.',
      icon: <Target className="h-8 w-8" />,
      color: 'bg-purple-500',
      image: b,
    },
    {
      id: 2,
      title: 'Encouraging Regional and National Filmmakers',
      description:
        'Providing affordable facilities to attract filmmakers from Odisha and other parts of India.',
      icon: <Users className="h-8 w-8" />,
      color: 'bg-blue-500',
      image: c,
    },
    {
      id: 3,
      title: 'Boosting Employment in the Film Sector',
      description:
        'Creating job opportunities for artists, technicians, and industry professionals.',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'bg-green-500',
      image: d,
    },
    {
      id: 4,
      title: 'Expanding Digital and Technological Capabilities',
      description:
        'Modernizing studio facilities with advanced equipment for digital filmmaking, editing, and VFX.',
      icon: <Cpu className="h-8 w-8" />,
      color: 'bg-yellow-500',
      image: e,
    },
    {
      id: 5,
      title: 'Preserving Cinematic Heritage',
      description:
        "Aims in preserving and displaying the vintage Cine Equipments used during the early 80's and 90's.",
      icon: <Archive className="h-8 w-8" />,
      color: 'bg-indigo-500',
      image: f,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Objectives Introduction */}
      <section className=" bg-white py-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
              <Target className="h-8 w-8 text-red-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontSize: `${fontSize + 32}px` }}>
              Strategic Objectives
            </h2>
            <p className="text-xl text-gray-600 mb-12" style={{ fontSize: `${fontSize + 4}px` }}>
              Kalinga Studios is dedicated to transforming Odisha's film
              industry through a comprehensive set of strategic objectives that
              focus on infrastructure, talent development, and technological
              advancement.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {objectives.map((objective, index) => (
                <button
                  key={index}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all ${activeObjective === index ? objective.color + ' text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  onClick={() => setActiveObjective(index)}
                >
                  <div
                    className={`${activeObjective === index ? 'text-white' : 'text-gray-700'}`}
                  >
                    {objective.icon}
                  </div>
                  <span
                    className={`text-sm mt-2 font-medium ${activeObjective === index ? 'text-white' : 'text-gray-700'}`}
                    style={{ fontSize: `${fontSize -2}px` }}
                  >
                    {objective.title.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Objective */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div
                  className={`w-14 h-14 rounded-lg ${objectives[activeObjective].color} flex items-center justify-center mb-6`}
                >
                  {objectives[activeObjective].icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontSize: `${fontSize + 14}px` }}>
                  {objectives[activeObjective].title}
                </h3>
                <p className="text-gray-600 text-lg mb-6" style={{ fontSize: `${fontSize + 2}px` }}>
                  {objectives[activeObjective].description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-red-500 font-medium hover:text-red-600 transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="bg-gray-200">
                <img
                  src={objectives[activeObjective].image ?? " https://via.placeholder.com/300"}
                  alt={objectives[activeObjective].title}
                  className="w-full h-90 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Objectives */}
      <section id="objectives" className="py-10 md:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="spa">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className={`objective-card flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-700 transform `}
                >
                  <div
                    className={`w-full md:w-2/5 order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 ${objective.color} opacity-20 rounded-lg transform rotate-3`}
                      ></div>
                      <img
                        src={objective.image}
                        alt={objective.title}
                        className="relative rounded-lg shadow-lg h-90 w-full"
                      />
                      <div
                        className={`absolute -bottom-5 -right-5 w-16 h-16 ${objective.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        {objective.icon}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-full md:w-3/5 order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${objective.color} bg-opacity-20 text-gray-800 mb-4`}
                    >
                      Objective {index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontSize: `${fontSize + 8}px` }}>
                      {objective.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6" style={{ fontSize: `${fontSize + 2}px` }}>
                      {objective.description}
                    </p>

                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                      <h4 className="font-semibold mb-3">Key Initiatives:</h4>
                      <ul className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <ChevronRight
                              className={`h-5 w-5 ${objective.color} text-opacity-80 mt-0.5 flex-shrink-0`}
                            /> 
                            <span className="text-gray-700 ">
                              {index === 0 &&
                                i === 0 &&
                                'Providing subsidized rates for Odia film productions'}
                              {index === 0 &&
                                i === 1 &&
                                'Hosting festivals showcasing regional cinema'}
                              {index === 0 &&
                                i === 2 &&
                                'Establishing awards recognizing excellence in Odia films'}

                              {index === 1 &&
                                i === 0 &&
                                'Building advanced soundstages and shooting floors'}
                              {index === 1 &&
                                i === 1 &&
                                'Offering comprehensive post-production facilities'}
                              {index === 1 &&
                                i === 2 &&
                                'Creating specialized sets for various film genres'}

                              {index === 2 &&
                                i === 0 &&
                                'Creating package deals for independent filmmakers'}
                              {index === 2 &&
                                i === 1 &&
                                'Establishing co-production opportunities'}
                              {index === 2 &&
                                i === 2 &&
                                'Providing location services throughout Odisha'}

                              {index === 3 &&
                                i === 0 &&
                                'Training programs for cinema professionals'}
                              {index === 3 &&
                                i === 1 &&
                                'Internship programs with production companies'}
                              {index === 3 &&
                                i === 2 &&
                                'Creating a talent database for regional filmmakers'}

                              {index === 4 &&
                                i === 0 &&
                                'Investing in 4K and 8K camera equipment'}
                              {index === 4 &&
                                i === 1 &&
                                'Building advanced VFX workstations'}
                              {index === 4 &&
                                i === 2 &&
                                'Establishing a digital archiving system'}

                              {index === 5 &&
                                i === 0 &&
                                'Creating a museum of cinema history in Odisha'}
                              {index === 5 &&
                                i === 1 &&
                                'Restoring vintage film equipment'}
                              {index === 5 &&
                                i === 2 &&
                                'Digitizing classic Odia films'}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Transforming Odisha's Film Industry</h2>
            <p className="text-xl text-gray-300 mb-8">
              Together, we can build a thriving ecosystem for filmmakers, artists, and technicians across Eastern India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Partner With Us
              </a>
              <a href="#" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
       */}
    </div>
  );
};

export default ObjectivesPage;
