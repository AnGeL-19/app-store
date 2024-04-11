import  { useContext, useEffect, useState  } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import {ActionsBody} from "./ActionsBody";
import { HeaderTable } from './HeaderTable';

export const ProductsTable = ({data, filters ,setData,  setVisible }) => {


    const rowsPerPageOptions = [5, 10, 20];
    const [dataFilters, setFilters] = useState(filters);

    return (

            <DataTable
                emptyMessage="Not products data"
                className='text-gray-900'
                header={() => (
                    <HeaderTable
                        filters={dataFilters}
                        setFilters={setFilters}
                        setVisible={setVisible}
                        setDataForm={setData}
                    />
                )}
                filters={dataFilters}
                filterDisplay="row"
                paginator
                rowsPerPageOptions={rowsPerPageOptions}
                rows={5}
                stripedRows
                scrollable
                tableStyle={{ width: '100%' }}
                value={data}
            >

                <Column field="id" header="ID" style={{ minWidth: '100px' }} />

                <Column field="game.name" header="Game" style={{ minWidth: '100px' }}/>

                <Column field="company.name" header="Company" style={{ minWidth: '100px' }}/>

                <Column field="price" header="Price" style={{ minWidth: '100px' }}/>

                <Column
                    body={(rowData) => ActionsBody(rowData, setData, setVisible)}
                    style={{ minWidth: '100px' }}
                />

            </DataTable>

    )
}
