import  { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import { InputSearch } from '../../../common/table/header/InputSearch';
import { InputDropdown } from '../../../common/table/header/InputDropdown';

export const HeaderTable = ({filters, setFilters, setVisible, setDataForm}) => {

    const [selectedPriceMin, setSelectedPriceMin] = useState(null);
    const [selectedPriceMax, setSelectedPriceMax] = useState(null);

    const prices = [
        { price: 100 },
        { price: 500 },
        { price: 1000 },
        { price: 1500 },
        { price: 2000 },
        { price: 2500 },
    ];


    const handleSearchFilterChange = (event) => {
        const value = event.target.value;
        let _filters = { ...filters };

        _filters['nombre'].value = value;

        setFilters(_filters);
        
    };

  

    const handleShowModal = () => {
        setDataForm({});
        setVisible(true)
    }


    return (
        <div className='flex flex-wrap-reverse gap-3 justify-end'>
            <div className='flex flex-wrap flex-grow-1 gap-3 items-center justify-start'>
                <InputSearch filters={filters} name='nombre' onGlobalFilterChange={handleSearchFilterChange} />

                {/* <InputDropdown label='Price min'
                               name='price'
                               options={prices}
                               selected={selectedPriceMin}
                               setSelected={setSelectedPriceMin}
                />

                <InputDropdown label='Price max'
                               name='price'
                               options={prices}
                               selected={selectedPriceMax}
                               setSelected={setSelectedPriceMax}
                /> */}

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

