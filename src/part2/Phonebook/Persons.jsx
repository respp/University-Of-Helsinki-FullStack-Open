import React from 'react'
import personServices from './services/persons'


export const Persons = ({persons, filter, setPersons}) => {
    
    const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

    const deletePersons = id =>{
      personServices.del(id)
      .then( res =>{
        const updatedPersons = persons.filter(persons => persons.id !== id)
        setPersons(updatedPersons)
        console.log('el recurso ha sido eliminado:' ,res.data)
      })
      .catch(res=>{
        console.log('error al cargar el recurso', res)
      })
    }

  return (
    <>
    {filteredPersons.map(person => (
      <li key={person.id}>
        <div >{person.name} {person.number}
        <button onClick={()=> deletePersons(person.id)}>delete</button>
        </div>
        
      </li>
      ))}
    </>
  )
}