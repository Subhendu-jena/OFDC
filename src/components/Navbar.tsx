import {
  User,
  Home,
  // MessageCircle,
  // MessageSquare,
  Mail,
  UserPlus,
  ChevronDown,
  Menu,
  X,
  // Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { paths } from '../routes/Path';
import { Link, useNavigate } from 'react-router-dom';
import { MenuItem } from '../types/global';
import { useFontSize } from './home/FontSizeContext';
import { LogOut } from 'lucide-react';
import { LayoutDashboardIcon } from 'lucide-react';
import OFDCLOGO from '.././assets/Logo/OFDC Logo White.png';
export const TopHeader = () => {
  const id = sessionStorage.getItem('userID');
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  const { increaseFontSize, decreaseFontSize, resetFontSize } = useFontSize();
  const navigate = useNavigate();
  return (
    <div className="w-full text-white bg-[#11161F] py-2 text-sm hidden md:block">
      <div className=" flex justify-between px-16 items-center">
        <div className="flex items-center ">
          <span
            className="hover:text-orange-500 cursor-pointer mr-4"
            onClick={() => navigate(paths.home)}
          >
            Skip to main Content /
          </span>
          <div className="flex space-x-4">
            <button
              onClick={decreaseFontSize}
              className="hover:text-orange-500 cursor-pointer"
            >
              A-
            </button>
            <button
              onClick={resetFontSize}
              className="hover:text-orange-500 cursor-pointer"
            >
              A
            </button>
            <button
              onClick={increaseFontSize}
              className="hover:text-orange-500 cursor-pointer"
            >
              A+
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to={paths.home}
            className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer"
          >
            <Home size={16} />
            <h5>Home</h5>
          </Link>
          <span>/</span>
          {/* <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
            <MessageCircle size={16} />
            <span>Grievance</span>
          </div> */}
          {/* <span>/</span>
          <div className="flex items-center hover:text-orange-500 cursor-pointer space-x-1">
            <MessageSquare size={16} />
            <span>Feedback</span>
          </div> */}
          {/* <span>/</span> */}
          <Link
            to={paths.contactUs}
            className="flex hover:text-orange-500 cursor-pointer items-center space-x-1"
          >
            <Mail size={16} />
            <span>Contact Us</span>
          </Link>
          <span>/</span>
          {id ? (
            <Link
              to={paths.RoleBasedRedirect}
              className="flex hover:text-orange-500 cursor-pointer items-center space-x-1"
            >
              <LayoutDashboardIcon size={16} />
              <span>Go to Dashboard</span>
            </Link>
          ) : (
            <Link
              to="/register"
              className="flex hover:text-orange-500 cursor-pointer items-center space-x-1"
            >
              <UserPlus size={16} />
              <span>Register</span>
            </Link>
          )}
          <span>/</span>
          {id ? (
            <Link
              to=" "
              onClick={() => {
                sessionStorage.removeItem('userID');
                sessionStorage.removeItem('role');
              }}
              className="flex hover:text-orange-500 cursor-pointer items-center space-x-1"
            >
              <LogOut size={16} />
              <span>Log Out</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex hover:text-orange-500 cursor-pointer items-center space-x-1"
            >
              <User size={16} />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const menuItems: MenuItem[] = [
    {
      label: 'About Us',
      url: paths.aCursoryLook,
      children: [
        { label: ' A Cursory Look', url: paths.aCursoryLook },
        { label: 'Our Vision & Mission', url: paths.ourVisionMission },
        { label: 'Achievments', url: paths.achievments },
        { label: 'Leadership', url: paths.leadership },
        { label: 'Former Chairpersons', url: paths.formerChairpersons },
        {
          label: 'Former Managing Directors',
          url: paths.formerManagingDirectors,
        },
        { label: "Who's Who", url: paths.whoIsWho },
      ],
    },
    {
      label: 'Film Eco System',
      url: paths.flimEcoSystem,
      children: [
        { label: 'Film Policy', url: paths.flimEcoSystem },
        { label: 'Policy Guidelines', url: paths.policyGuidelines },
        { label: 'Odisha and Silver Screen', url: paths.odishaSilverScreen },
      ],
    },
    {
      label: 'Location Directory',
      url: paths.locationDirectory,
      children: [
        { label: 'Location Category', url: paths.locationDirectory },
        // { label: 'Book a Location', url: '#' },
        {
          label: 'Movie Shooting Permissions',
          url: 'https://investodisha.gov.in/goswift/ServiceDetails.aspx?enc=bJ1nLSOgxhIyHc4RPqgFjV0+I1NqvCn1RkVLG8RuJGLPkDO/ZKgIlgUXr1Wvp8GGiMXct0/yz+1HrhWGwFvG/EHWAIByvuhiuflkzkRUa0cPjIJq5NVE65iyeTM/mWEl',
          target: '_blank',
        },
      ],
    },
    {
      label: 'Talent Directory',
      url: paths.talentlist,
      children: [
        { label: 'Talent List', url: paths.talentlist },
        { label: 'Individual', url: '#' },
        { label: 'Group', url: '#' },
        { label: 'Agency', url: '#' },
        { label: 'Register as Talent', url: '#' },
      ],
    },
    {
      label: 'Odia Film Archive',
      url: paths.archivesInsight,
      children: [
        { label: 'Archives Insight', url: paths.archivesInsight },
        { label: 'Key Priorities', url: paths.keyPriorities },
        { label: 'Vault of Preserved Films', url: paths.vaultofPreservedFilms },
        { label: 'Odia Film Anthology', url: paths.odiaFilmAnthology },
        { label: 'Archival Gallery', url: paths.archivalGallery },
      ],
    },
    {
      label: 'Discover Odisha',
      url: paths.odishaIndiasBestKeptSecret,
      children: [
        {
          label: "ODISHA : India's Best Kept Secret",
          url: paths.odishaIndiasBestKeptSecret,
        },
        { label: 'Echoes of History', url: paths.echoesofhistory },
        { label: 'Climate', url: paths.climate },
        { label: 'Geographical Feature', url: paths.geographicalFeature },
        { label: 'Cultural Legacy', url: paths.culturalLegacy },
        { label: 'Major Festivals', url: paths.majorFestivals },
        { label: 'Cinematic Heritage', url: paths.cinematicHeritage },
        // { label: 'Explore Odisha', url: },
      ],
    },
    {
      label: 'Kalinga Studio',
      url: paths.overview,
      children: [
        { label: 'Overview', url: paths.overview },
        { label: 'Objectives', url: paths.objectives },
        { label: 'Studios Past Glory', url: paths.studiosPastGlory },
        { label: 'Board of Directors', url: paths.boardOfDirectors },
        { label: "Who's Who", url: paths.whosWho },
      ],
    },
  ];
  const [openSubMenus, setOpenSubMenus] = useState<number[]>([]);
  const toggleSubMenu = (index: number) => {
    setOpenSubMenus((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const id = sessionStorage.getItem('userID');
  return (
    <>
      <div
        className={`w-full fixed text-white top-0 z-100 shadow-md px-12 py-4 transition-all duration-300 lg:text-sm ${
          isScrolled ? 'bg-[#11161F]' : 'bg-[#00000085] md:mt-9'
        }`}
      >
        <div className=" flex gap-4 justify-between items-center px-0 lg:px-4">
          <div className="flex items-center max-w-[400px]">
           
              <Link to="/" className="flex items-center">
                <img src={OFDCLOGO} alt="OFDC Logo" className="h-12  w-auto" />
                <div className="ml-3 hidden sm:block">
                  <h3 className="text-sm md:text-lg  font-semibold">
                    Odisha Film Development Corporation
                  </h3>
                </div>
              </Link>
          
          </div>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => {
              mobileMenuOpen
                ? setMobileMenuOpen(false)
                : setMobileMenuOpen(true);
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4 md:space-x-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.url}
                  className="flex text-sm items-center md:text-sm hover:text-orange-400 transition duration-500"
                >
                  {item.label}
                  {item.children && (
                    <span className="ml-1">
                      <ChevronDown size={16} />
                    </span>
                  )}
                </Link>
                {item.children && (
                  <div className="absolute left-0 hidden group-hover:block w-64 bg-transparent transition-all duration-500 mt-0 py-2 z-10">
                    {/* Dropdown menu */}
                    <div className="flex flex-col w-full bg-white mt-9 rounded-2xl shadow-2xl p-2">
                      {/* Down arrow */}
                      <div className="left-1/5 transform -translate-x-1/2 bottom-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-b-white border-l-transparent border-r-transparent transition-all duration-300 ml-8 -mt-[15px]"></div>

                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.url}
                          target={child.target ?? '_self'}
                          className="block px-4 py-2 text-sm text-black hover:text-orange-500 transition-all duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile sidebar menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-[#11161F] shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <Link to="/" className="flex items-center">
              <img src={OFDCLOGO} alt="OFDC Logo" className="h-12 w-auto" />
            </Link>
          </div> */}

          {/* Mobile header links */}
          <div className="p-4 border-y border-gray-700 mt-20 md:mt-40">
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)} // 👈 close sidebar
                className="flex items-center space-x-1 text-white hover:text-orange-500"
              >
                <Home size={16} />
                <span className="text-sm">Home</span>
              </Link>
              {id ? (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)} // 👈 close sidebar
                  className="flex items-center space-x-1 text-white hover:text-orange-500"
                >
                  <User size={16} />
                  <span className="text-sm">Login</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)} // 👈 close sidebar
                  className="flex items-center space-x-1 text-white hover:text-orange-500"
                >
                  <User size={16} />
                  <span className="text-sm">Login</span>
                </Link>
              )}
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)} // 👈 close sidebar
                className="flex items-center space-x-1 text-white hover:text-orange-500"
              >
                <UserPlus size={16} />
                <span className="text-sm">Register</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)} // 👈 close sidebar
                className="flex items-center space-x-1 text-white hover:text-orange-500"
              >
                <Mail size={16} />
                <span className="text-sm">Contact</span>
              </Link>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="py-2">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-700">
                <div
                  className="flex justify-between items-center px-4 py-3 text-white"
                  onClick={() => item.children && toggleSubMenu(index)}
                >
                  <Link to={item.url} className="hover:text-orange-500">
                    {item.label}
                  </Link>
                  {item.children && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openSubMenus.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>

                {item.children && (
                  <div
                    className={`bg-[#1a202c] overflow-hidden transition-all duration-300 ${
                      openSubMenus.includes(index) ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        to={child.url}
                        onClick={() => setMobileMenuOpen(false)} // 👈 close sidebar
                        className="block px-8 py-2 text-sm text-gray-300 hover:text-orange-500"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <header className="w-full z-100 relative">
      <TopHeader />
      <MainHeader />
    </header>
  );
};

export default Navbar;
