import  { useState } from 'react'
import { Button } from 'primereact/button';
import { InputSearch } from '../../../common/table/header/InputSearch';
import { InputDropdown } from '../../../common/table/header/InputDropdown';



export const HeaderTable = ({filters, setFilters, setVisible, setDataForm}) => {

    const [selectedCity, setSelectedCity] = useState(null);

    const cities = [
        { name: '100', code: 'NY' },
        { name: '2000', code: 'RM' },
    ];

    const handleGlobalFilterChange = (event) => {
        const value = event.target.value;
        let _filters = { ...filters };

        _filters['game'].value = value;

        setFilters(_filters);
    };


    const handleShowModal = () => {
        setDataForm({});
        setVisible(true)
    }


    return (
        <div className='flex flex-wrap-reverse gap-3 justify-end'>
            <div className='flex flex-wrap flex-grow-1 gap-3 items-center justify-start'>
                <InputSearch filters={filters} name='game' onGlobalFilterChange={handleGlobalFilterChange} />

                <InputDropdown label='Price min'
                               options={cities}
                               selected={selectedCity}
                               setSelected={setSelectedCity}
                />

                <InputDropdown label='Price max'
                               options={cities}
                               selected={selectedCity}
                               setSelected={setSelectedCity}
                />

            </div>


            <Button label="ADD"
                        icon='pi pi-plus'
                        type="button"
                        size='large'
                        className="btn-font text-white px-5 py-2 bg-dark p-3 border-none"
                        onClick={ handleShowModal }
                />


        </div>
    )

}

