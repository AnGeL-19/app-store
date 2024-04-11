
import { InputText } from 'primereact/inputtext';

export const InputSearch = ({filters, name, onGlobalFilterChange}) => {

    const value = filters[name] ? filters[name].value : '';

    return (
        <div className='p-input-icon-left border-round-xs'>
            <i className='pi pi-search' />
            <InputText type='text'
                       className='border-gray-900 text-sm py-2 pl-6'
                       value={value || ''}
                       onChange={(e) => onGlobalFilterChange(e)}
                       placeholder="Search..."
            />
        </div>
    );
};
