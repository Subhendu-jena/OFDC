import React, {  useEffect, useState } from 'react';
import {
  UserCircle,
  Award,  
} from 'lucide-react';
import { getAllBoardofDirectors } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { Loader } from 'lucide-react';
const BoardOfDirectors: React.FC = () => {
const [loading, setLoading] = useState(false);
const [data, setData] = useState<any>([]);
  useEffect(() => {
      setLoading(true);
      getAllBoardofDirectors()
      .then(({ data }) => {
        if (data) {
          console.log(data,"daata")
            setData(data);
        }
      })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
  },[]);
  const card = data[0]?.boardOfDirectors || [];
  return (
   <>
   {loading ? <Loader /> :  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="container mx-auto max-w-6xl px-6 py-12 mt-8">
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
           
          </div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {card?.map((director:any) => (
            <div
              key={director.id}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-50 border-2 border-dashed border-gray-300 }`}
            >
              <div
                className={`h-3 bg-yellow-500`}
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
                      src={ director.imgUrl?(STRAPI_API_BASE_URL + director?.imgUrl?.url) : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png "}
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
                      className={`text-sm font-medium text-yellow-600`}
                    >
                      {director.designation}
                    </p>
                  </div>
                </div>

           
              </div>
            </div>
          ))}
        </div>

        {/* Organizational Structure Visualization */}
        {/* <div className="mt-20 bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
            Organizational Structure
          </h2>

          <div className="flex justify-center">
            <div className="relative max-w-2xl w-full h-64">
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

              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-400"></div>
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gray-400"></div>
              <div className="absolute top-40 left-1/4 transform -translate-x-1/2 w-0.5 h-8 bg-gray-400"></div>
              <div className="absolute top-40 left-3/4 transform -translate-x-1/2 w-0.5 h-8 bg-gray-400"></div>
            </div>
          </div>
        </div> */}
      </main>
    </div>}</>
  );
};

export default BoardOfDirectors;
