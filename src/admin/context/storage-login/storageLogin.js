import { json } from 'react-router-dom'
import { create } from 'zustand'

const INITAL_VALUES = {
    isAuthenticated: false,
    user: {},
    access_token: null,
    isLoadingAdmin: true,
} 


export const useStoreLogin = create(() => (INITAL_VALUES))

export const updateUser = (user) => {

    useStoreLogin.setState((state) => ({ ...state, user }))

}

export const login = (user, isAuthenticated, access_token) => {

    localStorage.setItem('authAdmin', JSON.stringify({user,isAuthenticated,access_token}))

    useStoreLogin.setState((state) => ({ isAuthenticated, user, access_token, isLoadingAdmin: false }))


}


export const getToken = () => {

    const existAuth = localStorage.getItem('authAdmin')

    if(existAuth == null) return logout();

    const auth = JSON.parse(existAuth)

    if (!auth.isAuthenticated  ) return logout();

    return auth.access_token;
}

export const logout = () => {

    localStorage.removeItem('authAdmin')

    useStoreLogin.setState((state) => ({ 
        ...INITAL_VALUES
    }))

}

export const validateAuth =  () => {

    const existAuth = localStorage.getItem('authAdmin')

    if(existAuth == null) return logout();

    const auth = JSON.parse(existAuth)

    if (!auth.isAuthenticated  ) return logout();

    login(auth.user, auth.isAuthenticated, auth.access_token);

}

// const useStoreLogin = create((set) => ({
//     user: {},
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//     updateBears: (newBears) => set({ bears: newBears }),
// }))