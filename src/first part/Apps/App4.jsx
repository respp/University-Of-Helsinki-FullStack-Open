import {React, useState} from 'react'

function App(){

    const [clicks, setClicks] = useState({
      'left' : 0,
      'right' : 0
    })

  const handleLeftClick = ()=>{
    const newClicks = {...clicks, left: clicks.left + 1}
    setClicks(newClicks)
  } 

  const handleRightClick = ()=>{
    setClicks({...clicks, right: clicks.right + 1})
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

//está prohibido en React mutar el estado directamente!!!