import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './Path';
import Layout from '../layout/Layout';
import Login from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import Home from '../pages/Home';
import BookingForm from '../pages/BookingForm';
import Dashboard from '../pages/Dashboard';
import ContactUs from '../pages/ContactUs';
import OdishaAtGlance from '../pages/about/OdishaAtGlance';
import AboutLayout from '../layout/about/AboutLayout';
import OurVisionMision from '../pages/about/OurVisionMision';
import Leadership from '../pages/about/Leadership';
import CulturalHeritage from '../pages/about/CulturalHeritage';
import ReligionCulture from '../pages/about/ReligionCulture';
import FlimEcoSystem from '../pages/FlimEcoSystem';
import WhosWho from '../pages/about/WhosWho';
import Achievments from '../pages/about/Achievments';
import KalingaStudiosOverview from '../pages/kalingaStudio/Overview';
import ObjectivesPage from '../pages/kalingaStudio/Objectives';
import StudiosPastGlory from '../pages/kalingaStudio/StudiosPastGlory';
import BoardOfDirectors from '../pages/kalingaStudio/BoardOfDirectors';
import WhoIsWho from '../pages/kalingaStudio/WhoIsWho';

const RoutePage: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.register} element={<RegisterPage />} />
        <Route element={<Layout />}>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.bookingForm} element={<BookingForm />} />
          <Route path={paths.dashboard} element={<Dashboard />} />
          <Route path={paths.contactUs} element={<ContactUs />} />
          <Route path={paths.flimEcoSystem} element={<FlimEcoSystem />} />
          <Route path={paths.overview} element={<KalingaStudiosOverview />}/>
          <Route path={paths.objectives} element={<ObjectivesPage />}/>
          <Route path={paths.studiosPastGlory} element={<StudiosPastGlory />}/>
          <Route path={paths.boardOfDirectors} element={<BoardOfDirectors />}/>
          <Route path={paths.whosWho} element={<WhoIsWho />}/>

          <Route element={<AboutLayout />}>
            <Route path={paths.aCursoryLook} element={<OdishaAtGlance />} />
            <Route path={paths.ourVisionMission} element={<OurVisionMision />} />
            <Route path={paths.achievments} element={<Achievments />} />
            <Route path={paths.leadership} element={<Leadership />} />
            <Route
              path={paths.formerChairpersons}
              element={<CulturalHeritage />}
            />
            <Route
              path={paths.formerManagingDirectors}
              element={<ReligionCulture />}
            />
            <Route
              path={paths.whoIsWho}
              element={<WhosWho />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
