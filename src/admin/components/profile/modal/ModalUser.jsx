import React, { useState, useEffect, useRef } from "react";

import { Dialog } from 'primereact/dialog';



import { useProfile } from "../../../hooks/useProfile";
import { FormUser } from "./FormUser";
import { HeaderModal } from "../../common/header/HeaderModal";




export const ModalUser = ({visible, setVisible, dataForm }) => {


    const { mutationModPost } = useProfile();



    const handleModSubmitForm = (data) => {

        console.log(data);
        mutationModPost.mutate({
            ...data,
            id: dataForm.id
        })


        setVisible(false)
        
    }


    return (
        <>
            
            <Dialog header={<HeaderModal title='MODIFY USER' />}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    style={{ width: '50vw' }}
                    breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                    >
     
                        <FormUser handleSubmit={  handleModSubmitForm } 
                        data={ dataForm } />
            </Dialog>

        </>
    )
}
