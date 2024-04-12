
import React from "react";
import { useFormik  } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { schemaUserForm } from "../../../validations/userSchema";




export const FormUser = ({data, handleSubmit}) => {


    const formik = useFormik({
        initialValues: {
            name: data.name ?? {},
        },
        validationSchema: schemaUserForm,
        onSubmit: (data) => {
            handleSubmit(data)
            formik.resetForm();
        }
    });

    
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (

        <div className='w-full h-full px-2 lg:px-5 py-3'>

 
            <form onSubmit={formik.handleSubmit} className='flex flex-col items-center gap-3' >

                <div className="col-12">
                <InputText
                        name="name" 
                        type="text"
                        placeholder="Name"
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                        className={`w-full px-3 py-2 border border-black border-noround ${classNames({ 'p-invalid': isFormFieldValid('name') })}`}
                    />
                    {getFormErrorMessage('name')}
                </div>
                
    
                <Button 
                label="Modify" 
                type="submit"
                className='px-3 py-2 font-bold text-base bg-white text-dark w-1/2 border rounded border-black'  
                />
            </form>



        </div>
    )

}
