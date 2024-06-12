import React from 'react'
import { Button } from 'primereact/button'


export const Banner = () => {
  return (
    <>
        <div className="w-full h-full absolute z-10 bg-black opacity-65">
          </div>
          <div className="w-full h-full absolute z-20 flex justify-center items-center">
            <div className="max-w-[980px] flex flex-col justify-center items-center gap-12">
              <h1 className="text-white-light text-7xl font-extrabold text-center leading-[78px]">Find the best games at the best prices</h1>
              <p className="text-white-light text-2xl font-normal">Enjoy the experience with family and friends.</p>

              <Button
              size='large' 
              className="w-52 h-14 bg-yellow-light  px-3 py-2" 
              >
                <span className='w-full text-center text-2xl  font-bold text-black'>
                  Let’s Go!
                </span>
              </Button>
            </div>
        </div>
    </>
  )
}
