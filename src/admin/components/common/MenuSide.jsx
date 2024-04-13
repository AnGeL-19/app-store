import React, { useRef } from 'react'; 
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useAuthAdmin } from '../../hooks/useAuthAdmin';

export default function MenuSide() {


    const menuLeft = useRef(null);
    const navigate = useNavigate();
    const { mutationLogout } = useAuthAdmin()

    let items = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
                navigate(`/admin/profile`, {replace: true})
            }
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
                mutationLogout.mutate()
            }
        }
    ];

    return (
        <>
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" className='text-white bg-dark-bold hover:bg-dark-semibold' />
            <Button icon='pi pi-angle-down' 
            rounded
            className='border-circle text-white  border-none hover:bg-gray-800' 
            onClick={(event) => menuLeft.current.toggle(event)} 
            aria-controls="popup_menu_left" aria-haspopup />
        </>
        
    )
}