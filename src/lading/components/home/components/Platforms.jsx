import React from 'react'
import { ItemPlatform } from './ItemPlatform'

export const Platforms = () => {

    const platforms = [
        {
            name: 'Nintendo',
            icon: 'assets/icons/nintendo.svg',
            color: 'bg-red-nintendo'
        },
        {
            name: 'Steam',
            icon: 'assets/icons/steam.svg',
            color: 'bg-blue-steam'
        },
        {
            name: 'PlayStation',
            icon: 'assets/icons/playstation.svg',
            color: 'bg-blue-playstation'
        },
        {
            name: 'XBOX',
            icon: 'assets/icons/xbox.svg',
            color: 'bg-green-xbox'
        },
    ]

  return (
    <div className='flex w-full '>
        
        {
            platforms.map( platform => (
                <ItemPlatform 
                    key={platform.name} 
                    name={platform.name} 
                    icon={platform.icon} 
                    color={platform.color}
                />
            ))
        }
 
    </div>
  )
}
