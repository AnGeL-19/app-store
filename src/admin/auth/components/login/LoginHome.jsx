import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const LoginHome = () => {
  return (
    <div className="h-full w-full p-3">

      <div className="flex justify-center items-center h-full">
        <div className="w-[500px] px-8 py-10 bg-dark-semibold rounded-lg">
          <h2 className="text-3xl text-white mb-10">KR<span>:v</span>ENEN</h2>

          <span className="text-3xl font-bold text-white block text-center">LOGIN</span>

          <form className='flex flex-col gap-8 items-center mt-5'>
            <InputText type="text" placeholder="Email" className='px-3 py-2 rounded-sm w-5/6' />
            <InputText type='password' placeholder="Password" className='px-3 py-2 rounded-sm w-5/6' />
           
            <Button label="Enter" className='px-3 py-1 font-bold text-base bg-white text-dark w-1/2 mt-5 hover:bg-yellow-50'  />
          </form>

        </div>
      </div>
      

    </div>
  )
}
