import React, { useState, useRef } from "react";
import { ItemAction } from "../../../common/table/ItemAction";
import { useGames } from "../../../../hooks/useGames";




export const ActionsBody = (rowData, setData,  setVisible) => {


    const { mutationDelPost } = useGames();

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
            <div className='flex gap-3 items-center'>

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

