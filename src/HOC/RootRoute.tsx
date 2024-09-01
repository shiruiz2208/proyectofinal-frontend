import { HOME_PAGE, REGISTER_PAGE } from '@/routes/path';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const RootRoute = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [accessToken]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <Navigate to={HOME_PAGE} />
  ) : (
    <Navigate to={REGISTER_PAGE} />
  );
};

export default RootRoute;
