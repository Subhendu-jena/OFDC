import React, { useState } from 'react';
import {  MapPin,  Dot } from 'lucide-react';
interface Section {
  title: string;
  description: string;
  locations: string[];
}
const EchoesOfHistory: React.FC = () => {
  const [activeSection, setActiveSection] = useState('history');

  const cinematicLocations = [
    {
      name: 'Sun Temple, Konark',
      description: 'Where ancient architecture meets cinematic brilliance',
      videoUrl:
        'https://media.istockphoto.com/id/96668487/photo/ancient-hindu-sun-temple-at-konark.jpg?s=1024x1024&w=is&k=20&c=AL84r4P0OmuFkelTqvNGUp5mi0Y-o6wdGBPg8KagEI4=',
      video: 'https://youtu.be/FmxbaEbiDqg?t=5',
      highlights: [
        'UNESCO World Heritage Site',
        'Golden Hour Cinematography',
        'Architectural Marvel',
      ],
    },
    {
      name: 'Chilika Lake',
      description: 'A canvas of natural beauty and untold stories',
      videoUrl:
        'https://media.istockphoto.com/id/1128484961/photo/beautiful-sunrise-at-chilika-lake-india.jpg?s=1024x1024&w=is&k=20&c=BUrKWgFfbzHm32u9kuOsUaDlfi0FUqYOc4KwmoSYBA0=',
      highlights: [
        "Asia's Largest Lagoon",
        'Diverse Ecosystem',
        'Scenic Landscapes',
      ],
    },
    {
      name: 'Tribal Heartlands',
      description: 'Raw cultural narratives waiting to be filmed',
      videoUrl:
        'https://media.istockphoto.com/id/1436784554/photo/zhangjiajie-national-forest-park-hunan-china-wulingyuan-district-zhangjiajie-national-forest.jpg?s=1024x1024&w=is&k=20&c=FhgGop8sPb97ltXZaRU4gUJ0ROg1ICNbEVjiIFb37NM=',
      highlights: [
        'Authentic Tribal Cultures',
        'Unexplored Traditions',
        'Living Documentaries',
      ],
    },
    {
      name: 'Ratnagiri, Udayagiri, and Lalitgiri',
      description: 'Ancient Buddhist heritage that echoes with serenity',
      videoUrl:
        'https://www.bhubaneswarbuzz.com/wp-content/uploads/2015/05/buddhist-tourism-odisha-bhubaneswar-buzz-3.jpg',
      highlights: [
        'Buddhist Monasteries',
        'Sacred Stupas',
        'Rich Spiritual Legacy',
      ],
    },
    {
      name: 'Jagannath Temple, Puri',
      description: 'A divine landmark steeped in mythology and devotion',
      videoUrl:
        'https://media.gettyimages.com/id/1484152232/photo/puri-jagannath-temple-from-front-with-clear-blue-sky-as-backdrop.jpg?s=2048x2048&w=gi&k=20&c=5bRH31CBJ1Dhl7eDzMtUuc5NjOWTEWvd-LnZvhqhCxE=',
      highlights: [
        'One of the Char Dhams',
        'World-Famous Rath Yatra',
        'Sacred Hindu Pilgrimage',
      ],
    },
    {
      name: 'Lingaraj Temple, Bhubaneswar',
      description: 'A timeless marvel of Kalinga architecture',
      videoUrl:
        'https://media.gettyimages.com/id/520765024/photo/lingaraj-temple-at-bhubaneswar-bhubaneshwar-orissa-india.jpg?s=2048x2048&w=gi&k=20&c=PS44FfTp-ofXSZMDuA25BvL6_ASPBwsgDUGHjHsXYZQ=',
      highlights: [
        'Intricate Carvings',
        'Spiritual Epicenter',
        'Majestic Temple Complex',
      ],
    },
    {
      name: 'Virgin Beaches of Chandipur',
      description: 'Where the sea disappears and reappears like magic',
      videoUrl:
        'https://media.gettyimages.com/id/141297144/photo/fisherman-carrying-nets-at-chandipur-beach.jpg?s=2048x2048&w=gi&k=20&c=3GREsrELwMLcrfIIW1rPr3faR52aCs1E7LQ1WJNelzA=',
      highlights: [
        'Unique Vanishing Sea',
        'Untouched Natural Beauty',
        'Golden Sandy Shores',
      ],
    },
    {
      name: 'Mystical Forests of Similipal',
      description: 'An untouched paradise teeming with wildlife',
      videoUrl:
        'https://media.gettyimages.com/id/1230943181/photo/india-wildlife.jpg?s=2048x2048&w=gi&k=20&c=eoIPrmRBH5E5DfBwpg9QcRc80NPAJQtmA0qiKusoygw=',
      highlights: [
        'Dense Forests & Waterfalls',
        'Rare Wildlife Habitat',
        'Tropical Biodiversity',
      ],
    },
  ];

  const sections: { [key: string]: Section } = {
    history: {
      title: 'Historical Landscapes',
      description:
        "From the transformative Kalinga War to ancient Buddhist sites, Odisha's history is a cinematographer's dream.",
      locations: [
        'Ratnagiri Monastery',
        'Udayagiri Caves',
        'Lalitgiri Archaeological Complex',
      ],
    },
    architecture: {
      title: 'Architectural Marvels',
      description:
        'UNESCO World Heritage sites and intricate temples provide breathtaking backdrops for cultural narratives.',
      locations: [
        'Konark Sun Temple',
        'Jagannath Temple, Puri',
        'Lingaraj Temple, Bhubaneswar',
      ],
    },
    landscapes: {
      title: 'Pristine Natural Backdrops',
      description:
        'Untouched beaches, mystical forests, and serene lakes offer unique cinematic settings.',
      locations: ['Chandipur Beach', 'Similipal National Park', 'Chilika Lake'],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Odisha: A Cinematic Canvas
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.keys(sections).map((key) => {
            const section = sections[key];
            return (
              <div
                key={key}
                onClick={() => setActiveSection(key)}
                className={`
                  cursor-pointer p-6 rounded-xl shadow-lg transition-all duration-300
                  ${
                    activeSection === key
                      ? 'bg-white scale-105 border-2 border-amber-500'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }
                `}
              >
                <div className="flex items-center mb-4">
                  <h2 className="ml-4 text-2xl font-semibold text-gray-800">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="space-y-2">
                  {section.locations.map((location) => (
                    <div
                      key={location}
                      className="flex items-center text-gray-700"
                    >
                      <MapPin className="w-4 h-4 mr-2 text-amber-500" />
                      {location}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <section className="container mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600">
            Cinematic Locations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {cinematicLocations.map((location, index) => (
              <div
                key={index}
                // onClick={() => setActiveVideo(location)}
                className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity z-10"></div>

                {/* Background Image */}
                <img
                  src={location.videoUrl}
                  alt={location.name}
                  className="w-full h-96 object-cover"
                />

                {/* Always Visible Location Name at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-grey bg-opacity-60">
                  <h3 className="text-2xl font-bold text-white">
                    {location.name}
                  </h3>
                </div>

                {/* Hidden Content that Moves Up on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-black bg-opacity-80 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {location.name}
                  </h3>
                  <p className="text-gray-200 mb-2">{location.description}</p>
                  {location.highlights.map((locations) => (
                    <div className="flex ">
                      <Dot size={20} className="text-white" />
                      <p className="text-gray-500 text-sm">{locations}</p>
                    </div>
                  ))}

                  {/* <div className="flex items-center space-x-3">
                <Play className="w-8 h-8 text-amber-400" />
                <span className="text-white">View Cinematic Potential</span>
              </div> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EchoesOfHistory;
