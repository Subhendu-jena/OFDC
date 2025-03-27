import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/about/Sidebar';
import KHeroSection from '../../components/KalingaStudio/KHeroSection';
import { useEffect } from 'react';
import { paths } from '../../routes/Path';
import bg from "../../assets/KalingaAssets/8.jpeg"
const DiscoverOdishaLayout = () => {
  const title = window.location.pathname;
  const navigate = useNavigate();
  const menuItems = [
    { label: 'Archives Insight', url: paths.archivesInsight },
    { label: 'Key Priorities', url: paths.keyPriorities },
    { label: 'Vault of Preserved Films', url: paths.vaultofPreservedFilms },
    { label: 'Odia Film Anthology', url: paths.odiaFilmAnthology },
    { label: 'Archival Gallery', url: paths.archivalGallery },
  ];
  const section = [
    {
      page: '/archives-insight',
      subHead1: 'Established 1980',
      subHead2:
        'An ultra-modern, state-of-the-art film studio complex in the heart of Bhubaneswar, Odisha.',
      heading: "Archives Insight",
      tag: 'Odisha',
    },
    {
      page: '/key-priorities',
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
          heading={currentSection.heading}
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

export default DiscoverOdishaLayout;
