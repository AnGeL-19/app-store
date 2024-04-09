import React from 'react'
import {
    Outlet,
    Navigate
  } from "react-router-dom";
import { useAuthAdmin } from '../../hooks/useAuthAdmin';

export const PrivateLayout = () => {

  const { authed, ...restAuth } = useAuthAdmin();

  if (!authed) {
     return  <Navigate to="/admin/auth/login" replace />
  }

  return (
    <div>
        <header>header</header>
        
        <Outlet />

        <footer>footer</footer>
    </div>
  )
}
