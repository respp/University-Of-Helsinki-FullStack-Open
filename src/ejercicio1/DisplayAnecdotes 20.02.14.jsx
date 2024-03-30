import React from 'react'


export const DisplayAnecdotes = ({anecdotes, selected}) => {

    if (selected < 0){
        return(
            <div></div>
        )
      }

  return (
    <div><h4>{anecdotes[selected]}</h4></div>
  )
}
