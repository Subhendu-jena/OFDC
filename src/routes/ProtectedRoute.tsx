import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userData } from '../config/controller';

const ProtectedRoute = ({ requiredRole }: { requiredRole?: string }) => {
  const id = sessionStorage.getItem('userID');
  const location = useLocation();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    userData({})
      .then((response: any) => {
        if (response?.user?.role) {
          setRole(response.user.role.toUpperCase());
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

  if (!id) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (role === null) {
    return <div>Loading...</div>;
  }

  if (requiredRole && role !== requiredRole.toUpperCase()) {
    return <Navigate to="*" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
