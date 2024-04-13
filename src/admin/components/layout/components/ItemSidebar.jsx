import { useState, useRef } from 'react'
export const ItemSidebar = ({label,fnComponent}) => {

    return (
        <div
            className='w-100 bg-white hover:bg-gray-800 text-black hover:text-white   rounded border-none cursor-pointer d-flex align-items-center p-2'
            onClick={fnComponent}
        >
            <span className='text-base font-bold text-center block'>{label}</span>
        </div>
    )
}
