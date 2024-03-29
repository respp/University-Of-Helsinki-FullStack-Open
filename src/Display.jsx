import React from 'react'
import { createLogger } from 'vite'

export const Display = ({filteredCountries}) => {

console.log(filteredCountries.length , filteredCountries)
if(filteredCountries.length == 0) return null

// if (filteredCountries == 1){
//   // console.log('succes', filteredCountries[0])
//   return (
//     <div>
//       <h1>{filteredCountries[0].name.common}</h1>
//     </div>
//   )
// }


  return (
    <div>
      {filteredCountries.map(country => {
        return(
          <p key={country.length}>{country.name.common}</p>
        )
      })
    }
    </div>
    
  )
}