import React, { useState, useEffect, useRef } from "react";

import { Dialog } from 'primereact/dialog';

import { HeaderModal } from "../../../common/header/HeaderModal";
import { useCompany } from "../../../../hooks/useCompany";
import { FormCompany } from "./FormCompany";



export const ModalCompany = ({visible, setVisible, dataForm }) => {


    const { error, mutationAddPost, mutationModPost } = useCompany();

    console.log(dataForm.id);

    const handleAddSubmitForm = (data) => {

        console.log(data, 'add');
        mutationAddPost.mutate({
            ...data
        })

        setVisible(false)  

    }

    const handleModSubmitForm = (data) => {

        console.log(data, 'edit');
        mutationModPost.mutate({
            ...data,
            id: dataForm.id
        })

        setVisible(false)
        
    }


    return (
        <>
            
            <Dialog header={<HeaderModal title={dataForm.id ? 'MODIFY COMPANY' : 'ADD COMPANY' } />}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    style={{ width: '50vw' }}
                    breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                    >
     
                        <FormCompany handleSubmit={ 
                            dataForm.id 
                            ? handleModSubmitForm 
                            : handleAddSubmitForm
                        } 
                        data={ dataForm } />
              
               
            </Dialog>

        </>
    )
}
