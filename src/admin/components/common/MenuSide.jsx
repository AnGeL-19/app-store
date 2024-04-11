import React, { useRef } from 'react'; 
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function MenuSide() {
    const toast = useRef(null);
    const menuLeft = useRef(null);

    let items = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
            }
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
            }
        }
    ];

    return (
        <>
            <Toast ref={toast} />
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" className='text-white bg-dark-bold' />
            <Button icon="pi pi-arrow-right" 
            className="text-white bg-dark-bold" onClick={(event) => menuLeft.current.toggle(event)} 
            aria-controls="popup_menu_left" aria-haspopup />
        </>
        
    )
}