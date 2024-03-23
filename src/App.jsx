import { useState, useEffect } from 'react'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import personServices from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber ,setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
  personServices
  .getAll()
  .then( res => setPersons(res.data))
  }
useEffect(hook, [])

  const addContact = (e)=>{
    e.preventDefault()
    let verify = false
    persons.forEach(person => {
      if(newName === person.name && newNumber === person.number){
        verify = true
        return alert(newName+' is already added to the phonebook')
      }else if(newName === person.name && newNumber !== person.number){ 
        const changes = window.confirm(newName+` is already added to the phonebook, replace the old number with the new one`)
        if (changes){
          const updatedPersons = persons.find(persons => persons.number === newNumber)
          const changedNumber = {...persons, number: newNumber}
          personServices.put(person.id,newNumber).then(res=>{
            setPersons()
          })
        }
      }
    })
    if (!verify){
      const contactObject = {
        name : newName,
        number : newNumber
      }
      personServices
      .create(contactObject)
      .then(res =>{
        setPersons(persons.concat(res.data))
        console.log(res.data)
      }
    )
      setNewName('')
      setNewNumber('')
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={filter} setFilter={setFilter}/>
          <form onSubmit={addContact}>
            <h2>add a new</h2>
            <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
          </form>
        <h2>Numbers</h2>
          <Persons persons={persons} filter={filter} setPersons={setPersons}/>
    </div>
  )
}

export default App