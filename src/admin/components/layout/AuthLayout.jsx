import React from 'react'
import {
    Outlet,
    Navigate,
   // RouterProvider,
   // Route,
   Link,
  } from "react-router-dom";
import { useAuthAdmin } from '../../hooks/useAuthAdmin';





export const AuthLayout = () => {

    const { authed, ...restAuth } = useAuthAdmin();

    if (authed) {
       return  <Navigate to="/admin/products" replace />
    }

  return (
    <div className='h-screen w-full bg-dark-light'>
        <Outlet />
    </div>
  )
}
