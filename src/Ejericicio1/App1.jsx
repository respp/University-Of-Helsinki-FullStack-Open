import React, {useState} from 'react'
import { Searchbox } from './Searchbox.jsx'
import {Header} from './Header.jsx'
import { Content } from './Content.jsx'
import { Total } from './Total.jsx'
import { data } from './Course.jsx'
import { NewExercise } from './NewExercise.jsx'
function App() {
  const [course, setCourse] = useState(data)   

  const addExercise = (newExercise) => {
    const updatedParts = [...course.parts, newExercise]
    setCourse({...course, parts: updatedParts})
    console.log(course)
  }
  return (
    <>
      {/* <Searchbox /> */}
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <NewExercise addExercise={addExercise}/>

    </>
  )
}

export default App
