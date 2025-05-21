import { FileText } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { operationGuidelines } from '../../config/strapiController';
import { Loader } from 'lucide-react';

const PolicyGuidelines: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await operationGuidelines();
        if (data) {
          setData(data);
          console.log(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching guidelines:', error);
      }
    };

    fetchData();
  }, []);
  const handleClick = ({ pdfUrll }: any) => {
    const pdfUrl = STRAPI_API_BASE_URL + pdfUrll;
    window.open(pdfUrl, '_blank');

    const link = document.createElement('a');
    link.download = pdfUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="p-3">
        <h2 className="text-4xl font-bold text-red-600  border-b pb-2">
          Operational Guidelines
        </h2>
       {loading ? (<Loader/>):(
         <div className="mt-2 space-y-2">
          {data.map(({ name, document,index }: any) => (
            <div key={index}
              className="flex gap-2 p-3 rounded-md shadow-sm bg-gradient-to-r from-red-700 to-transparent text-white border-l-4 border-l-black cursor-pointer hover:bg-gradient-to-r hover:from-red-600 hover:to-transparent"
              onClick={() => handleClick({ pdfUrll: document?.url })}
            >
              <FileText /> <div> {name}</div>
            </div>
          ))}
        </div>
       )}
      </div>
    </>
  );
};

export default PolicyGuidelines;
