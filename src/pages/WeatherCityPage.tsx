import React from 'react'
import { useParams } from 'react-router-dom'

const WeatherCityPage = () => {
  const params = useParams<{ city: string }>();
  return (
    <div>
      {params.city}
    </div>
  )
}

export default WeatherCityPage
