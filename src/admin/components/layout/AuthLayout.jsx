import React from 'react'
import {
    Outlet,
    Navigate,
   // RouterProvider,
   // Route,
   Link,
  } from "react-router-dom";

import { useStoreLogin } from '../../context/storage-login/storageLogin';


export const AuthLayout = () => {

    const { isAuthenticated } = useStoreLogin((state) => state);

    if (isAuthenticated) {
      
      return  <Navigate to="/admin/games" replace />
    }

  return (
    <div className='h-screen w-full bg-dark-light'>
        <Outlet />
    </div>
  )
}
