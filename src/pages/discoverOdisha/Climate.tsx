import React from 'react'
import { Sun, CloudRain, Snowflake } from 'lucide-react';
import chilika from '../../assets/Chilika.jpeg'
const Climate:React.FC = () => {
  return (
    <div className="m-5">
          <div className="m-5 p-5 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <h2 className="text-xl font-bold mb-2">Odisha’s Climate : A Land of Seasonal Splendor
              </h2><div className='grid grid-cols-5 '>
      <div className=' col-span-2 '><img
        className="w-full h-full rounded-lg object-fit object-center"
        src={chilika} // Replace with your image URL
        alt="Odisha Landscape"
      /></div>
      <div className="p-4 col-span-3">
        <p className="text-gray-700 mb-4 text-justify">
        Odisha experiences a diverse climate, making it an ideal destination for filmmakers seeking varied seasonal backdrops. The state has a tropical monsoon climate with three distinct seasons: summer, monsoon, and winter. Summers (March to June) are warm, with golden sunlight enhancing coastal and desert-like landscapes. The monsoon season (July to September) transforms the state into a lush green paradise, creating dramatic visuals of rain-drenched forests, rivers, and waterfalls. Winters (October to February) are mild and pleasant, offering clear skies and cool weather, perfect for outdoor shoots. This climatic diversity allows filmmakers to capture different moods and aesthetics throughout the year.

        </p>
        <div className="flex items-center mb-2">
          <Sun className="w-5 h-5 text-yellow-500 mr-2" />
          <span>Summer (March to June)</span>
        </div>
        <div className="flex items-center mb-2">
          <CloudRain className="w-5 h-5 text-blue-500 mr-2" />
          <span>Monsoon (July to September)</span>
        </div>
        <div className="flex items-center">
          <Snowflake className="w-5 h-5 text-gray-500 mr-2" />
          <span>Winter (October to February)</span>
        </div>
      </div>
      </div>
    </div>

    </div>
  )
}

export default Climate
