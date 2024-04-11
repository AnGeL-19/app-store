import { LoginIndex } from "../auth/pages/login/LoginIndex";
import { AuthLayout } from "../components/layout/AuthLayout";
import { CatalogLayout } from "../components/layout/CatalogLayout";
import { PrivateLayout } from "../components/layout/PrivateLayout";
import { CompaniesIndex } from "../pages/companies/CompaniesIndex";
import { GamesIndex } from "../pages/games/GamesIndex";
import { ProductsIndex } from "../pages/products/ProductsIndex";
import { ProfileIndex } from "../pages/profile/ProfileIndex";


export const adminRoutes = [
    {
        path: "auth",
        element:  <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginIndex />
            }
        ]
    },
    {
        path: "",
        element: <PrivateLayout /> ,
        children: [
            {
                path: "profile",
                element: <ProfileIndex/> ,
            },  
            {
                path: "",
                element: <CatalogLayout />,
                children: [
                    {
                        path: "products",
                        element: <ProductsIndex/> ,
                    },
                    {
                        path: "games",
                        element: <GamesIndex /> ,
                    },
                    {
                        path: "companies",
                        element: <CompaniesIndex />,
                    }
                ]
            }
            
        ]
    },
]
