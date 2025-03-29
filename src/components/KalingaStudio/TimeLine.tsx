import React from 'react';
import blueR from '../../assets/BG/2222.svg';
import red from '../../assets/KalingaAssets/red.png';
const TimeLine: React.FC = () => {
  return (
    <div className="">
      {/* Top 1 */}

      {/* <div className=" flex-col mt-[40px] mb-[40px]">
        <div className="grid grid-cols-3 gap-0  align-center">
          <div className="w-[200px] h-[40px] flex mt-15 z-100 ml-[-10px]">
            <div className="w-[200px] bg-[#6ea56c] rounded-tl-lg"></div>
            <div
              className="bg-[#6ea56c] p-5"
              style={{
                clipPath: 'polygon(100% 50%, 0% 100%, 0% 0%)',
              }}
            ></div>
          </div>
          <div className="pl-5">
            <div
              className="bg-[#548453] p-5"
              style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
            ></div>
            <div className="h-[100px] relative w-[40px] bg-[#548453] m-0 p-0">
              
            <div className="bg-transparent text-black absolute mt-[26px]  z-100">ddd</div>
            <div className="bg-transparent text-black absolute mt-[26px] ml-[100px]  z-100">ygggg</div>
            </div>
            <div
              className="bg-[#548453] p-5 mt-[-20px] "
              style={{
                clipPath:
                  'polygon(100% 100%, 100% 50%, 50% 50%, 0% 50%, 0% 100%, 50% 50%)',
                // 'polygon(100% 0%, 0% 0%, 0% 100%, 0% 100%, 50% 50%)',
              }}
            ></div>
          </div>
          <div></div>
        </div>
        <div className="ml-[-10px] w-[30px] mt-[-60px] z-100 h-[10px] bg-[#365535] rounded-bl-lg"></div>
      </div>
      <div className="ml-[20px] mb-[20px] w-full">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-2">Establishment</h3>
                      <p className="text-gray-600 mb-2">July 25, 1980</p>
                      <p className="text-gray-700">
                        Established as a joint venture between OFDC and M/s.
                        Sarada Enterprises
                      </p>
                    </div>
                  </div> */}

      {/* Top 2 */}

      {/* <div>
        <div className="grid grid-cols-5 gap-0 align-center">
          <div></div>
          <div className="pl-5">
            <div
              className="bg-[#548453] p-5"
              style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
            ></div>
            <div className=" relative h-[100px] w-[40px] bg-[#548453]  m-0 p-0">
            <div className="bg-transparent text-black absolute mt-[26px]   z-200">{lyear}</div>
            <div className="bg-transparent text-black absolute mt-[26px] ml-[-100px] z-200">{ltag}</div>
            </div>
            <div
              className="bg-[#548453] p-5 mt-[-20px]"
              style={{
                clipPath:
                  'polygon(100% 100%, 100% 50%, 50% 50%, 0% 50%, 0% 100%, 50% 50%)',
              }}
            ></div>
          </div>
          <div className="w-[200px] h-[40px] flex mt-15 z-100 ml-[-110px]">
            <div
              className="bg-[#6ea56c] p-5"
              style={{
                clipPath: 'polygon(0% 50%, 100% 100%, 100% 0%)', // flipped the arrow
              }}
            ></div>
            <div className="w-[200px] bg-[#6ea56c] rounded-tr-lg "></div>
          </div>
        </div>
        <div className="w-[30px] mt-[-60px] z-100 h-[10px] bg-[#365535] rounded-br-lg ml-[60px]"></div>
      </div> */}

      <div className="relative flex items-center justify-center mt-10 mb-10">
        {' '}
        <img src={blueR} alt="" className="" />{' '}
      </div>
      <div className="absolute mt-[-700px] ml-[900px] flex justify-center ">
        {' '}<div className="text-black text-3xl font-extrabold mr-[-20px] mt-[40px]">
        2
        </div>
        <div className="w-[400px] bg-[#7e118cc7] p-6 rounded-lg shadow-md ">
          <h3 className=" text-white text-xl mb-2 font-extrabold">
           2 Establishment
          </h3>
          <p className="text-white mb-2">July 25, 1980</p>
          <p className="text-white">
            Establixxxshed as a joint venture between OFDC and M/s. Sarada
            Enterprises
          </p>
        </div>
        
      </div>
      <div className="absolute mt-[-890px] ml-[150px] flex justify-center ">
        {' '}
        <div className="w-[400px] bg-[#244470d5] p-6 rounded-lg shadow-md ">
          <h3 className=" text-white text-xl mb-2 font-extrabold">
           1 Establishment
          </h3>
          <p className="text-white mb-2">July 25, 1980</p>
          <p className="text-white">
            Established as a joint venture between OFDC and M/s. Sarada
            Enterprises
          </p>
        </div>
        <div className="text-white text-3xl font-extrabold ml-[270px] mt-[40px]">
          1
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
{
  /* <div className='grid grid-cols-1 p-20 md:grid-cols-4 gap-4'>
        <div></div>
        <div></div>
        <div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md ">
              <h3 className="text-xl font-bold mb-2">Establishment</h3>
              <p className="text-gray-600 mb-2">July 25, 1980</p>
              <p className="text-gray-700">
                Established as a joint venture between OFDC and M/s. Sarada
                Enterprises
              </p>
            </div>
          </div>
      

        </div>
      </div>
      <div className='grid grid-cols-1 p-20 md:grid-cols-4 gap-4'>
      <div>
            <div className="bg-white p-6 rounded-lg shadow-md ">
              <h3 className="text-xl font-bold mb-2">Establishment</h3>
              <p className="text-gray-600 mb-2">July 25, 1980</p>
              <p className="text-gray-700">
                Established as a joint venture between OFDC and M/s. Sarada
                Enterprises
              </p>
            </div>
          </div>
        <img src={red} alt="" className="transform scale-x-[-1] " />{' '}
        <div>
          <div></div>
          <div></div>
        </div>
      </div> */
}
