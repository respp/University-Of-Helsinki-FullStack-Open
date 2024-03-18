import React from 'react'


export const DisplayWinner = ({winnerId, votesForWinner}) => {
    if (votesForWinner <= 0){
        return(
            <div></div>
        )
      }

  return (
    <div><p>El ganador es: 
      <h4>{winnerId}</h4><br /> y su puntaje es: <h4>{votesForWinner}</h4>
    </p></div>
    )
}
