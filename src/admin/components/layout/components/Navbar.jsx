import React, { useState } from 'react';
import {
    useNavigate,
} from "react-router-dom";
import { Button } from 'primereact/button';
import {ProfileUser} from "./ProfileUser";
import {SidebarMenu} from "./SidebarMenu";


export const Navbar = () => {

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    return (
            <div className='top-0 left-0 sticky block z-3 lg:hidden bg-white py-2 px-3 w-full shadow rounded'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1'>
                        <Button icon='pi pi-bars'
                                rounded
                                onClick={() => setVisible(true)}
                                className='bg-white text-gray-900 border-none hover:bg-gray-100 border-circle'/>

                        <div onClick={() => navigate(`/admin/dashboard`, {replace: true})}>
                            <span>Kroenen</span>
                        </div>

                    </div>


                    <ProfileUser/>
                </div>

                <SidebarMenu visible={visible} setVisible={setVisible} />
            </div>
    )
}