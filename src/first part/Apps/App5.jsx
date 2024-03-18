import {React, useState} from 'react'

function App(){
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [directions, setDirections] = useState([])
    const [allClicks, setAllClicks] = useState([])

    const handleLeftClick =()=>{
        const newClick = left+1
        const direction = directions.concat('L')
        setLeft(newClick)
        setDirections(direction)
        setAllClicks(newClick+right)
    }
    
    const handleRightClick =()=>{
        const newClick = right+1
        const direction = directions.concat('R')
        setRight(newClick)
        setDirections(direction)
        setAllClicks(newClick+left)

    }

    return(
        <>
        <button onClick={handleLeftClick}>{left}</button>
        <button onClick={handleRightClick}>{right}</button>
        <div>Directions: {directions.join(' ')}</div>
        <div>Clicks Totales: {allClicks}</div>
        </>
    )



}
export default App