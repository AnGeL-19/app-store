import {FilterMatchMode} from 'primereact/api';

export const productFilter = {
    game: {value: null, matchMode: FilterMatchMode.CONTAINS},
    price: {value: null, matchMode: FilterMatchMode.CONTAINS},
}