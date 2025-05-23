import { useEffect, useState } from 'react';
import { filmPolicy } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
import { FileText } from 'lucide-react';

export default function OdishaFilmPolicy() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await filmPolicy();
        if (response.data) {
          setData(response.data);
          // console.log(response.data[0] , 'resrrrrrrr')
        }
      } catch (error) {
        console.error('Error fetching film policy:', error);
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
    <div className=" w-full bg-white min-h-screen">
      <div className="w-full mx-auto p-6">
        <div className="bg-white  rounded-lg ">
          {/* Sidebar & Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <aside className=" p-2 rounded-lg md:col-span-1">
              <img
                src={STRAPI_API_BASE_URL + data[0]?.headImage?.url}
                alt="Kalinga Studio"
              />
              <h2 className="text-lg font-semibold mb-4 mt-2">{data[0]?.heading}</h2>
              <a
                href={STRAPI_API_BASE_URL + data[0]?.filmPolicyDocs?.url}
                // download // tells the browser “download, don’t just navigate”
                target="_blank" // open in a new tab (optional, since download often auto-saves)
                rel="noopener noreferrer"
                className="block text-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 cursor-pointer"
              >
                Download Policy
              </a>
            </aside>

            {/* Main Content */}
            <section className="relative  md:col-span-3">
              {/* <NightSky /> */}
              <header className="bg-gray-800 text-white py-4 px-6 flex items-center">
                <h1 className="text-xl font-bold">{data[0]?.heading}</h1>
              </header>
              {/* Objectives */}
              <div className="my-6">
                <h2 className="text-xl font-semibold border-b pb-2 ">
                  Objectives
                </h2>
                <ul className="list-disc list-inside mt-2 text-gray-700 ">
                  {data[0] &&
                    data[0].objectives.map((item: any) => {
                      return <li key={item.id}>{item.objectives}</li>;
                    })}
                </ul>
              </div>

              {/* Support */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-2">Support</h2>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {data[0] &&
                    data[0].support.map((text: any) => (
                      <li>{text?.support}</li>
                    ))}
                </ul>
              </div>

              {/* Incentives */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-2">
                  Incentives
                </h2>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {data[0] &&
                    data[0]?.support.map((text: any) => (
                      <li>{text?.support}</li>
                    ))}
                </ul>
              </div>

              {/* Notifications */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-2">
                  Notifications
                </h2>
                <div className="mt-2 space-y-2">
                  {data[0] &&
                    data[0]?.filmPolicy.map((text: any) => {
                      console.log(data[0]?.filmPolicy, 'text');
                      return (
                        <div
                          className="flex gap-3 p-3 rounded-md shadow-sm bg-gradient-to-r from-red-700 to-transparent text-white border-l-4 border-l-black cursor-pointer"
                          onClick={() =>
                            handleClick({ pdfUrll: text?.media?.url })
                          }
                        >
                          <FileText />
                          {text?.title}
                        </div>
                      );
                    })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
