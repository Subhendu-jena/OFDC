import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/about/Sidebar';
import { Film } from 'lucide-react';
const AboutLayout: React.FC = () => {
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-black flex items-center justify-center z-10">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/OFDC-MISSION.png')] bg-cover bg-center opacity-60"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 mt-8">
          <Film className="text-3xl md:text-5xl font-bold text-white mb-4" size={50}/>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Odisha Film Development Corporation
          </h1>
        </div>
      </div>

      {/* Main Content - Ensure it starts after the fixed section */}
      <div className="flex bg-gray-100 flex-col lg:flex-row min-h-screen z-30 pt-[50vh]">
        <Sidebar />

          <main className="flex-1 relative z-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AboutLayout;
