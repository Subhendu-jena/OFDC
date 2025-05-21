import React, { useEffect, useState } from 'react';
import { majorFestivals } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';

const MajorFestivals: React.FC = () => {
 const [data, setData] = useState<any[]>([]);

useEffect(() => {
  majorFestivals()
    .then((res: any) => {
      if (res) {
        const resData = res.data?.[0]?.majorFestival || [];
        setData(resData);
        console.log(resData, 'res?.data?.majorFestival');
      }
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  console.log(data, 'filteredData');
  return (
    <>
        <h2 className="text-4xl font-bold text-red-600  border-b p-2">
          Major Festivals
        </h2>
         {data.map((item: any, index: number) => (
      <div key={item.id || index} className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 bg-white rounded-xl shadow p-4">
        <div className="col-span-2">
          <img
            src={`${STRAPI_API_BASE_URL}${item.imageUrl?.url}`}
            alt={item.imageUrl?.alternativeText || 'Festival Image'}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="col-span-3 py-2">
          <h1 className="text-2xl font-bold mb-2">{item.heading}</h1>
          {item.paraGraph ? (
            item.paraGraph.map((para: any, idx: number) => (
              <p key={idx} className="text-gray-600 mb-4">
                {para.children?.map((child: any) => child.text).join('')}
              </p>
            ))
          ) : (
            <p className="text-gray-600 mb-4">
              No description available.
            </p>
          )}
        </div>
      </div>
    ))}
    </>
  );
};

export default MajorFestivals;
