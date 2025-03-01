import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './Path';
import Layout from '../layout/Layout';
import Login from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import Home from '../pages/Home';
import BookingForm from '../pages/BookingForm';
import Dashboard from '../pages/Dashboard';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
