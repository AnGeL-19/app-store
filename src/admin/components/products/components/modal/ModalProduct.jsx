import React, { useState, useEffect } from "react";

import { Dialog } from 'primereact/dialog';


import { FormProduct } from "./FormProduct";
import { HeaderModal } from "../../../common/header/HeaderModal";

export const ModalProduct = ({visible, setVisible, dataForm }) => {


    const [dataValue, setDataValue] = useState();


    const handleSubmitForm = (data) => {
    
        setDataValue(data);
    }


    return (
        <>

            <Dialog header={<HeaderModal title='ADD PRODUCT' />}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    style={{ minWidth: '50vw' }}
                    breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                    >
                <FormProduct onSubmit={handleSubmitForm} data={dataForm}/>
            </Dialog>

        </>
    )
}
