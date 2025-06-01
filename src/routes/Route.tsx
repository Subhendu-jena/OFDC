import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './Path';
import Layout from '../layout/Layout';
import Login from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import Home from '../pages/Home';
import BookingForm from '../pages/BookingForm';
// import Dashboard from '../pages/Dashboard';
import ContactUs from '../pages/ContactUs';
import OdishaAtGlance from '../pages/about/ACursoryLook';
import AboutLayout from '../layout/about/AboutLayout';
import OurVisionMision from '../pages/about/OurVisionMision';
import Leadership from '../pages/about/Leadership';
import CulturalHeritage from '../pages/about/FormerChairpersons';
import ReligionCulture from '../pages/about/FormerManagingDirectors';
import FlimEcoSystem from '../pages/filmEcoSystem/FlimEcoSystem';
import WhosWho from '../pages/about/WhosWho';
import Achievments from '../pages/about/Achievments';
import KalingaStudiosOverview from '../pages/kalingaStudio/Overview';
import ObjectivesPage from '../pages/kalingaStudio/Objectives';
import StudiosPastGlory from '../pages/kalingaStudio/StudiosPastGlory';
import BoardOfDirectors from '../pages/kalingaStudio/BoardOfDirectors';
import WhoIsWho from '../pages/kalingaStudio/WhoIsWho';
import KalingaStudioLayout from '../layout/KalingaStudioLayout/KalingaStudioLayout';
import OdishaIndiasBestKeptSecret from '../pages/discoverOdisha/OdishaIndiasBestKeptSecret';
import EchoesOfHistory from '../pages/discoverOdisha/EchoesOfHistory';
import DiscoverOdishaLayout from '../layout/discoverOdisha/DiscoverOdishaLayout';
import Climate from '../pages/discoverOdisha/Climate';
import CulturalLegacy from '../pages/discoverOdisha/CulturalLegacy';
import GeographicalFeature from '../pages/discoverOdisha/GeographicalFeature';
import MajorFestivals from '../pages/discoverOdisha/MajorFestivals';
import CinematicHeritage from '../pages/discoverOdisha/CinematicHeritage';
import OdiaFilmArchiveLayout from '../layout/odiaFilmArchive/OdiaFilmArchiveLayout';
import ArchivalGallery from '../pages/odiaFilmArchive/ArchivalGallery';
import ArchivesInsight from '../pages/odiaFilmArchive/ArchivesInsight';
import KeyPriorities from '../pages/odiaFilmArchive/KeyPriorities';
import OdiaFilmAnthology from '../pages/odiaFilmArchive/OdiaFilmAnthology';
import VaultofPreservedFilms from '../pages/odiaFilmArchive/VaultofPreservedFilms';
import UserDashboard from '../pages/User/UserDashboard';
import LoggedUserLayout from '../layout/LoggedUser/LoggedUserLayout';
import UserBookingHistory from '../pages/User/UserBookingHistory';
import UserPaymentHistory from '../pages/User/UserPaymentHistory';
import UserProfile from '../pages/User/UserProfile';
import AdminLayout from '../layout/admin/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminBookingHistory from '../pages/admin/AdminBookingHistory';
import AdminPaymentHistory from '../pages/admin/AdminPaymentHistory';
import AdminCalender from '../pages/admin/AdminCalender';
import TalentLayout from '../layout/talentLayout/TalentLayout';
import TalentList from '../pages/talentList/TalentList';
import LocationLayout from '../layout/locationLayout/LocationLayout';
import LocationCategory from '../pages/locationDirectory/LocationCategory';
import LocationDetails from '../components/locationCard/LocationDetails';
import ScrollToTop from '../components/home/ScrollToTop';
import ProtectedRoute from './ProtectedRoute';
import RoleBasedRedirect from './RoleBasedRedirect';
// import BookingReceipt from '../components/BookingForm/BookingReceipt';
import FilmEcoSystemLayout from '../layout/filmEcoSystem/FilmEcoSystemLayout';
import ForgetPassword from '../pages/ForgetPassword';
import ResetPassword from '../pages/ResetPassword';
import PolicyGuidelines from '../pages/filmEcoSystem/PolicyGuidelines';
import OdishaAndSilverScreen from '../pages/filmEcoSystem/OdishaAndSilverScreen';
import QuickLinksLayout from '../layout/quickLinks/QuickLinksLayout';
import Publications from '../pages/quickLinks/Publications';
import Tenders from '../pages/quickLinks/Tenders';
import Policy from '../pages/quickLinks/Policy';
import TermsAndConditions from '../pages/TermsAndConditions';
import NotFound from '../pages/Notfound';

