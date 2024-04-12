import { Toast } from 'primereact/toast';
import React, { useState, createContext, useRef } from 'react';


export const ToastContext = createContext({});


export const ToastProvider = ({ children }) => {

    const toast = useRef(null);

    const handleSuccess = (message) => {
        toast.current.show({severity:'success', summary: 'Success', detail:message, life: 3000});
    }

    const handleError = (message) => {
        toast.current.show({severity:'error', summary: 'Error', detail: message, life: 3000});
    }

    return (
        <ToastContext.Provider value={{
            handleSuccess,
            handleError
        }}>
            {children}
            <Toast ref={toast} />
        </ToastContext.Provider>
    );
};

