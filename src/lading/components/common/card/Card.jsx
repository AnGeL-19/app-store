import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Card = ({game}) => {

    const navigate = useNavigate();

    const platforms = [
        {
            icon: '/assets/icons/playstation.svg',
            name: 'playstation',
        },
        {
            icon: '/assets/icons/xbox.svg',
            name: 'xbox',
        },
        {
            icon: '/assets/icons/steam.svg',
            name: 'steam',
        },
        {
            icon: '/assets/icons/nintendo.svg',
            name: 'nintendo',
        }
    ]

    const defaultIcon = {
        icon: '/assets/icons/otherPlatform.svg',
        name: 'otherplatform',
    }

    const showIcon = () => {
        const exist = platforms.find(platform => platform.name.toLowerCase() === game.platform.toLowerCase() )
        return exist ? exist.icon : defaultIcon.icon
    }

  return (
    <div className="w-56">

            <div className="h-72 bg-slate-400 rounded-lg mb-2 relative cursor-pointer"
              onClick={() => navigate('/game/1')}
            >
              <div className="w-full h-full bg-gradient-to-b from-gray-800 via-white to-gray-800 bg-gray-800 absolute top-0 left-0 z-10 opacity-30">
              </div>
              <div className="absolute w-full h-full top-0 left-0 z-20 p-3" >

                <div className=" w-full h-full flex flex-col items-start justify-between">
                  <img src={showIcon()} alt="" className="h-5" />
                  <span className="font-bold text-xl text-white">{game.name}</span>
                </div>

              </div>
              
            </div>
            <div className={`${game.stock !== 0 ? 'bg-dark-strong': 'bg-dark-red-bold'}  px-2 py-1 inline-block rounded-md`}>
              <span className={`${ game.stock !== 0 ? 'text-yellow-light': 'text-red-medium' }  font-semibold`}>{ game.stock !==0 ? 'In Stock' : 'Sold out' }</span>
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
                <span className='text-xl text-white font-bold'>{game.price}</span>
              </div>
            </div>

          </div>
  )
}
