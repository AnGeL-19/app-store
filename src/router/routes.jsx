import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { adminRoutes } from "../admin/routes/routes";
import { landingRoutes } from "../lading/routes/routes";
import { AdminLayout } from "../admin/components/layout/AdminLayout";
import { LadingLayout } from "../lading/components/layout/LandingLayout";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <LadingLayout /> ,
    children: landingRoutes
  },
  {
    path: "admin",
    element: <AdminLayout /> ,
    children: adminRoutes
  },

]);
