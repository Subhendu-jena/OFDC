import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/about/Sidebar';
// import { Film } from 'lucide-react';
import KHeroSection from '../../components/KalingaStudio/KHeroSection';
import { useEffect } from 'react';
import { paths } from '../../routes/Path';
import bg from '../../../public/Odisha Climate.jpeg';
const DiscoverOdishaLayout = () => {
  // const [searchParams] = useSearchParams();
  const title = window.location.pathname;
  const navigate = useNavigate();
  const menuItems = [
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
  ];
  const section = [
    {
      page: '/odisha-indias-best-kept-secret',
      subHead1: 'Established 1980',
      subHead2:
        'An ultra-modern, state-of-the-art film studio complex in the heart of Bhubaneswar, Odisha.',
      heading: "ODISHA : India's Best Kept Secret",
      tag: 'Odisha',
    },
    {
      page: '/echoes-of-history',
      subHead1: 'Our Mission',
      subHead2:
        ' Kalinga Studios is committed to elevating regional cinema through world-class infrastructure and innovative technology.',
      heading: 'Echoes of History',
      tag: 'Odisha',
    },
    {
      page: '/climate',
      subHead1: 'Studio’s Past Glory',
      heading: 'Climate',
      subHead2:
        "From 'Sita Bibaha' in 1934 to the digital era, shaping the cinematic landscape of Odisha and beyond.",
      tag: 'Odisha',
    },
    {
      page: '/geographical-feature',
      subHead1: 'Board of Directors',
      heading: 'Geographical Feature',
      subHead2:
        'Meet the visionary leaders guiding the Odisha Film Development Corporation Ltd. toward excellence in film production and promotion.',
      tag: 'Odisha',
    },
    {
      page: '/cultural-legacy',
      subHead1: 'Odisha Film Development Corporation',
      heading: 'Cultural Legacy',
      subHead2: 'Find officials and their contact information',
      tag: 'Odisha',
    },
    {
      page: '/major-festivals',
      subHead1: 'Odisha Film Development Corporation',
      heading: 'Major Festivals',
      subHead2: 'Find officials and their contact information',
      tag: 'Odisha',
    },
    {
      page: '/cinematic-heritage',
      subHead1: 'Odisha Film Development Corporation',
      heading: 'Cinematic Heritage',
      subHead2: 'Find officials and their contact information',
      tag: 'Odisha',
    },
    {
      page: '/whos-who',
      subHead1: 'Odisha Film Development Corporation',
      heading: 'Explore Odisha',
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
      {/* <div className="fixed top-0 left-0 w-full h-[50vh] bg-black flex items-center justify-center z-10">
        <div className="absolute inset-0 bg-[url('/OFDC-MISSION.png')] bg-cover bg-center opacity-60"></div>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-20 flex flex-col items-center text-center px-4 mt-8">
          <Film className="text-3xl md:text-5xl font-bold text-white mb-4" size={50}/>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Odisha Film Development Corporation
          </h1>
        </div>
      </div> */}
      {currentSection ? (
        <KHeroSection
          subHead1={currentSection.subHead1}
          subHead2={currentSection.subHead2}
          heading={currentSection.heading}
          tag={currentSection.tag}
          vdo="https://cdn.pixabay.com/video/2023/04/11/158349-816637197_large.mp4"
          link="https://odishatourism.gov.in/content/tourism/en.html#exploreOdisha "
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
