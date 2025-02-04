import React from 'react'
import { Link } from 'react-router-dom'

const Weather = () => {
  const cities: string[] = ['Manchester', 'London', 'Cardif', 'Liverpool']
  return (
    <div>
      <h1 className='text-base'>Weather</h1>
      {cities.map((city, index) => (
        <Link className='flex' key={index+1} to={`/weather/${city}`}>{city}</Link>
      ))}
    </div>
  )
}

export default Weather
