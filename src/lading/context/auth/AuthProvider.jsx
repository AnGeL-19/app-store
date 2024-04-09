import React, { createContext } from 'react'
import {
    Navigate,
  } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

const authContext = createContext();

export const AuthProvider = ({children}) => {

    const { authed, ...restAuth } = useAuth();

    console.log(authed, 'LOGIN');

  return (
    <authContext.Provider value={{
        auth: restAuth
    }}>
        { authed  ? children : <Navigate to="/auth/login" replace />}
    </authContext.Provider>
  )

}
