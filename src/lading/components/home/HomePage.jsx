import React, { useMemo, useState } from 'react'

import { WrapperBanner } from '../wrapper/WrapperBanner';
import { Platforms } from './components/Platforms';
import { Banner } from './components/Banner';
import { CorouselProducts } from '../common/carousel/CorouselProducts';

export const HomePage = () => {

  
  const gamesBanner = [
    {
      img: '/assets/imgs/halo.png',
      name: 'halo'
    },
    {
      img: '/assets/imgs/god-of-war.png',
      name: 'halo'
    },
    {
      img: '/assets/imgs/smash.png',
      name: 'halo'
    },
    {
      img: '/assets/imgs/csgo.png',
      name: 'halo'
    },
    {
      img: '/assets/imgs/rrd.png',
      name: 'halo'
    },
    {
      img: '/assets/imgs/fifa.png',
      name: 'halo'
    }
  ]


  return (
    <div className="min-h-screen">

      <div className="absolute top-[50px] left-0 w-full h-[80vh]">
       
        <WrapperBanner items={gamesBanner}>
          <Banner />
        </WrapperBanner>
      
      </div>

  
        <div className='h-[79vh]'></div>

        <Platforms  />

        <div className='w-screen-container m-auto px-2'>
          <h2 className='ml-9 mt-12 mb-3 text-3xl text-white-light font-bold'>SPECIAL OFFERS</h2>

          <div className='mb-10'>
            <CorouselProducts />
          </div>
          
        </div>

    </div>
  )
}
