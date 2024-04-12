import  { useEffect, useState } from 'react'
import { Button } from 'primereact/button';


export const HeaderTable = ({setVisible, setDataForm}) => {

    
    const handleShowModal = () => {
        setDataForm({});
        setVisible(true)
    }


    return (
        <div className='flex flex-wrap-reverse gap-3 justify-end'>
         
            <Button label="ADD"
                        icon='pi pi-plus'
                        type="button"
                        size='large'
                        className="btn-font text-white px-5 py-2 bg-dark p-3 border-none"
                        onClick={ handleShowModal }
                />


        </div>
    )

}

