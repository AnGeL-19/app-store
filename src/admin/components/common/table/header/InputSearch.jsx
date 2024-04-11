
import { InputText } from 'primereact/inputtext';

export const InputSearch = ({filters, name, onGlobalFilterChange}) => {

    const value = filters[name] ? filters[name].value : '';

    return (
        <div className='p-input-icon-left border-round-xs'>
            <i className='pi pi-search' />
            <InputText type='text'
                       className='border border-black text-sm py-2.5 pl-6 h-full'
                       value={value || ''}
                       onChange={(e) => onGlobalFilterChange(e)}
                       placeholder="Search..."
            />
        </div>
    );
};
