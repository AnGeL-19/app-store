
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from 'primereact/button';

import { schemaProductsForm } from "../../../../validations/productSchema";


export const FormProduct = ({data, onSubmit}) => {

    console.log(data)


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

    return (

        <div className='w-full h-full px-2 lg:px-5 py-3'>

        <Formik
              initialValues={{
                companies: data.companies ?? {},
                games: data.games ?? {},
                stock: data.stock ?? '',
                price: data.price ?? ''
              }}
              validationSchema={schemaProductsForm}
              onSubmit={onSubmit}
          >

            <Form className='flex flex-col gap-8 items-center mt-5'>

                <div className="flex flex-col gap-1 w-full">
                <Field
                    component="select"
                    name="companies"
                    multiple={true}
                >
                    {
                        companies.map( company => (
                            <option key={company.id} value={company.name} >{company.name}</option>
                        ))
                    }
                </Field>
                  <ErrorMessage name="companies.name" className='text-red-500' component="p" />
                </div>

                <div className="flex flex-col gap-1 w-full">
                <Field
                    component="select"
                    name="games"
                    multiple={true}
                >
                    {
                        games.map( game => (
                            <option key={game.id} value={game.name} >{game.name}</option>
                        ))
                    }
                </Field>
                  <ErrorMessage name="games.name" className='text-red-500' component="p" />
                </div>
                
                <div className="grid">
                    <div className="col-12 sm:col-6">
                    <Field  type="number" 
                        name="stock" 
                        placeholder="Stock" 
                        className='px-3 py-2 rounded-sm w-full'
                        />
                        <ErrorMessage name="stock" className='text-red-500' component="p" />
                    </div>

                    <div className="col-12 sm:col-6">
                    <Field  type="number" 
                        name="price" 
                        placeholder="Price" 
                        className='px-3 py-2 rounded-sm w-full'
                        />
                        <ErrorMessage name="price" className='text-red-500' component="p" />
                    </div>

                </div>
                
                
                <Button 
                label="Add" 
                type="submit"
                className='px-3 py-1 font-bold text-base bg-white text-dark w-1/2 mt-5 hover:bg-yellow-50'  
                />
            </Form>

          </Formik>

        </div>
    )

}
