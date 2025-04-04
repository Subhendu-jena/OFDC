import EqipmentDirectory from '../components/home/EqipmentDirectory';
import HeroSection from '../components/home/HeroSection';
import LatestVideo from '../components/home/LatestVideo';
import LocationDirectory from '../components/home/LocationDirectory';
import MessageFromCm from '../components/home/MessageFromCm';
import OdishStories from '../components/home/OdishStories';
import TalentDirectory from '../components/home/TalentDirectory';
import Testimonials from '../components/home/Testimonials';

function Home() {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <section>
        <HeroSection />
      </section>
      {/* Latest News */}
      <section className=" flex flex-col md:flex-row justify-between -mt-2">
        <button className=" w-full md:w-[15%] px-4  text-white font-bold bg-[#0B0035] text-lg">
          Latest News
        </button>
        <div className="w-full md:w-[85%] justify-between h-10 flex flex-col ">
          <div className="bg-[#F47216] h-[80%] items-center flex overflow-hidden">
            {' '}
            <div className=" whitespace-nowrap text-white font-semibold animate-marquee"> Welcome to the Soul of Incredible India - Odisha! Explore the beauty of culture and nature with Tourist Villages in Odisha  under Mission Youth. To know more, visit  
            <a href="www.odishatouristvillages.in" style={{color: "white", textDecoration: "underline", fontWeight: "bold"}}> www.odishatouristvillages.in</a></div>
          </div>
          <div className="h-[20%] bg-[#FC3C3C]"></div>
        </div>
      </section>

      <section
        className=" flex justify-center w-full items-start"
      >
        <div className="xl:max-w-6xl w-full">
          <OdishStories />
        </div>
      </section>
      <section
        style={{
          background:
            'url(https://ofdc.octamy.com/wp-content/uploads/2020/09/bg-map.png)',
          objectFit: 'cover',
        }}
      >
        <MessageFromCm />
      </section>

      <section className=" flex justify-center w-full bg-[url('/sea-bg.jpg')] items-start ">
        <div className="max-w-6xl ">
          <LocationDirectory />
        </div>
      </section>
      <section className=" flex justify-center w-full items-start">
        <div className="max-w-6xl">
          <LatestVideo />
        </div>
      </section>
      <section className=" flex justify-center w-full items-start">
        <div className="max-w-6xl">
          <TalentDirectory />
        </div>
      </section>
      <section className=" flex justify-center w-full items-start">
        <div className="max-w-6xl">
          <EqipmentDirectory />
        </div>
      </section>
      <section className=" flex justify-center pb-4 w-full bg-gray-200 items-start">
        <div className="max-w-6xl">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}

export default Home;
