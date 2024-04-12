import React from "react";
import { ItemAction } from "../../../common/table/ItemAction";
import { useCompany } from "../../../../hooks/useCompany";


export const ActionsBody = (rowData, setData,  setVisible) => {


    const { mutationDelPost } = useCompany();

    const handleData = () => {
        setData(rowData);
        setVisible(true);
    }

    const handleDelete = () => {
        console.log(rowData);
        mutationDelPost.mutate(
            rowData.id
        )
    }


    return (
        <>
            <div className='flex gap-3 justify-end items-center'>

                <ItemAction label='Edit'
                            className='icon-edit'
                            icon='/assets/icons/edit.svg'
                            onClick={handleData}
                />

                <ItemAction label='Delete'
                            className='icon-delete'
                            icon='/assets/icons/delete.svg'
                            onClick={handleDelete}
                />

            </div>

        </>
    );


}

