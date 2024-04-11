
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export const PopupMenu = () => {
    const menuRight = useRef(null);
    const toast = useRef(null);
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Refresh',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Export',
                    icon: 'pi pi-uploads'
                }
            ]
        }
    ];

    return (
        <div className='flex justify-center'>
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" className='mt-3' />
            <Button icon='pi pi-angle-down' 
            rounded
            className='border-circle text-black border-none hover:surface-300' 
            onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup 
            />
        </div>
    )
}
