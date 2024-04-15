import React from 'react'
import {
    Outlet,
    Navigate,
   // RouterProvider,
   // Route,
  } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";


export const PrivateLayout = () => {

    const { authed, ...restAuth } = useAuth();

    if (!authed) {
       return  <Navigate to="/auth/login" replace />
    }

  return (
    <div>

      <Outlet /> 

    </div>

    
  )
}
