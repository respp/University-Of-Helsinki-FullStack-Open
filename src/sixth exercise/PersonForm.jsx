import React from 'react'

export const PersonForm = ({newName, setNewName, newNumber ,setNewNumber}) => {
    

    const handleContactChange = (e)=>{
        setNewName(e.target.value)
      }

      const handleNumberChange = (e)=>{
        setNewNumber(e.target.value)
      }
  return (
    <>
        <div>
            name: <input 
                    value={newName}
                    onChange={handleContactChange} /> <br />
            number: <input 
                    value={newNumber}
                    pattern="[0-9]+"
                    onChange={handleNumberChange} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
            <div>debug: {newNumber}</div>
    </>
  )
}
