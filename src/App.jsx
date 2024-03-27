import React, { useEffect, useState } from "react"
import countryServices from "./services/countries"
import { Notification } from "./Notification"

const App = () => {
  const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(false)
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(()=>{
        countryServices
        .getAll()
        .then(res =>{
          const allNames = res.data.map(country => country.name.common)
          setCountries(allNames)
        })
    }, [])

    

    useEffect(() => {
      const coincidences = countries.filter(country => country.toLowerCase().includes(filter.toLowerCase()))
      if (coincidences.length > 10){
        console.log(coincidences.length)
        setMessage(`Too many matches, specify another filter`)
      }
      if(coincidences === 0){
        setMessage(false)
      }
      setFilteredCountries(coincidences)
    }, [countries, filter])
    

    const handleFilterChange = (e)=>{
      const keyValue = e.target.value
      setFilter(keyValue)
    }

  return (
  <div>
        find countries 
        <input
          value={filter}
          onChange={handleFilterChange}
        />
        <Notification message={message}/>
  </div>
  )
}

export default App