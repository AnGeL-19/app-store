import React, { useState, useRef } from "react";
import { ItemAction } from "../../../common/table/ItemAction";




export const ActionsBody = (rowData, setData,  setVisible) => {


    const handleData = () => {
        setData(rowData);
        setVisible(true);
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
                            onClick={handleData}
                />

            </div>

        </>
    );


}

