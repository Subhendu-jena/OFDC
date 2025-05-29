import { Navigate } from 'react-router-dom';
import { paths } from './Path';
import { useAuth } from '../config/authContext';

const RoleBasedRedirect = () => {
  // const role = sessionStorage.getItem('role');
   const { user } = useAuth();

  if (user?.role === 'ADMIN') return <Navigate to={paths.adminDashboard} replace />;
  if (user?.role === 'USER') return <Navigate to={paths.userDashboard} replace />;

  return <Navigate to="/login" replace />;
};

export default RoleBasedRedirect;
