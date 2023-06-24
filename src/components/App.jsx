import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Loader = lazy(() => import('./Loader/Loader'));
const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
