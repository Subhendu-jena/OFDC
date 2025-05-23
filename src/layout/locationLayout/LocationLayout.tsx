import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/about/Sidebar';
import KHeroSection from '../../components/KalingaStudio/KHeroSection';
import { useEffect } from 'react';
import { paths } from '../../routes/Path';
import bg from "../../assets/pexels-pixabay-315998 (1).jpg"
const LocationLayout = () => {
  const title = window.location.pathname;
  const navigate = useNavigate();
  const menuItems = [
    { label: 'Location Category', url: paths.locationDirectory },
    // { label: 'Book a Location', url: '#' },
    { label: 'Location Booking Guideline', url: 'https://investodisha.gov.in/goswift/ServiceDetails.aspx?enc=bJ1nLSOgxhIyHc4RPqgFjV0+I1NqvCn1RkVLG8RuJGLPkDO/ZKgIlgUXr1Wvp8GGiMXct0/yz+1HrhWGwFvG/EHWAIByvuhiuflkzkRUa0cPjIJq5NVE65iyeTM/mWEl' , target:"_blank"  }
  ];
  const section = [
    {
      page: '/location-directory',
      subHead1: 'Established 1980',
      subHead2:
        'An ultra-modern, state-of-the-art film studio complex in the heart of Bhubaneswar, Odisha.',
      heading: "Talent List",
      tag: 'Odisha',
    },
    {
      page: '/location-details',
      subHead1: 'Our Mission',
      subHead2:
        ' Kalinga Studios is committed to elevating regional cinema through world-class infrastructure and innovative technology.',
      heading: 'Key Priorities',
      tag: 'Odisha',
    },
    {
      page: '/vault-of-preserved-films',
      subHead1: 'Studio’s Past Glory',
      heading: 'Vault of Preserved Films',
      subHead2:
        "From 'Sita Bibaha' in 1934 to the digital era, shaping the cinematic landscape of Odisha and beyond.",
      tag: 'Odisha',
    },
    {
      page: '/odia-film-anthology',
      subHead1: 'Board of Directors',
      heading: 'Odia Film Anthology',
      subHead2:
        'Meet the visionary leaders guiding the Odisha Film Development Corporation Ltd. toward excellence in film production and promotion.',
      tag: 'Odisha',
    },
    {
      page: '/archival-gallery',
      subHead1: 'Odisha Film Development Corporation',
      heading: 'Archival Gallery',
      subHead2: 'Find officials and their contact information',
      tag: 'Odisha',
    },
  ];
  const currentSection = section.find((sec) => sec.page === title);
  useEffect(() => {
    // console.log(currentSection);
  }, [navigate]);
  return (
    <div className="w-full">
      {currentSection ? (
        <KHeroSection
          subHead1={currentSection.subHead1}
          subHead2={currentSection.subHead2}
          heading="Location Directory"
          tag={currentSection.tag}
          // vdo="https://cdn.pixabay.com/video/2023/04/11/158349-816637197_large.mp4"
          link=""
          img={bg}
          
        />
      ) : (
        <p>No section found for "{title}"</p>
      )}

      {/* Main Content - Ensure it starts after the fixed section */}
      <div className="flex bg-white flex-col lg:flex-row min-h-screen z-30 ">
        <Sidebar menuItems={menuItems} />

        <main className="flex-1 relative z-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LocationLayout;
