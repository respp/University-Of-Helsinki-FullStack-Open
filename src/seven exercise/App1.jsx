import React, { useEffect, useState } from "react"
import countryServices from "./services/countries"
import { Notification } from "./Notification"
import { Display } from "./Display"

const App = () => {
  const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(false)
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(()=>{
        countryServices
        .getAll()
        .then(res =>{
          // const allNames = res.data.map(country => country.name.common)
          const allNames = res.data
          setCountries(allNames)
          .catch(err=>{
            console.log('Hubo un error en la respuesta: ',err)
          })
        })
    }, [])

    

    useEffect(() => {
      const coincidences = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
      console.log(coincidences)
      
      if (coincidences.length > 10 && coincidences.length < 250){
        setMessage(`Too many matches, specify another filter`)
        setFilteredCountries([])
      }else if (coincidences.length == 250){//Make with or
        setMessage(false)
      }else if(coincidences.length == 0){
        setMessage(false)
        setFilteredCountries([])
      }
      else{
        setMessage(false)
        setFilteredCountries(coincidences)
      }
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
        <Display filteredCountries={filteredCountries} />
  </div>
  )
}

export default App