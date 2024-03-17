import { React, useState } from 'react';

export const NewExercise = ({addExercise}) => {
    const [formData, setFormData] = useState({
      name: '',
      email: ''
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;

      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
      addExercise({
        name: formData.name,
        exercises: parseInt(formData.exercises)
      })
      setFormData({
        name: '',
        exercises: ''
      })
    };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="exercises">Número de ejercicios:</label>
        <input
          type="number"
          id="exercises"
          name="exercises"
          value={formData.exercises}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Agregar Ejercicio</button>
    </form>
    </>
  )
}
