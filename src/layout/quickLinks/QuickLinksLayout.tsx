import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/about/Sidebar';
import KHeroSection from '../../components/KalingaStudio/KHeroSection';
import { useEffect } from 'react';
import { paths } from '../../routes/Path';
import bg from '../../assets/KalingaAssets/8.jpeg';
const QuickLinksLayout = () => {
  const title = window.location.pathname;
  const navigate = useNavigate();
  const menuItems = [
    { label: 'Publications', url: paths.publications },
    { label: 'Tender', url: paths.tender },
    {
      label: 'RTI',
      url: 'https://rtiodisha.gov.in/pa/T1RILzE5LzEzNDUvNw==',
      target: '_blank',
    },
    { label: 'Feedback', url: '/contact-us' },
    { label: 'Contact Us', url: paths.contactUs },
    { label: 'Privacy Policy', url: paths.policy },
     ];
  const section = [
    {
      page: '/publications',
      // subHead1: 'Studio’s Past Glory',
      // heading: 'Vault of Preserved Films',
      // subHead2:
      //   "From 'Sita Bibaha' in 1934 to the digital era, shaping the cinematic landscape of Odisha and beyond.",
      // tag: 'Odisha',
    },
    {
      page: '/tender',
    },
    {
      page: '/policy',
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
          subHead1=""
          subHead2=""
          heading="Quick Links"
          tag="world"
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

export default QuickLinksLayout;
