import { InputText } from "primereact/inputtext";
import { Badge } from 'primereact/badge';
import {
    Outlet,
   // RouterProvider,
   // Route,
   Link,
  } from "react-router-dom";
import { Button } from "primereact/button";
import { Navbar } from "./components/Navbar";
import { FooterLading } from "../common/FooterLading";



export const LadingLayout = () => {

    return (
        <div className="min-h-screen w-full bg-dark-bold relative">

            
            <Navbar />

            

            <div className="pt-14 max-w-screen-container mx-auto px-2 ">
              <Outlet /> 
            </div>
            
  
            <FooterLading  className="py-3 w-full text-center text-white" />
        </div>
    )
  }