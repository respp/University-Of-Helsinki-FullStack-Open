import React, { useState, useEffect } from 'react'
import { Country } from './Country'

export const Display = ({filteredCountries, setFilteredCountries}) => {
const [selectedCountry, setSelectedCountry] = useState([])


useEffect(() => {
  setSelectedCountry([]); // Restablece selectedCountry cuando filteredCountries cambia
}, [filteredCountries]);

if(filteredCountries.length == 0) return null

if (filteredCountries.length == 1){
  const country = filteredCountries[0]
  return <Country country={country} />
}

if (selectedCountry.length == 1){
  console.log('actual :', selectedCountry.length)
  const country = selectedCountry[0]
  return <Country country={country}/>
}

  return (
    <div>
      {filteredCountries.map(country => {
        return(
          <div key={country.area}>
          <p>{country.name.common}</p>
          <button onClick={()=> setSelectedCountry([country])}>show</button>
          </div>
        )
      })
    }
    </div>
    
  )
}