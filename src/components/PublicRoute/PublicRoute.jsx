import React from 'react';
import { selectToken } from 'redux/auth/authSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectToken);

  return !isAuth ? children : <Navigate to={'/'} />;
};

export default PublicRoute;
