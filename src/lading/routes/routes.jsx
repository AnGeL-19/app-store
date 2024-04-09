
import { LoginIndex } from "../pages/auth/LoginIndex";
import { RegisterIndex } from "../pages/auth/RegisterIndex";
import { CartIndex } from "../pages/cart/CartIndex";
import { GameIndex } from "../pages/game/GameIndex";
import { HomeIndex } from "../pages/home/HomeIndex";
import { StoreIndex } from "../pages/store/StoreIndex";
import { PrivateLayout } from "../components/layout/PrivateLayout";
import { AuthLayout } from "../components/layout/AuthLayout";


export const landingRoutes = [ 
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginIndex />,
            },
            {
                path: "register",
                element: <RegisterIndex />,
            },
        ]
    },
    {
        path: "/",
        element: <PrivateLayout />,
        children: [
            {
                path: "",
                element: <HomeIndex />,
            },
            {
                path: "store",
                element: <StoreIndex />,
            },
            {
                path: "game",
                element: <GameIndex />,
            },
            {
                path: "cart",
                element: <CartIndex />,
            }
        ]
    }
    
]

// export const landingRoutes = [
//     {
//         path: "home",
//         element: <div>HOME</div>,
//         //loader: redirectIfUser,
//     },
//     {
//         path: "games",
//         element: <div>GAMES</div>,
//         //action: logoutUser,
//     },
// ]