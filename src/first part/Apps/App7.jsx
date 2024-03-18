import {React, useState} from 'react'
import { ButtonFeedback } from '../ButtonFeedback'
import { Statistics } from '../Statistics'



function App(){
    const [statistics, setStatistics]=useState({
        good: 0,
        neutral: 0,
        bad: 0
    })
    
    const handleGood = ()=> setStatistics({...statistics, good: statistics.good+1})
    const handleNeutral = ()=> setStatistics({...statistics, neutral: statistics.neutral+1})
    const handleBad = ()=> setStatistics({...statistics, bad: statistics.bad+1})


    console.log(statistics)

    return(
        <>
        <h1>Give feedback</h1>
        <ButtonFeedback onSmash={handleGood} name={'Good'} />
        <ButtonFeedback onSmash={handleNeutral} name={'Neutral'} />
        <ButtonFeedback onSmash={handleBad} name={'Bad'} />
        <h1>statistics</h1>
        <Statistics statistics={statistics} />
        </>
    )



}
export default App