const RoutePage: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* <Route path={paths.test} element={<BookingReceipt />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path={paths.register} element={<RegisterPage />} />
        <Route path={paths.login} element={<Login />} />
        <Route
          path={paths.termsAndCondition}
          element={<TermsAndConditions />}
        />
        <Route path="/reset-password/:ResetToken" element={<ResetPassword />} />
        <Route path={paths.forgetPassword} element={<ForgetPassword />} />

        {/* <Route element={<ProtectedRoute  />}>
          <Route
            path={paths.RoleBasedRedirect}
            element={<RoleBasedRedirect />}
          />

          <Route element={<AdminLayout />}>
            <Route path={paths.adminDashboard} element={<AdminDashboard />} />
            <Route path={paths.allBookings} element={<AdminBookingHistory />} />
            <Route
              path={paths.paymentDetails}
              element={<AdminPaymentHistory />}
            />
            <Route path={paths.calender} element={<AdminCalender />} />
          </Route>
          <Route element={<LoggedUserLayout />}>
            <Route path={paths.userDashboard} element={<UserDashboard />} />
            <Route
              path={paths.bookingHistory}
              element={<UserBookingHistory />}
            />
            <Route
              path={paths.paymentHistory}
              element={<UserPaymentHistory />}
            />
            <Route path={paths.newBooking} element={<BookingForm />} />
            <Route path={paths.profile} element={<UserProfile />} />
          </Route>
        </Route> */}
        <Route element={<ProtectedRoute />}>
          <Route
            path={paths.RoleBasedRedirect}
            element={<RoleBasedRedirect />}
          />

          {/* Admin Routes - require admin role */}
          <Route element={<ProtectedRoute requiredRole="ADMIN" />}>
            <Route element={<AdminLayout />}>
              <Route path={paths.adminDashboard} element={<AdminDashboard />} />
              <Route
                path={paths.allBookings}
                element={<AdminBookingHistory />}
              />
              <Route
                path={paths.paymentDetails}
                element={<AdminPaymentHistory />}
              />
              <Route path={paths.calender} element={<AdminCalender />} />
            </Route>
          </Route>

          {/* User Routes - require user role */}
          <Route element={<ProtectedRoute requiredRole="USER" />}>
            <Route element={<LoggedUserLayout />}>
              <Route path={paths.userDashboard} element={<UserDashboard />} />
              <Route
                path={paths.bookingHistory}
                element={<UserBookingHistory />}
              />
              <Route
                path={paths.paymentHistory}
                element={<UserPaymentHistory />}
              />
              <Route path={paths.newBooking} element={<BookingForm />} />
              <Route path={paths.profile} element={<UserProfile />} />
            </Route>
          </Route>
        </Route>

        <Route element={<Layout />}>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.bookingForm} element={<BookingForm />} />
          {/* <Route path={paths.dashboard} element={<Dashboard />} /> */}
          <Route path={paths.contactUs} element={<ContactUs />} />
          <Route element={<FilmEcoSystemLayout />}>
            <Route path={paths.flimEcoSystem} element={<FlimEcoSystem />} />
            <Route
              path={paths.policyGuidelines}
              element={<PolicyGuidelines />}
            />
            <Route
              path={paths.odishaSilverScreen}
              element={<OdishaAndSilverScreen />}
            />
          </Route>
          {/* OdiaFilmArchiveLayout */}
          <Route element={<OdiaFilmArchiveLayout />}>
            <Route path={paths.archivalGallery} element={<ArchivalGallery />} />
            <Route path={paths.archivesInsight} element={<ArchivesInsight />} />
            <Route path={paths.keyPriorities} element={<KeyPriorities />} />
            <Route
              path={paths.odiaFilmAnthology}
              element={<OdiaFilmAnthology />}
            />
            <Route
              path={paths.vaultofPreservedFilms}
              element={<VaultofPreservedFilms />}
            />
          </Route>
          {/* DiscoverOdishaLayout */}
          <Route element={<DiscoverOdishaLayout />}>
            <Route
              path={paths.odishaIndiasBestKeptSecret}
              element={<OdishaIndiasBestKeptSecret />}
            />
            <Route path={paths.echoesofhistory} element={<EchoesOfHistory />} />
            <Route path={paths.climate} element={<Climate />} />
            <Route path={paths.culturalLegacy} element={<CulturalLegacy />} />
            <Route
              path={paths.geographicalFeature}
              element={<GeographicalFeature />}
            />
            <Route path={paths.majorFestivals} element={<MajorFestivals />} />
            <Route
              path={paths.cinematicHeritage}
              element={<CinematicHeritage />}
            />
          </Route>
          {/* KalingaStudioLayout */}
          <Route element={<KalingaStudioLayout />}>
            <Route path={paths.overview} element={<KalingaStudiosOverview />} />
            <Route path={paths.objectives} element={<ObjectivesPage />} />
            <Route
              path={paths.studiosPastGlory}
              element={<StudiosPastGlory />}
            />
            <Route
              path={paths.boardOfDirectors}
              element={<BoardOfDirectors />}
            />
            <Route path={paths.whosWho} element={<WhoIsWho />} />
          </Route>
          {/* AboutLayout */}
          <Route element={<AboutLayout />}>
            <Route path={paths.aCursoryLook} element={<OdishaAtGlance />} />
            <Route
              path={paths.ourVisionMission}
              element={<OurVisionMision />}
            />
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
            <Route path={paths.whoIsWho} element={<WhosWho />} />
          </Route>
          {/* Talentlayout */}
          <Route element={<TalentLayout />}>
            <Route path={paths.talentlist} element={<TalentList />} />
          </Route>
          {/* LocationLayout */}
          <Route element={<LocationLayout />}>
            <Route
              path={paths.locationDirectory}
              element={<LocationCategory />}
            />
            <Route path={paths.locationDetails} element={<LocationDetails />} />
          </Route>
          <Route element={<QuickLinksLayout />}>
            <Route path={paths.publications} element={<Publications />} />
            <Route path={paths.tender} element={<Tenders />} />
            <Route path={paths.policy} element={<Policy />} />
          </Route>
          {/* FilmEcoSystemLayout */}
          {/* <Route element={<FilmEcoSystemLayout />}>
            <Route path={paths.filmEcoSystem} element={<FilmEcoSystem />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
