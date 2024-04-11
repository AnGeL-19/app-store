
import React, { useState } from "react";
import { useFormik, ErrorMessage } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { schemaProductsForm } from "../../../../validations/productSchema";


export const FormProduct = ({data, handleSubmit}) => {

    const formik = useFormik({
        initialValues: {
            company: data.company ?? {},
            game: data.game ?? {},
            stock: data.stock ?? '',
            price: data.price ?? ''
        },
        validationSchema: schemaProductsForm,
        onSubmit: (data) => {
            handleSubmit(data)
            formik.resetForm();
        }
    });

    const games = [
        { id: 1, name: 'Zelda' },
        { id: 2 ,name: 'Mario' },
        { id: 3 ,name: 'God of war' },
    ];

    const companies = [
        { id: 1, name: 'XBOX' },
        { id: 2 ,name: 'Nintendo' },
        { id: 3 ,name: 'Steam' },
    ];

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (

        <div className='w-full h-full px-2 lg:px-5 py-3'>

 
            <form onSubmit={formik.handleSubmit} className='flex flex-col items-center gap-3' >


            <div className="col-12">
                    <Dropdown
                        name="company" 
                        placeholder="Companies"
                        value={formik.values.company} 
                        onChange={formik.handleChange} 
                        options={companies} 
                        optionLabel="name" 
                        className={`w-full border border-black border-noround ${classNames({ 'p-invalid': isFormFieldValid('company.name') })}`}
                    />
                    { (formik.errors && formik.errors.company) && <small className="p-error">{ formik.errors.company.name }</small> }
                </div>

                <div className="col-12">
                    <Dropdown
                        name="game" 
                        placeholder="Games"
                        value={formik.values.game} 
                        onChange={formik.handleChange} 
                        options={games} 
                        optionLabel="name" 
                        className={`w-full border border-black border-noround ${classNames({ 'p-invalid': isFormFieldValid('game.name') })}`}
                    />
                    { (formik.errors && formik.errors.game) && <small className="p-error">{ formik.errors.game.name }</small> }
                </div>
                
                <div className="flex flex-row w-full">

                    <div className="col-6">
                    <InputText
                        name="stock" 
                        type="number"
                        placeholder="Stock"
                        value={formik.values.stock} 
                        onChange={formik.handleChange} 
                        className={`w-full px-3 py-2 border border-black border-noround ${classNames({ 'p-invalid': isFormFieldValid('stock') })}`}
                    />
                        {getFormErrorMessage('stock')}
                    </div>

                    <div className="col-6">
                    <InputText
                        name="price" 
                        type="number"
                        placeholder="Price"
                        value={formik.values.price} 
                        onChange={formik.handleChange} 
                        className={`w-full px-3 py-2 border border-black border-noround ${classNames({ 'p-invalid': isFormFieldValid('price') })}`}
                    />
                        {getFormErrorMessage('price')}
                    </div>

                </div>
                
                
                <Button 
                label="Add" 
                type="submit"
                className='px-3 py-2 font-bold text-base bg-white text-dark w-1/2 border rounded border-black'  
                />
            </form>



        </div>
    )

}
