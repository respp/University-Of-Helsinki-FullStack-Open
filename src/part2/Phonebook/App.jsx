import { useState, useEffect } from 'react';
import { Filter } from './Filter';
import { PersonForm } from './PersonForm';
import { Persons } from './Persons';
import { Notification } from './Notification';
import { UpdateError } from './UpdateError';
import personServices from './services/persons';

const App = () => {
  // Estado para almacenar la lista de contactos
  const [persons, setPersons] = useState([]);
  // Estado para almacenar el nombre del nuevo contacto
  const [newName, setNewName] = useState('');
  // Estado para almacenar el número del nuevo contacto
  const [newNumber, setNewNumber] = useState('');
  // Estado para almacenar el filtro de búsqueda
  const [filter, setFilter] = useState('');
  // Estado para gestionar las notificaciones
  const [notification, setNotification] = useState(false);
  // Estado para gestionar los errores de actualización
  const [updateError, setUpdateError] = useState(false);

  // Efecto para cargar los contactos al montar el componente
  const hook = () => {
    personServices
      .getAll()
      .then(res => setPersons(res.data));
  }
  useEffect(hook, []);

  // Función para agregar un nuevo contacto
  const addContact = (e) => {
    e.preventDefault();
    let verify = false;
    persons.forEach(person => {
      if (newName === person.name && newNumber === person.number) {
        verify = true;
        return alert(newName + ' is already added to the phonebook');
      } else if (newName === person.name && newNumber !== person.number) { 
        verify = true;
        const changes = window.confirm(newName + ` is already added to the phonebook, replace the old number with the new one`);
        if (changes) {
          const updatedNumber = { ...person, number: newNumber };
          const id = person.id;

          personServices
            .update(id, updatedNumber)
            .then(res => {
              console.log('se actualizó correctamente');
              setPersons(persons.map(person =>
                person.id !== id 
                  ? person
                  : res.data
              ));
            })
            .catch(err => {
              setUpdateError(`Information of ${person.name} has already been removed from server (${err.message})`);
              setTimeout(() => {
                setUpdateError(false);
              }, 2500);
            });
        }
      }
    });
    if (!verify) { // Añadir contacto si no existe
      const contactObject = {
        name: newName,
        number: newNumber
      };
      personServices
        .create(contactObject)
        .then(res => {
          setPersons(persons.concat(res.data));
          setNotification(`Added ${res.data.name}`);
          setTimeout(() => {
            setNotification(false);
          }, 2500);
          console.log('Added ', res.data);
        })
        .catch(res => console.log('error al crear', res));
      setNewName('');
      setNewNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <UpdateError message={updateError} />
      <Filter filter={filter} setFilter={setFilter} />
      <form onSubmit={addContact}>
        <h2>add a new</h2>
        <PersonForm 
          newName={newName} 
          setNewName={setNewName} 
          newNumber={newNumber} 
          setNewNumber={setNewNumber} 
        />
        <Notification message={notification} />
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} setPersons={setPersons} />
    </div>
  );
}

export default App;
