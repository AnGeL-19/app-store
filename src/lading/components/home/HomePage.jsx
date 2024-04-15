import React from 'react'
import { Card } from './components/Card'

export const HomePage = () => {
  return (
    <div className="flex flex-col">
        <h1 className="text-white text-4xl font-bold">All Games</h1>

        <section className="flex flex-wrap gap-5">

          <Card />

          <Card />

          <Card />

          <Card />

          <Card />

        </section>
        

    </div>
  )
}
