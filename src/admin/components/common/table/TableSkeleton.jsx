
import {Skeleton} from 'primereact/skeleton';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

const columnTemplate = () => {
    return <Skeleton/>
}

export const TableSkeleton = ({columns}) => {
    return (
        <div>
            <DataTable value={columns} tableStyle={{minWidth: '100%'}}>
                {columns.map((col, i) => (
                    <Column key={i} field={col.field} header={col.header} body={columnTemplate}/>
                ))}
            </DataTable>
        </div>
    )
}

