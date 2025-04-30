import { Navigate } from 'react-router-dom';

const RoleBasedRedirect = () => {
  const role = sessionStorage.getItem('role');

  if (role === 'ADMIN') return <Navigate to="/admin-dashboard" replace />;
  if (role === 'USER') return <Navigate to="/user-dashboard" replace />;

  return <Navigate to="/login" replace />;
};

export default RoleBasedRedirect;
