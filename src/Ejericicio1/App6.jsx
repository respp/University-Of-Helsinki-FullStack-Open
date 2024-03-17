import {React, useState} from 'react'
import { History } from './History'
import { Button } from './Button'

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
        <Button onSmash={handleLeftClick} name={left}/>
        <Button onSmash={handleRightClick} name={right}/>
        <History directions={directions}/>
        <div>Clicks Totales: {allClicks}</div>
        </>
    )



}
export default App