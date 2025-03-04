import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/about/Sidebar';
const AboutLayout: React.FC = () => {
  return (
    <div className="flex pt-28 min-h-screen">
      <Sidebar />

      <main className=" flex-1">
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AboutLayout;
