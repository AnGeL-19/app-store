import React, { useState } from 'react';
import {HeaderContext} from "./HeaderContext";

const HEADER_INITIAL_STATE = {
    title: '',
    back: false,
}

export const HeaderProvider = ({ children }) => {

    const [headerTitle, setHeaderTitle] = useState(HEADER_INITIAL_STATE);

    const handleHandleTitle = (title, back = false) => {
        setHeaderTitle(prev => ({
            ...prev,
            title,
            back
        }))
    }

    return (
        <HeaderContext.Provider value={{
            handleHandleTitle,
            ...headerTitle
        }}>
            {children}
        </HeaderContext.Provider>
    );
};

