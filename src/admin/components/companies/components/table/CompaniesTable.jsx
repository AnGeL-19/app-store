import  { useContext, useEffect, useState  } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import {ActionsBody} from "./ActionsBody";
import { HeaderTable } from './HeaderTable';

export const CompaniesTable = ({data , setData,  setVisible }) => {


    const rowsPerPageOptions = [5, 10, 20];

    return (

            <DataTable
                emptyMessage="Not companies data"
                className='text-gray-900'
                filterDisplay="row"
                header={() => (
                    <HeaderTable
                        setVisible={setVisible}
                        setDataForm={setData}
                    />
                )}
                paginator
                rowsPerPageOptions={rowsPerPageOptions}
                rows={5}
                stripedRows
                scrollable
                tableStyle={{ width: '100%' }}
                value={data}
            >

                <Column field="id" header="ID" style={{ minWidth: '100px' }} />

                <Column field="nombre" header="Company" style={{ minWidth: '100px' }}
                />

                <Column
                    body={(rowData) => ActionsBody(rowData, setData, setVisible)}
                    style={{ minWidth: '100px' }}
                />

            </DataTable>

    )
}
