import React from 'react'
import {
    Outlet,
    Navigate,
   // RouterProvider,
   // Route,
   Link,
  } from "react-router-dom";
import { useAuthAdmin } from '../../hooks/useAuthAdmin';
import { useStoreLogin } from '../../context/storage-login/storageLogin';





export const AuthLayout = () => {

    const { isAuthenticated } = useStoreLogin((state) => state);

    if (isAuthenticated) {
     
      return  <Navigate to="/admin/products" replace />
    }

  return (
    <div className='h-screen w-full bg-dark-light'>
        <Outlet />
    </div>
  )
}
