import { create } from 'zustand'

const INITAL_VALUES = {
    isAuthenticated: true,
    user: {},
    access_token: null
} 


export const useStoreLogin = create((set) => ({
    bears: 0,
    isAuthenticated: true,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
}))

export const login = ({user, isAuthenticated, access_token}) => {

    useStoreLogin.setState((state) => ({ isAuthenticated, user, access_token}))

}

export const logout = (text) => useStoreLogin.setState({ text })

// const useStoreLogin = create((set) => ({
//     user: {},
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//     updateBears: (newBears) => set({ bears: newBears }),
// }))