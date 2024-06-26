import React, { useState, useEffect, useRef } from "react";

import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

import { FormProduct } from "./FormProduct";
import { HeaderModal } from "../../../common/header/HeaderModal";
import { useGames } from "../../../../hooks/useGames";




export const ModalProduct = ({visible, setVisible, dataForm }) => {


    const { error, mutationAddPost, mutationModPost } = useGames();

    console.log(dataForm.id);

    const handleAddSubmitForm = (data) => {

        console.log(data);
        mutationAddPost.mutate({
            ...data,
            nombre: data.game,
            company_id: data.company.id
        })

        
        setVisible(false)
        showSuccess('Game added')
        

    }

    const handleModSubmitForm = (data) => {

        console.log(data);
        mutationModPost.mutate({
            ...data,
            nombre: data.game,
            company_id: data.company.id,
            id: dataForm.id
        })


        setVisible(false)
        showSuccess('Game modified')
        
    }


    return (
        <>
            
            <Dialog header={<HeaderModal title={dataForm.id ? 'MODIFY PRODUCT' : 'ADD PRODUCT' } />}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    style={{ width: '50vw' }}
                    breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                    >
     
                        <FormProduct handleSubmit={ 
                            dataForm.id 
                            ? handleModSubmitForm 
                            : handleAddSubmitForm
                        } 
                        data={ dataForm } />
              
               
            </Dialog>

        </>
    )
}
