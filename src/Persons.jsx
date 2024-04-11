import React from 'react'
import personServices from './services/persons'


export const Persons = ({persons, filter, setPersons}) => {
    
    const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

    const deletePersons = (id, name) =>{
      const confirm = window.confirm('delete '+name)
      if (confirm){
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
    }

  return (
    <>
    {filteredPersons.map(person => (
      <li key={person.id}>
        <div >{person.name} {person.number}
        <button onClick={()=> deletePersons(person.id, person.name)}>delete</button>
        </div>
        
      </li>
      ))}
    </>
  )
}