import React from 'react'
import { Carousel } from 'primereact/carousel';
import { Card } from '../card/Card';

export const CorouselProducts = () => {

    const games = [
        {
          id: 1,
          name: 'Gear of  war',
          stock: 10,
          price: '$1000',
          platform: 'xbox'
        },
        {
          id: 2,
          name: 'Fifa 2024',
          stock: 10,
          price: '$1200',
          platform: 'steam'
        },
        {
          id: 3,
          name: 'God of war',
          stock: 0,
          price: '$2000',
          platform: 'playstation'
        },
        {
          id: 4,
          name: 'Mario cart 2',
          stock: 10,
          price: '$800',
          platform: 'nintendo'
        },
        {
          id: 5,
          name: 'Amoun us',
          stock: 6,
          price: '$200',
          platform: 'otherplatform'
        },
        {
            id: 6,
            name: 'Tom Rider',
            stock: 12,
            price: '$2800',
            platform: 'Playstation'
        },
        {
            id: 7,
            name: 'Zelda ocarina',
            stock: 3,
            price: '$1200',
            platform: 'nintendo'
        },
        {
            id: 8,
            name: 'DK',
            stock: 1,
            price: '$500',
            platform: 'nintendo'
        }
      ]

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];


  return (
    <section className="w-full">
        <Carousel value={games} 
        numVisible={4} 
        numScroll={4} 
        responsiveOptions={responsiveOptions} 
        className="custom-carousel" 
        circular
        autoplayInterval={3000} 
        itemTemplate={(product) => <Card game={product}/> } />
        
    </section>
  )
}
