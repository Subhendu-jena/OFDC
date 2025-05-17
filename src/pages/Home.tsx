import GoToTop from '../components/goToTop/GoToTop';
// import EqipmentDirectory from '../components/home/EqipmentDirectory';
import HeroSection from '../components/home/HeroSection';
import LatestNews from '../components/home/LatestNews';
import LatestVideo from '../components/home/LatestVideo';
import LocationDirectory from '../components/home/LocationDirectory';
import MessageFromCm from '../components/home/MessageFromCm';
import OdishStories from '../components/home/OdishStories';
// import TalentDirectory from '../components/home/TalentDirectory';
import Testimonials from '../components/home/Testimonials';

function Home() {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <section>
        <HeroSection />
      </section>
      <section className=" flex flex-col md:flex-row justify-between -mt-2">
       <LatestNews/>
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
      <section className="relative flex justify-center w-full  h-full items-start ">
        <img src="/sea-bg.webp" alt="" className='absolute top-0 left-0  h-[132%] w-full ' />
        <div className="max-w-6xl h-full  ">
          <LocationDirectory />
        </div>
      </section>
      <section className=" flex justify-center w-full items-start">
        <div className="max-w-6xl">
          <LatestVideo />
        </div>
      </section>
      <section className="relative flex justify-center   w-full items-start">
        {/* <div className="max-w-6xl  h-[132%] bg-cover bg-center">
          <TalentDirectory />
        </div> */}
      </section>
      <section className=" flex justify-center w-full items-start">
        {/* <div className="max-w-6xl">
          <EqipmentDirectory />
        </div> */}
      </section>
      <section className=" flex justify-center pb-4 w-full bg-gray-200 items-start">
        <div className="max-w-6xl">
          <Testimonials />
        </div>
      </section>
      <GoToTop/>
    </div>
  );
}

export default Home;
