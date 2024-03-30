export const Country =({country})=>{

    const languages = Object.values(country.languages)
    // console.log(country)
    return (
      <div>
        <h1 key={country.name.common}>{country.name.common}</h1>
        <div>Capital: {country.capital}</div>
        <div>Area: {country.area}</div>
        <h2>Languages: </h2>
        
        <ul>
        {
          languages.map(language =>{
            return(
              <li key={language}>{language}</li>
            )
          })
        }
        </ul>
        <img src={country.flags.png} alt={country.flags.png} />
      </div>
    )
}

