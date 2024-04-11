import { useState, useEffect } from 'react'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import { Notification } from './Notification'
import { UpdateError } from './UpdateError'
import personServices from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber ,setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(false)
  const [updateError, setUpdateError] = useState(false)

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
        verify = true
        const changes = window.confirm(newName+` is already added to the phonebook, replace the old number with the new one`)
        if (changes){
          const updatedNumber = {...person, number:newNumber}
          const id = person.id

          personServices
          .update(id,updatedNumber)
          .then(res=>{
            console.log('se actualizó correctamente')
            setPersons(persons.map(person =>
              //Por cada persona si la id no es la que busco, la persona queda como antes, sino, cambia a la data que me de el servidor
              person.id !== id 
                    ? person
                    : res.data
            ))
          })
          .catch(err => {
            setUpdateError(`Information of ${person.name} has already been removed from server (${err.message})`)
            setTimeout(() =>{
              setUpdateError(false)
            },2500)
          })
        }
      }
    })
    if (!verify){ // añado contacto
      const contactObject = {
        name : newName,
        number : newNumber
      }
      personServices
      .create(contactObject)
      .then(res =>{
        setPersons(persons.concat(res.data))
        setNotification(`Added ${res.data.name}`)
        setTimeout(() =>{
          setNotification(false)
        },2500)
        console.log('Added ',res.data)
      })
      .catch(res => console.log('error al crear', res))
      setNewName('')
      setNewNumber('')
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <UpdateError message={updateError}/>
        <Filter filter={filter} setFilter={setFilter}/>
          <form onSubmit={addContact}>
            <h2>add a new</h2>
            <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
            <Notification message={notification}/>
          </form>
        <h2>Numbers</h2>
          <Persons persons={persons} filter={filter} setPersons={setPersons}/>
    </div>
  )
}

export default App