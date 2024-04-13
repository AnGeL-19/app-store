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
            <div className='top-0 left-0 sticky block z-3 lg:hidden bg-dark-bold py-2 px-3 w-full shadow rounded'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1'>
                        <Button icon='pi pi-bars'
                                rounded
                                onClick={() => setVisible(true)}
                                className='bg-transparent text-white border-none hover:bg-gray-800 border-circle'/>

                        <div onClick={() => navigate(`/admin/games`, {replace: true})}>
                            <span className="text-gray-300 text-2xl text-center font-bold block">Kr<img src="/assets/icons/pacman.svg" className="inline "/>enen</span>
                        </div>

                    </div>


                    <ProfileUser/>
                </div>

                <SidebarMenu visible={visible} setVisible={setVisible} />
            </div>
    )
}