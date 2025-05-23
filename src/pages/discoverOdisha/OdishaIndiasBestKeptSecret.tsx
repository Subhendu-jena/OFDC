import React, { useState } from 'react';
import { Clapperboard, Film, Play } from 'lucide-react';
import { CinematicLocation } from '../../types/global';

const OdishaIndiasBestKeptSecret: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<CinematicLocation>();

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
  ];

  return (
    <div className="min-h-screen bg-white  text-white p-5">
      {/* Immersive Hero Section */}
      {/* <header className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute z-0 w-full h-[50vh] object-fill"
        >
          <source src="https://cdn.pixabay.com/video/2023/04/11/158349-816637197_large.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4"
        >
          <div >
            <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600">
              Odisha: Cinematic Horizon
            </h1>
            <p className="text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
              Where every landscape tells a story, every moment is a frame, and every location is a potential blockbuster
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white px-12 py-4 rounded-full text-xl font-bold flex items-center mx-auto space-x-4 transform hover:scale-105 transition-all">
              <Clapperboard className="w-8 h-8" />
              <span>Explore Cinematic Locations</span>
            </button>
          </div>
        </div>
      </header> */}

      {/* Cinematic Locations Grid */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600">
          Cinematic Locations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cinematicLocations.map((location, index) => (
            <div
              key={index}
              onClick={() => setActiveVideo(location)}
              className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity z-10"></div>

              <img
                src={location.videoUrl}
                alt={location.name}
                className="w-full h-96 object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {location.name}
                </h3>
                <p className="text-gray-200 mb-4">{location.description}</p>
                <div className="flex items-center space-x-3">
                  <Play className="w-8 h-8 text-amber-400" />
                  <span className="text-white">View Cinematic Potential</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setActiveVideo}
              className="absolute -top-12 right-0 text-white text-2xl font-bold"
            >
              Close
            </button>
            <video controls autoPlay className="w-full rounded-xl">
              <source src={activeVideo.video} type="video/mp4" />
            </video>
            <div className="mt-6 text-center">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600 mb-4">
                {activeVideo.name}
              </h3>
              <p className="text-xl text-gray-300">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Filmmaker Support */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600">
            Filmmaker's Paradise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all">
              <Film className="w-16 h-16 mx-auto text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Film-Friendly Policies
              </h3>
              <p className="text-gray-300">
                Seamless permissions, attractive incentives, and comprehensive
                support from Odisha Film Development Corporation
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all">
              <Clapperboard className="w-16 h-16 mx-auto text-red-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                World-Class Infrastructure
              </h3>
              <p className="text-gray-300">
                State-of-the-art production facilities, diverse locations, and
                expert local crew support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OdishaIndiasBestKeptSecret;
