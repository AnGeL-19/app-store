
import {
  Outlet,
 // RouterProvider,
 // Route,
 Link
} from "react-router-dom";
import { validateAuth } from "../../context/storage-login/storageLogin";
import { useEffect } from "react";

export const AdminLayout = () => {


  useEffect(() => {
    validateAuth();
  }, [])
  
  return (
    <div className="min-h-screen w-full">
      <Outlet />
    </div>
  )
}
