import { useState, useEffect } from 'react'
import axios from 'axios'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber ,setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
  axios
  .get('http://localhost:3001/persons')
  .then( res => {
    console.log('promise fulfilled')
    setPersons(res.data)
  })
}

useEffect(hook, [])


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