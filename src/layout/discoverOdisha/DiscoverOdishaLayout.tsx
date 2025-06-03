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
      subHead1: 'Odisha : India’s Best Kept Secret',
      subHead2:'Odisha: India’s unexplored treasure- the place which is home to ancient marvels, rich traditions, and stunning landscapes.',
      heading: "Discover Odisha.",
      tag: 'Odisha',
    },
    {
      page: '/echoes-of-history',
      subHead1: 'Odisha : India’s Best Kept Secret',
      subHead2:'Odisha’s history reverberates—an eternal song of heritage and identity.',
      heading: 'Echoes of History',
      tag: 'Odisha',
    },
    {
      page: '/climate',
      subHead1: 'Odisha : India’s Best Kept Secret',
      heading: 'Climate',
      subHead2:"Odisha thrives in its seasons—melodies of monsoon, golden rays of sunshine, and tropical allure.",
      tag: 'Odisha',
    },
    {
      page: '/geographical-feature',
      subHead1: 'Odisha : India’s Best Kept Secret',
      heading: 'Geographical Feature',
      subHead2:'Explore Odisha’s natural mosaic—mountains, mangroves, plains, and pristine shores.',
      tag: 'Odisha',
    },
    {
      page: '/cultural-legacy',
      subHead1: 'Odisha : India’s Best Kept Secret',
      heading: 'Cultural Legacy',
      subHead2:
        'Odisha’s traditions dance through centuries, weaving history with vibrant creativity.',
      tag: 'Odisha',
    },
    {
      page: '/major-festivals',
      subHead1: 'Odisha : India’s Best Kept Secret',
      heading: 'Major Festivals',
      subHead2:
        ' Odisha’s festive heartbeat pulses with age-old traditions and joyous gatherings.',
      tag: 'Odisha',
    },
    {
      page: '/cinematic-heritage',
      subHead1: 'Odisha : India’s Best Kept Secret',
      heading: 'Cinematic Heritage',
      subHead2:
        'Odia cinema: weaving heritage, heart, and history into every frame.',
      tag: 'Odisha',
    },
    {
      page: '/whos-who',
      subHead1: 'Odisha : India’s Best Kept Secret',
      heading: 'Explore Odisha',
      subHead2: 'Find officials and their contact information',
      tag: 'Odisha',
      target:true
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
          vdo="https://cdn.pixabay.com/video/2023/04/11/158349-816637197_large.mp4"
          link="https://odishatourism.gov.in/content/tourism/en.html#exploreOdisha "
          img={bg}
        />
      ) : (
        <div className="mt-20"></div>
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
