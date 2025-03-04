import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './Path';
import Layout from '../layout/Layout';
import Login from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import Home from '../pages/Home';
import BookingForm from '../pages/BookingForm';
import Dashboard from '../pages/Dashboard';
import ContactUs from '../pages/ContactUs';
import OdishaAtGlance from '../pages/OdishaAtGlance';
import AboutLayout from '../layout/about/AboutLayout';
import Climate from '../pages/Climate';
import GeoGraphicalFetures from '../pages/GeoGraphicalFetures';
import BioDiversity from '../pages/BioDiversity';
import CulturalHeritage from '../pages/CulturalHeritage';
import ReligionCulture from '../pages/ReligionCulture';

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
          <Route element={<AboutLayout />}>
            <Route path={paths.odishaAtGlance} element={<OdishaAtGlance />} />
            <Route path={paths.climate} element={<Climate />} />
            <Route path={paths.geographicalFeatures} element={<GeoGraphicalFetures />} />
            <Route path={paths.bioDiversity} element={<BioDiversity />} />
            <Route path={paths.cultureHeritage} element={<CulturalHeritage />} />
            <Route path={paths.religionCulture} element={<ReligionCulture />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
