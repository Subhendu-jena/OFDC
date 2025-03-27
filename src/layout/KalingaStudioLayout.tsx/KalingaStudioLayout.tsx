import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/about/Sidebar';
// import { Film } from 'lucide-react';
import KHeroSection from '../../components/KalingaStudio/KHeroSection';
import {  useEffect } from 'react';
import { paths } from '../../routes/Path';
const KalingaStudioLayout = () => {
  const title =  window.location.pathname;
  const navigate = useNavigate();
  const section = [
    {
      page: '/overview',
      subHead1: 'Established 1980',
      subHead2:
        'An ultra-modern, state-of-the-art film studio complex in the heart of Bhubaneswar, Odisha.',
      heading: 'Reimagining Cinema at Kalinga Studios',
      tag: 'Developments',
    },
    {
      page: '/objectives',
      subHead1: 'Our Mission',
      subHead2:
        ' Kalinga Studios is committed to elevating regional cinema through world-class infrastructure and innovative technology.',
      heading: "Driving the Future of Odisha's Cinema",
      tag: 'Objectives',
    },
    {
      page: '/studios-past-glory',
      subHead1: 'Studio’s Past Glory',
      heading: 'The Legacy of Odia Cinema World',
      subHead2:
        "From 'Sita Bibaha' in 1934 to the digital era, shaping the cinematic landscape of Odisha and beyond.",
      tag: 'History',
    },
    {
      page: '/board-of-directors',
      subHead1: 'Board of Directors',
      heading: 'Meet the Visionaries',
      subHead2:
        'Meet the visionary leaders guiding the Odisha Film Development Corporation Ltd. toward excellence in film production and promotion.',
      tag: 'Directors',
    },
    {
      page: '/whos-who',
      subHead1: 'Odisha Film Development Corporation',
      heading: "Who's Who",
      subHead2: 'Find officials and their contact information',
      tag: 'Officials',
    },
  ];
  const menuItems = [
    { label: 'Overview', url: paths.overview },
    { label: 'Objectives', url: paths.objectives },
    { label: 'Studios Past Glory', url: paths.studiosPastGlory },
    { label: 'Board of Directors', url: paths.boardOfDirectors },
    { label: "Who's Who", url: paths.whosWho },
  ];
  const currentSection = section.find((sec) => sec.page === title);
  useEffect (() => {
    // console.log(currentSection);
  },[navigate]
  )
  return (
    <div className="w-full">
        {currentSection ? (
        <KHeroSection
          subHead1={currentSection.subHead1}
          subHead2={currentSection.subHead2}
          heading={currentSection.heading}
          tag={currentSection.tag}
          link=''
        />
      ) : (
        <p>No section found for "{title}"</p>
      )}
  

      {/* Main Content - Ensure it starts after the fixed section */}
      <div className="flex bg-white flex-col lg:flex-row min-h-screen z-30 ">
        <Sidebar menuItems={menuItems}/>

        <main className="flex-1 relative z-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default KalingaStudioLayout;
