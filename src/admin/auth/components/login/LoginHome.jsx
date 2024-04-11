import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from 'primereact/button';
import { shemaLogin } from '../../../validations/loginShema';
import { useAuthAdmin } from '../../../hooks/useAuthAdmin';

export const LoginHome = () => {

  const { mutationLogin: auth, error } = useAuthAdmin();

  const handleSubmit = (data) => {

    auth.mutate({
        data
    });

  
  }

  return (
    <div className="h-full w-full p-3">

      <div className="flex justify-center items-center h-full">
        <div className="w-[500px] px-8 py-10 bg-dark-semibold rounded-lg">
          <h2 className="text-3xl text-white mb-10">KR<span>:v</span>ENEN</h2>

          <span className="text-3xl font-bold text-white block text-center">LOGIN</span>

          { 
            error.length !== 0 && <p className='text-red-500 text-center'>{ error }</p>
          }

          <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={shemaLogin}
              onSubmit={handleSubmit}
          >

            <Form className='flex flex-col gap-5 items-center mt-5'>

                <div className="flex flex-col items-center gap-1 w-full">
                  <Field  type="email" 
                  name="email" 
                  placeholder="Email" 
                  className='px-3 py-2 rounded-sm w-5/6'  
                  />
                  <ErrorMessage name="email" className='text-red-500' component="p" />
                </div>
                
                <div className="flex flex-col items-center gap-1 w-full">
                  <Field  type="password" 
                  name="password" 
                  placeholder="Password" 
                  className='px-3 py-2 rounded-sm w-5/6'
                  />
                  <ErrorMessage name="password" className='text-red-500' component="p" />
                </div>
                
                <Button 
                label="Enter" 
                type="submit"
                className='px-3 py-1 font-bold text-base bg-white text-dark w-1/2 mt-1 hover:bg-yellow-50'  
                />
            </Form>

          </Formik>
          
        </div>
      </div>
      

    </div>
  )
}
