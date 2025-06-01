// import { Navigate } from 'react-router-dom';
// import { paths } from './Path';
// // import { useAuth } from '../config/authContext';

// const RoleBasedRedirect = () => {
//   const role = sessionStorage.getItem('role');
//   //  const { user } = useAuth();

//   if (role === 'ADMIN') return <Navigate to={paths.adminDashboard} replace />;
//   if (role === 'USER') return <Navigate to={paths.userDashboard} replace />;

//   return <Navigate to="/login" replace />;
// };

// export default RoleBasedRedirect;


import React from 'react'
import { Navigate } from 'react-router-dom';
import { paths } from './Path';
import { toast } from 'react-toastify';

const RoleBasedRedirect:React.FC = () => {
  const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
};
  const role = sessionStorage.getItem('role')?.toUpperCase();

 if (role === ROLES.ADMIN) return <Navigate to={paths.adminDashboard} replace />;
if (role === ROLES.USER) return <Navigate to={paths.userDashboard} replace />;


toast.error(`Unknown role: ${role}`);
return <Navigate to="*" replace />;
}

export default RoleBasedRedirect
