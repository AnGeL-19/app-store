import React from 'react'
import { Card } from './components/Card'

export const HomePage = () => {

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
    }
  ]

  return (
    <div className="flex flex-col">
        <h1 className="text-white text-4xl font-bold">All Games</h1>

        <section className="w-full flex flex-wrap gap-5">

          {
            games.map( game => (
              <Card key={game.id} game={game} />
            ))
          }

        </section>
        

    </div>
  )
}
