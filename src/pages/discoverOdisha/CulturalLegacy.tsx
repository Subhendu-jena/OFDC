import { Camera, Globe, Music, Paintbrush } from 'lucide-react';
import React from 'react';

const CulturalLegacy:React.FC = () => {
  return (
    <div>
      <div className="m-5">
        <div className="m-5 p-5 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* <h2 className="text-xl font-bold mb-2">
            Odisha’s Cultural Heritage : A Timeless Legacy
          </h2>
          <img
            className="w-full h-60 object-fill object-center"
            src="https://media.gettyimages.com/id/1996377443/photo/diverse-friends-enjoying-sunny-mountain-hike.jpg?s=2048x2048&w=gi&k=20&c=gYls_w_zzmYtKMl60vw1Fj7SHspk8G1qMG_BGJ5mvng=" // Replace with your image URL
            alt="Odisha Landscape"
          />
          <div className="p-4">
            <p className="text-gray-700 mb-4 text-justify">
              Odisha’s cultural heritage is a vibrant blend of ancient
              traditions, spiritual richness, and artistic brilliance, making it
              a treasure trove for filmmakers seeking authenticity and grandeur.
              Rooted in history, Odisha is home to the world-famous Jagannath
              Culture, with the Rath Yatra (Chariot Festival) of Puri being one
              of the most spectacular religious events, drawing millions of
              devotees and offering visually stunning cinematic appeal.
            </p>
            <p className="text-justify">
              The state’s architectural marvels, including the Sun Temple of
              Konark, the Lingaraj Temple, and the Buddhist sites of Ratnagiri,
              Udayagiri, and Lalitgiri, reflect its deep spiritual and artistic
              heritage. These historical gems serve as mesmerizing backdrops for
              films exploring mythology, history, and devotion. Odisha’s tribal
              culture, with over 60 indigenous communities, preserves ancient
              traditions, dance forms like Sambalpuri, Ghumura, and Chhau, and
              unique handloom craftsmanship, including the famous Pattachitra
              paintings and Ikat textiles. The state’s folk music, ballads, and
              storytelling traditions add to its rich cultural tapestry. With
              its timeless traditions, grand festivals, and untouched artistic
              expressions, Odisha offers filmmakers an unparalleled opportunity
              to capture the essence of India’s heritage in its purest form. It
              is a land where history, art, and spirituality come alive, waiting
              to be immortalized on screen.
            </p>
          </div> */}

          <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-80 object-fill object-center"
              src="https://images.pexels.com/photos/31742103/pexels-photo-31742103/free-photo-of-ancient-temple-entrance-in-siem-reap-cambodia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image URL
              alt="Odisha Cultural Heritage"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold   text-gray-800 mb-4">
                Odisha’s Cultural Heritage
              </h2>
              <p className="text-gray-600   mb-6">
                Odisha’s rich cultural heritage blends ancient traditions,
                spiritual depth, and artistic brilliance, making it a
                captivating destination for filmmakers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
                  <Camera className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="font-medium">
                    Jagannath Culture & Rath Yatra
                  </span>
                </div>
                <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
                  <Music className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="font-medium">Vibrant Dance Forms</span>
                </div>
                <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
                  <Paintbrush className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="font-medium">
                    Exquisite Handloom Craftsmanship
                  </span>
                </div>
                <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
                  <Globe className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="font-medium">Architectural Marvels</span>
                </div>
              </div>
              <p className="text-gray-600  ">
                With timeless traditions, grand festivals, and an unspoiled
                artistic essence, Odisha provides an unparalleled opportunity to
                bring India’s heritage to life on screen. 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalLegacy;
