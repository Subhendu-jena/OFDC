import { MoveRightIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { paths } from '../../routes/Path';

const Sidebar = () => {
  const menuItems = [
    { label: 'Odisha at a Glance', url:paths.odishaAtGlance },
    { label: 'Climate', url: paths.climate },
    { label: 'Geographical Features', url: paths.geographicalFeatures },
    { label: 'Bio-Diversity', url:paths.bioDiversity },
    { label: 'Cultural Heritage', url: paths.cultureHeritage},
    { label: 'Religion & Culture', url: paths.religionCulture },
  ];
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <div className="w-full lg:w-1/4 xl:w-1/4 p-4">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        {/* Sidebar Menu */}
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
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
