import React, { useState, useEffect } from "react";

import { Dialog } from 'primereact/dialog';


import { FormProduct } from "./FormProduct";
import { HeaderModal } from "../../../common/header/HeaderModal";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../../../../api/productsApi";

export const ModalProduct = ({visible, setVisible, dataForm }) => {


    const [dataValue, setDataValue] = useState();

    const productMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
          console.log('se agrego al cien');

          queryClient.invalidateQueries('products')
        }
    })


    const handleSubmitForm = (data) => {
    
        console.log(data);
        productMutation.mutate({
            ...data,
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
                <FormProduct handleSubmit={handleSubmitForm} data={dataForm}/>
            </Dialog>

        </>
    )
}
