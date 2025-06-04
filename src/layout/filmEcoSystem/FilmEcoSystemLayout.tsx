import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/about/Sidebar';
import KHeroSection from '../../components/KalingaStudio/KHeroSection';
import { useEffect, useState } from 'react';
import { paths } from '../../routes/Path';
import bg from '../../assets/162597.jpg';
import { filmPolicy } from '../../config/strapiController';
import { STRAPI_API_BASE_URL } from '../../config/httpClient';
const FilmEcoSystemLayout = () => {
  const title = window.location.pathname;
  const navigate = useNavigate();
  const menuItems = [
    { label: 'Film Policy', url: paths.filmEcoSystem },
    { label: 'Policy Guidelines', url: paths.policyGuidelines },
    { label: 'Odisha and Silver Screen', url: paths.odishaSilverScreen },
  ];
  const section = [
    {
      page: '/film-eco-system',
      subHead1: 'Established 1980',
      subHead2:
        'An ultra-modern, state-of-the-art film studio complex in the heart of Bhubaneswar, Odisha.',
      heading: 'Talent List',
      tag: 'Odisha',
    },
    {
      page: '/policy-guidelines',
      subHead1: 'Our Mission',
      subHead2:
        ' Kalinga Studios is committed to elevating regional cinema through world-class infrastructure and innovative technology.',
      heading: 'Key Priorities',
      tag: 'Odisha',
    },
    {
      page: '/odisha-silver-screen',
      subHead1: 'Studio’s Past Glory',
      heading: 'Vault of Preserved Films',
      subHead2:
        "From 'Sita Bibaha' in 1934 to the digital era, shaping the cinematic landscape of Odisha and beyond.",
      tag: 'Odisha',
    },
  ];
  const currentSection = section.find((sec) => sec.page === title);
  useEffect(() => {
    // console.log(currentSection);
  }, [navigate]);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await filmPolicy();

        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching film policy:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data, 'urll');
  const url = STRAPI_API_BASE_URL + data[0]?.filmPolicyDocs?.url;

  return (
    <div className="w-full">
      {currentSection ? (
        <KHeroSection
          subHead1="Eco System"
          subHead2="Odisha drives cinematic growth—supporting filmmakers, infrastructure, and opportunities through a thriving, film-friendly ecosystem."
          heading="Film Eco System"
          tag="Eco System"
          // vdo="https://cdn.pixabay.com/video/2023/04/11/158349-816637197_large.mp4"
          link={url}
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

export default FilmEcoSystemLayout;
