
import {
    Outlet,
} from "react-router-dom";
import { Header } from "./components/Header";



export const CatalogLayout = () => {



    return (
        <div className='min-h-screen w-full pt-5 bg-white rounded'>

            <Header />

            <div className='mt-2 lg:mt-6 w-full h-full'>
                <Outlet />
            </div>
        </div>
    );
}
