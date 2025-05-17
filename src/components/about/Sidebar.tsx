import { useState } from 'react';
import { MoveRightIcon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from '../../types/global';

const Sidebar = ({menuItems} : { menuItems: MenuItem[] })=> {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className=" lg:w-[22%] z-10 relative">
      {/* Mobile Toggle Button */}
      <div className='lg:hidden flex justify-end w-full'>
        <button
          className=" flex items-center p-2 bg-red-500 text-white rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Sidebar Menu */}
      <div
        className={`bg-white h-[100%] pt-8 px-2
          ${isOpen ? 'block' : 'hidden'} lg:block`}
      >
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center px-4 py-2 rounded-md cursor-pointer overflow-hidden ${
                path.includes(item.url)
                  ? 'bg-red-500 text-white'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              <Link to={item.url} target={item.target ?? ''} className="flex-1">
                {item.label}
              </Link>
              <MoveRightIcon />
            </li>
          ))}
        </ul>

        {/* Help Card */}
        <div className="bg-red-500 text-white p-4 mt-6 rounded-lg shadow-md flex items-start">
          <div className="mr-3">
            <i className="flaticon-question text-3xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              <a href="/contact-us" className="underline">
                Get Any Help?
              </a>
            </h3>
            <p className="text-sm">
              Please feel free to contact our team for any questions and
              concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
