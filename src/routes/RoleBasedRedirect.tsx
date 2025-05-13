import { Navigate } from 'react-router-dom';
import { paths } from './Path';

const RoleBasedRedirect = () => {
  const role = sessionStorage.getItem('role');

  if (role === 'ADMIN') return <Navigate to={paths.adminDashboard} replace />;
  if (role === 'USER') return <Navigate to={paths.userDashboard} replace />;

  return <Navigate to="/login" replace />;
};

export default RoleBasedRedirect;
