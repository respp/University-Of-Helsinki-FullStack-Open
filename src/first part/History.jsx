import React from 'react'

export const History = ({directions}) => {


        if(directions.length === 0){
            return (
                <h4>
                    'La app no tiene ningun historial de direcciones'
                </h4>
            )}

  return (
    <div>{'Directions: '+ directions.join(' ')}</div>
  )
}

// A esto se le llama renderizado condicional