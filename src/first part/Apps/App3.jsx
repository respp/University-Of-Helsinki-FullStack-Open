import {React, useState} from 'react'

function App(){

    const [clicks, setClicks] = useState({
      'left' : 0,
      'right' : 0
    })

    //Seteando directamente en set
  const handleLeftClick = ()=>{
    setClicks({
      left: clicks.left + 1,
      right: clicks.right
    })
  } 

  //Seteando con buenas practicas
  const handleRightClick = ()=>{
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  } 

  const {left, right} = clicks

  return (
   <>
   <button onClick={handleLeftClick}>{left}</button>
   <button onClick={handleRightClick}>{right}</button>
   </>
  )
}

export default App

//NOTAS: JavaScript entiende que estás refiriéndote a las mismas propiedades del objeto original clicks, por eso no necesita comillas