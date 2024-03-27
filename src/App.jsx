import React, { useEffect, useState } from "react"
import countryServices from "./services/countries"

const App = () => {
    const [filter, setFilter] = useState('')

    useEffect(()=>{
        countryServices
        .getAll()
        .then(res => console.log(res.data))
    }, [])

  return (
<div>
find countries 
    <input
        value={findCoutries}
        onChange={handleFilter}
    />
</div>
  )
}

export default App