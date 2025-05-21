import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const id = sessionStorage.getItem('userID');
  return id ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;