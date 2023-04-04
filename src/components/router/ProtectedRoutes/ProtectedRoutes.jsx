import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
  let isLogged = localStorage.getItem('login');

  if (!isLogged) {
    return <Navigate to='books/login/' />;
  }

  return (
    //acceso a las rutas protegidas
    <Outlet />
  );
}
