
import {
    Outlet,
    Navigate,
   // RouterProvider,
   // Route,
   Link,
  } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

export const AuthLayout = () => {

    const { authed, ...restAuth } = useAuth();

    if (authed) {
       return  <Navigate to="/" replace />
    }

  return (
    <div>

        <h1>AUTH</h1>

        <Outlet /> 

    </div>

    
  )
}
