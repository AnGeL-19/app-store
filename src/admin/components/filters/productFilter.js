import {FilterMatchMode, FilterService} from 'primereact/api';

export const productFilter = {
    nombre: {value: null, matchMode: FilterMatchMode.CONTAINS},
    price: {value: null, matchMode: FilterMatchMode.CUSTOM},
} 

FilterService.register('custom_price', (value, filters) => {
    const [from, to] = filters ?? [null, null];
    if (from === null && to === null) return true;
    if (from !== null && to === null) return from <= value;
    if (from === null && to !== null) return value <= to;
    return from <= value && value <= to;
  });