import { useState } from 'react'
import { Display } from './Display'
import { Boton } from './SumarContador'

const App = () => {

  const [ counter, setCounter ] = useState(0)

    const increaseByOne =()=> setCounter(counter+1)
    const decreaseByOne =()=> setCounter(counter-1)
    const setToZero  =()=> setCounter(0)

  return (
    <>
    <Boton onSmash={increaseByOne} name={'Sumar contador'}/>
    <Boton onSmash={setToZero} name={'Volver a cero'}/>
    <Boton onSmash={decreaseByOne} name={'Restar contador'}/>
    <Display counter={counter}/>
    </>
  )
}

export default App