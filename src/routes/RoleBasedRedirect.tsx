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

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { paths } from './Path';
import { toast } from 'react-toastify';
import { userData } from '../config/controller';

const RoleBasedRedirect: React.FC = () => {
  const [role, setRole] = useState<string | null>(null); // null means not yet loaded

  useEffect(() => {
    userData({})
      .then((response: any) => {
        if (response?.user?.role) {
          const userRole = response.user.role.toUpperCase();
          setRole(userRole);
        } else {
          console.warn('User data fetch failed:', response);
          setRole('UNKNOWN');
        }
      })
      .catch((error: any) => {
        console.error('Error fetching user data:', error);
        setRole('UNKNOWN');
      });
  }, []);

  const ROLES = {
    ADMIN: 'ADMIN',
    USER: 'USER',
  };

  if (role === null) {
    return <div>Loading...</div>; // or a spinner
  }

  if (role === ROLES.ADMIN) {
    return <Navigate to={paths.adminDashboard} replace />;
  }

  if (role === ROLES.USER) {
    return <Navigate to={paths.userDashboard} replace />;
  }

  toast.error(`Unknown role: ${role}`);
  return <Navigate to="*" replace />;
};

export default RoleBasedRedirect;

