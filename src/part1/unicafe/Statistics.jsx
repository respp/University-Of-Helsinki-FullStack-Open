import React from 'react'
import { DisplayStatistics } from './DisplayStatistics'

export const Statistics = ({statistics}) => {

    const total = statistics.good+statistics.neutral+statistics.bad
    const positivePercentage = statistics.good*100 /total
    const average =(statistics.good-statistics.bad)/total

    if(total === 0){
        return(
            <div>No feedback given</div>
        )
    }

  return (
      <>
      <table>
        <tbody>
            <DisplayStatistics name={'good'} number={statistics.good}/>
            <DisplayStatistics name={'neutral'} number={statistics.neutral}/>
            
            
            <DisplayStatistics name={'bad'} number={statistics.bad}/>
            <DisplayStatistics name={'all'} number={total}/>
            <DisplayStatistics name={'average'} number={average}/>
            <DisplayStatistics name={'positive'} number={`${positivePercentage} %`}/>
        </tbody>
      </table>

    </>
  )
}
