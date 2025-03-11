import { useState } from 'react';
import { MoveRightIcon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { paths } from '../../routes/Path';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const menuItems = [
    { label: ' A Cursory Look', url: paths.aCursoryLook },
    { label: 'Our Vision & Mission', url: paths.ourVisionMission },
    { label: 'Achievments', url: paths.achievments },
    { label: 'Leadership', url: paths.leadership },
    { label: 'Former Chairpersons', url: paths.formerChairpersons },
    { label: 'Former Managing Directors', url: paths.formerManagingDirectors},
    { label: "Who's Who", url: paths.whoIsWho },
  ];

  return (
    <div className=" lg:w-1/4 z-10 relative">
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
        className={`bg-white h-[99%] p-4 rounded-lg px-4 shadow-md 
          ${isOpen ? 'block' : 'hidden'} lg:block`}
      >
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center px-4 py-2 rounded-md cursor-pointer ${
                path.includes(item.url)
                  ? 'bg-red-500 text-white'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              <Link to={item.url} className="flex-1">
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
              <a href="/contact" className="underline">
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
