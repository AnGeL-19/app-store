import React, { useEffect } from 'react'
import {
    Outlet,
    Navigate
  } from "react-router-dom";

import { useStoreLogin } from '../../context/storage-login/storageLogin';
import { HeaderProvider } from '../../context/header/HeaderProvider';
import { Navbar } from './components/Navbar';
import { SidebarContent } from './components/SidebarContent';
import { Footer } from '../common/Footer';
import { ToastProvider } from '../../context/toast/ToastProvider';

export const PrivateLayout = () => {

  const { isAuthenticated, isLoadingAdmin } = useStoreLogin((state) => state);



  if (!isAuthenticated) {
     return  <Navigate to="/admin/auth/login" replace />
  }

  if (isLoadingAdmin) {
    return <span>Loading...</span>;
  }

 
  

  return (
    
      <div className='h-min-screen w-full'>
            <div className='relative'>

                <Navbar/>

                <div className='relative hidden lg:flex'>
                    <SidebarContent/>
                </div>

                <div className='layout-content'>
                    <div className='px-3 min-h-screen flex flex-col justify-between gap-4'>
                        <HeaderProvider>
                          <ToastProvider>
                            <Outlet/>
                          </ToastProvider>
                        </HeaderProvider>
                        <Footer className='py-3 text-center'/>
                    </div>
                </div>
            </div>
        </div>
  )

}
