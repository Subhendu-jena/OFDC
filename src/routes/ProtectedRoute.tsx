import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../config/authContext';

const ProtectedRoute = () => {
  const { user } = useAuth();
  // const id = sessionStorage.getItem('userID');
  return user?._id ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;