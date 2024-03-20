import { useState } from 'react'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber ,setNewNumber] = useState('')
  const [filter, setFilter] = useState('')



  const verifyEquity =(obj1, obj2)=>{
    return JSON.stringify(obj1) === JSON.stringify(obj2)
  }

  const addContact = (e)=>{
    e.preventDefault()
    let verify = false
    persons.forEach(person => {
      if(verifyEquity(newName, person.name)){
        verify = true
        return alert(newName+' is already added to the phonebook')
      }
    })
    if (!verify){
      const contactObject = {
        name : newName,
        id : newName,
        number : newNumber
      }
      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <Filter filter={filter} setFilter={setFilter}/>
      <h2>add a new</h2>
        <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      </form>
      <h2>Numbers</h2>
        <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App
