import {
  BluetoothSearching,
  LucideCake,
  Mountain,
  TreeDeciduous,
} from 'lucide-react';
import React from 'react';
import deomali from '../../assets/Deomali.jpeg';
const GeographicalFeature: React.FC = () => {
  return (
    <div className="p-5 bg-white">
      <div className="m-5 p-5 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-bold mb-2">
          Odisha : A Land of Diverse Landscapes
        </h2>
        <div className="grid grid-cols-5">
          <div className="p-4 col-span-3">
            <p className="text-gray-700 mb-4 text-justify">
              Odisha’s geographical diversity is a treasure trove for
              filmmakers. The state boasts a 480 km coastline along the Bay of
              Bengal, offering pristine beaches and stunning seascapes. The
              Eastern Ghats provide rugged hills, lush green valleys, and
              breathtaking waterfalls. The Chilika Lake, Asia’s largest coastal
              lagoon, offers mesmerizing visuals of wetlands and migratory
              birds. Odisha is also home to vast forests, mangroves, rivers, and
              ancient caves, making it a versatile filming destination. From
              urban cityscapes to tribal heartlands, Odisha’s varied geography
              provides the perfect setting for films across genres, from
              historical epics to contemporary dramas.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
                <BluetoothSearching className="w-6 h-6 text-blue-500 mr-2" />
                <span className="font-medium">Coastline & Beaches</span>
              </div>
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
                <Mountain className="w-6 h-6 text-green-500 mr-2" />
                <span className="font-medium">Eastern Ghats & Hills</span>
              </div>
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
                <LucideCake className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-medium">Chilika Lake</span>
              </div>
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
                <TreeDeciduous className="w-6 h-6 text-green-700 mr-2" />
                <span className="font-medium">Forests & Mangroves</span>
              </div>
            </div>
          </div>{' '}
          <div className="col-span-2">
            {' '}
            <img
              className="w-full h-full object-fill rounded-2xl object-center"
              src={deomali} // Replace with your image URL
              alt="Odisha Landscape"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographicalFeature;
