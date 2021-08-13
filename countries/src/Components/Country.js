import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Country = ({country}) => {
const [weatherResults, setWeatherResults] = useState([])
const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY
const [showWeather, setShowWeather] = useState(false)


  useEffect(() => {
    axios
    .get(`http://api.weatherstack.com/current?access_key=${weatherAPIKey}&query=${country.capital}&units=f`)
    .then(response=>{
      console.log('response from weather', response.data, response.data.success, response.status, response)
      if(response.data.success === false){

      } else {
        console.log("should show")
        setWeatherResults(response.data)
        setShowWeather(true)
      }

    }).catch(error => {
      setShowWeather(false)
    })
  },[])
  return(
        <div>
        <h1>{country.name}</h1>
        <div>Capital: {country.capital}</div>
        <div>Population: {country.population}</div>
        <h2>Languages</h2>
        {country.languages.map(lang =>
          <li key={lang.iso639_1}>{lang.name}</li>
        )}
          <img src={country.flag} alt='Flag' width="200" height="75"/>
          {showWeather ?
          <div>
            <h2>Weather in {country.name}</h2>
            <div>Temperature in {country.capital} is {weatherResults.current.temperature} degrees F</div>
            <img src={weatherResults.current.weather_icons[0]} alt='weather' />
            <div>Wind: {weatherResults.current.wind_speed}  mph {weatherResults.current.wind_dir}</div>
          </div> : null
        }
        {!showWeather ? <div> There was an error getting weather information</div>: null}
        </div>
  )
}

export default Country
