
import { Dropdown } from 'primereact/dropdown';

export const InputDropdown = ({ label, selected, options, setSelected }) => {

    return (
        <div className='relative'>
            <div className='p-input-icon-left border-round-xs'>
                <i className='pi pi-filter z-5'/>
                <Dropdown inputId={label}
                          value={selected}
                          onChange={(e) => setSelected(e.value)}
                          options={options}
                          optionLabel='name'
                          placeholder="Filter"
                          className='border border-black pl-4 text-sm'
                />
            </div>
            <label htmlFor={label} className='absolute text-xs bg-white px-1' style={{
                top: '-13px',
                left: '10px',
            }}>
                { label }
            </label>
        </div>
    );
};
