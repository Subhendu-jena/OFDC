// import { Navigate, Outlet } from 'react-router-dom';
// // import { useAuth } from '../config/authContext';

// const ProtectedRoute = () => {
//   // const { user } = useAuth();
//   const id = sessionStorage.getItem('userID');
//   return id ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;




import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ requiredRole }:any) => {
  const id = sessionStorage.getItem('userID');
  const role = sessionStorage.getItem('role'); // make sure you store this at login
  const location = useLocation();

  if (!id) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="*" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
