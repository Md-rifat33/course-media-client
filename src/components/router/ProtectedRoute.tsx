import React from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  isLoggedIn: boolean;
  redirectPath?: '/login';
  children: React.ReactElement;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn, redirectPath = '/login', children }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  } 

  return children;
};

export default ProtectedRoute;
