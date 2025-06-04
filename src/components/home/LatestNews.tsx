import React, { useEffect, useState } from 'react';
import { latestNews } from '../../config/strapiController';
import { useFontSize } from './FontSizeContext';
import { useSelector } from 'react-redux';

const LatestNews: React.FC = () => {
    const [data, setData] = useState<any>([]);
     const { fontSize } = useFontSize();
       const locale = useSelector((state: any) => state.language.locale);

      useEffect(() => {
        latestNews(locale)
          .then(({ data }: any) => {
            if (data) {
              setData(data);
            }
          })
          .catch((error) => {
            console.error(error);
          })
         
      }, [locale]);
     
  return (
    <>
      <button className=" w-full md:w-[15%] px-4  text-white font-bold bg-[#0B0035] text-lg"
       style={{ fontSize: `${fontSize}px` }}>
      { locale === 'en' ? "Latest News" : "ସର୍ବଶେଷ ଖବର"}
      </button>
      <div className="w-full md:w-[85%] justify-between h-10 flex flex-col ">
        <div className="bg-[#F47216] h-[80%] items-center flex overflow-hidden">
          {' '}
          <div className=" whitespace-nowrap text-white font-semibold animate-marquee">
            {' '}
           {data[0]?.latestNews}
            <a
              href= {data[0]?.link}
              style={{
                color: 'white',
                textDecoration: 'underline',
                fontWeight: 'bold',
                marginLeft: '10px', 
              }}
            >
              {data[0]?.link}
            </a>
          </div>
        </div>
        <div className="h-[20%] bg-[#FC3C3C]"></div>
      </div>
    </>
  );
};

export default LatestNews;
