import React from 'react'

export const Persons = ({persons, filter}) => {
    
    const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
    {filteredPersons.map(person => (
        <div key={person.id}>{person.name} {person.number}</div>
      ))}
    </>
  )
}