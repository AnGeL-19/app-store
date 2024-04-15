import React from 'react'

export const Card = () => {
  return (
    <div className="w-56">

            <div className="h-72 bg-slate-400 rounded-lg mb-2 relative">
              <div className="w-full h-full bg-gradient-to-b from-gray-800 via-white to-gray-800 bg-gray-800 absolute top-0 left-0 z-10 opacity-30">
              </div>
              <div className="absolute w-full h-full top-0 left-0 z-20 p-3" >

                <div className=" w-full h-full flex flex-col items-start justify-between">
                  <img src="/assets/icons/playstation.svg" alt="" className="h-5" />
                  <span className="font-bold text-xl text-white">Fifa 2023</span>
                </div>

              </div>
              
            </div>
            <div className="bg-dark-strong px-2 py-1 inline-block rounded-md">
              <span className="text-yellow-light font-semibold">In Stock</span>
            </div>

            <div className='mt-1 flex justify-between'>
              <div className='flex gap-2'>
                <div>
                  <span className='text-gray-medium line-through text-base font-extrabold'>$1500</span>
                </div>
                <div className='px-2 border border-red-bold bg-red-light rounded-md inline-block'> 
                  <span className="text-red-bold font-semibold text-sm">-$15</span>
                </div>
              </div>
              <div>
                <span className='text-xl text-white font-bold'>$1,200</span>
              </div>
            </div>

          </div>
  )
}
