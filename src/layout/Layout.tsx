import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      <main className=" w-full flex-1 pb-14 ">
        <div className="w-full">
          <Outlet />
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
