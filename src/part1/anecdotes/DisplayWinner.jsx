import React from 'react'


export const DisplayWinner = ({winnerId, votesForWinner}) => {
    if (votesForWinner <= 0){
        return(
            <div></div>
        )
      }

  return (
    <div><h2>Anecdote with most votes:
      <div><h6>{winnerId}</h6><br /> Votes: <h4>{votesForWinner}</h4></div>
    </h2></div>
    )
}
