import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { selectProfile, selectToken } from 'redux/auth/authSlice';
import { getCurrentProfile, setToken } from 'redux/auth/thunks';

const Layout = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const profile = useSelector(selectProfile);

  useEffect(() => {
    if (token && !profile) {
      setToken(token);

      dispatch(getCurrentProfile())
    }
  }, [token, profile, dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
