import { Mail, MapPinXInside, PhoneCallIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/Map';

const ContactUs: React.FC = () => {
  return (
    <div className="w-full">
      <section
        className="text-light text-center bg-cover bg-no-repeat relative flex justify-center items-center h-[280px]"
        style={{
          backgroundImage:
            "url('https://ofdc.octamy.com/wp-content/uploads/2020/09/breadcrumb.jpg')",
        }}
      >
        <div className=" mx-auto pt-4">
          <h2 className="heading-title text-white text-5xl font-bold mb-2">
            CONTACT
          </h2>
          <ol className=" flex justify-center space-x-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-gray-300">
                Home -
              </Link>
            </li>
            <li className="text-gray-300 ">Contact</li>
          </ol>
        </div>
      </section>
      <section className=" bg-gray-200 pt-16 pb-8 w-full flex justify-center ">
        <div className="flex md:flex-row max-w-5xl flex-col gap-2">
          <div className=" bg-white/70 flex flex-col justify-center items-center rounded-md group  relative hover:border hover:border-red-400 hover:border-b-2 hover:border-t-0 hover:border-x-0 w-[400px] h-[200px] ">
            <div className="bg-red-400 rounded-full p-4 mt-[-190px] absolute">
              <MapPinXInside  className="text-white group-hover:animate-pulse" size={50} />
            </div>
            <div className=' text-2xl font-semibold pb-3'>Visit Us Anytime
            </div>
            <div className='text-xl'>Odisha</div>
          </div>
          <div className=" bg-white/70 flex flex-col justify-center items-center  rounded-md group  relative border border-red-400 border-b-2 border-t-0 border-x-0 w-[400px] h-[200px] ">
            <div className="bg-red-400 rounded-full p-4 mt-[-190px] absolute">
              <Mail  className="text-white animate-pulse" size={50} />
            </div>
            <div className=' text-2xl font-semibold pb-3'>Send a Email</div>
            <div className='text-xl'>filmodisha@gmail.com</div>
          </div>
          <div className=" bg-white/70 flex flex-col justify-center items-center  rounded-md group  relative hover:border hover:border-red-400 hover:border-b-2 hover:border-t-0 hover:border-x-0 w-[400px] h-[200px] ">
            <div className="bg-red-400 rounded-full p-4 mt-[-190px] absolute">
              <PhoneCallIcon className="text-white group-hover:animate-pulse" size={50} />
            </div>
            <div className=' text-2xl font-semibold pb-3'>Call Center</div>
            <div className='text-xl'>+91000000000</div>
          </div>
         
        </div>
      </section>
      <section>
        <MapComponent height='500px' />
      </section>
    </div>
  );
};

export default ContactUs;
