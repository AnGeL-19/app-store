import React, { useState, useEffect } from "react";

import { Dialog } from 'primereact/dialog';

import { FormProduct } from "./FormProduct";
import { HeaderModal } from "../../../common/header/HeaderModal";
import { useGames } from "../../../../hooks/useGames";
import { useQuery } from "@tanstack/react-query";
import { getCompanyById } from "../../../../api/companiesApi";
import { getGameById } from "../../../../api/gamesApi";
import { ProgressSpinner } from "primereact/progressspinner";


export const ModalProduct = ({visible, setVisible, dataForm }) => {

    
    const { error, mutationAddPost, mutationModPost } = useGames();

    console.log(dataForm);

    const handleAddSubmitForm = (data) => {

        console.log(data);
        mutationAddPost.mutate({
            ...data,
            nombre: data.game,
            company_id: data.company.id
        })

    }

    const handleModSubmitForm = (data) => {

        console.log(data);
        mutationAddPost.mutate({
            ...data,
            nombre: data.game,
            company_id: data.company.id,
            game_id: dataForm.game_id
        })

    }


    return (
        <>

            <Dialog header={<HeaderModal title='ADD PRODUCT' />}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    style={{ width: '50vw' }}
                    breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                    >
     
                        <FormProduct handleSubmit={ 
                            dataForm 
                            ? handleModSubmitForm 
                            : handleAddSubmitForm
                        } 
                        data={ dataForm } />
              
               
            </Dialog>

        </>
    )
}
