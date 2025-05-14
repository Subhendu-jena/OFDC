import { Link, Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/about/Sidebar';
import KHeroSection from '../../components/KalingaStudio/KHeroSection';
import {  useEffect } from 'react';
import { paths } from '../../routes/Path';
import { Home } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Mail } from 'lucide-react';
import { UserPlus } from 'lucide-react';
import { User } from 'lucide-react';
import { useFontSize } from '../../components/home/FontSizeContext';
const AdminLayout = () => {
  const title =  window.location.pathname;
  const navigate = useNavigate();
  const section = [
    {
      page: '/admin-dashboard',  
      subHead1: 'Established 1980',
      subHead2:
        'An ultra-modern, state-of-the-art film studio complex in the heart of Bhubaneswar, Odisha.',
      heading: 'Reimagining Cinema at Kalinga Studios',
      tag: 'Developments',
    },
    {
      page: '/all-bookings',
      subHead1: 'Our Mission',
      subHead2:
        ' Kalinga Studios is committed to elevating regional cinema through world-class infrastructure and innovative technology.',
      heading: "Driving the Future of Odisha's Cinema",
      tag: 'Objectives',
    },
    {
      page: '/payment-details',
      subHead1: 'Studio’s Past Glory',
      heading: 'The Legacy of Odia Cinema World',
      subHead2:
        "From 'Sita Bibaha' in 1934 to the digital era, shaping the cinematic landscape of Odisha and beyond.",
      tag: 'History',
    },
    {
      page: '/calender',
      subHead1: 'Board of Directors',
      heading: 'Meet the Visionaries',
      subHead2:
        'Meet the visionary leaders guiding the Odisha Film Development Corporation Ltd. toward excellence in film production and promotion.',
      tag: 'Directors',
    },
  ];
  const menuItems = [
    { label: 'Admin Dashboard', url: paths.adminDashboard },
    { label: 'All Bookings', url: paths.allBookings },
    { label: 'Payment Details', url: paths.paymentDetails },
    { label: "Calender", url: paths.calender },
  ];
  const currentSection = section.find((sec) => sec.page === title);
  useEffect (() => {
    // console.log(currentSection);
  },[navigate]
  )
  const TopHeader = () => {
    // const [isAdmin, setIsAdmin] = useState(false);
    // const [isLoggedIn, setisLoggedIn] = useState(false);
    // console.log(setIsAdmin, setisLoggedIn);
    const { increaseFontSize, decreaseFontSize, resetFontSize } = useFontSize();
    return (
      <div className="w-full text-white bg-[#11161F] py-2 text-sm  hidden md:block z-50">
        <div className=" flex justify-between px-16 items-center">
          <div className="flex items-center ">
            <span className="hover:text-orange-500 cursor-pointer mr-4">
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
            <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
              <MessageCircle size={16} />
              <span>Grievance</span>
            </div>
            <span>/</span>
            <div className="flex items-center hover:text-orange-500 cursor-pointer space-x-1">
              <MessageSquare size={16} />
              <span>Feedback</span>
            </div>
            <span>/</span>
            <Link
              to={paths.contactUs}
              className="flex hover:text-orange-500 cursor-pointer items-center space-x-1"
            >
              <Mail size={16} />
              <span>Contact Us</span>
            </Link>
            {/* <div
              onClick={() => {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('userID');
                sessionStorage.removeItem('role');
              }}
              className="flex hover:text-orange-500 cursor-pointer items-center space-x-1"
            >
              <Mail size={16} />
              <span>Logout</span>
            </div> */}
            <span>/</span>
            <Link
              to="/register"
              className="flex hover:text-orange-500 cursor-pointer items-center space-x-1"
            >
              <UserPlus size={16} />
              <span>Register</span>
            </Link>
            <span>/</span>
            <Link
              to="/login"
              className="flex hover:text-orange-500 cursor-pointer items-center space-x-1"
            >
              <User size={16} />
              <span>Login</span>
            </Link>
            {/* {!isAdmin ? (
              !isLoggedIn ? (
                <>
                  <span>/</span>
                  <Link
                    to={paths.userDashboard}
                    className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer"
                  >
                    <User size={16} />
                    <span>User Dashboard</span>
                  </Link>
                </>
              ) : (
                <>
                  <span>/</span>
                  <Link
                    to="/"
                    className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer"
                  >
                    <User size={16} />
                    <span>User Login</span>
                  </Link>
                </>
              )
            ) : !isLoggedIn ? (
              <>
                <span>/</span>
                <Link
                  to={paths.dashboard}
                  className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer"
                >
                  <Users size={16} />
                  <span>Dashboard</span>
                </Link>
              </>
            ) : (
              <>
                <span>/</span>
                <Link
                  to="/"
                  className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer"
                >
                  <Users size={16} />
                  <span>Dept. Login</span>
                </Link>
              </>
            )} */}
          </div>
        </div>
      </div>
    );
  };
  return (
<><TopHeader />
    <div className="w-full">
        {currentSection ? (
        <KHeroSection
          subHead1=''
          subHead2=''
          heading="Admin Dashboard"
          tag=''
          link=''
          user={true}
        />
     ):(<div className=''></div>) } 
  

      {/* Main Content - Ensure it starts after the fixed section */}
      <div className="flex bg-white flex-col lg:flex-row min-h-screen z-30 ">
        <Sidebar menuItems={menuItems}/>

        <main className="flex-1 relative z-20">
          <Outlet />
        </main>
      </div>
    </div></>
  );
};

export default AdminLayout;
