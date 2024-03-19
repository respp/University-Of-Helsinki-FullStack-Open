import React from 'react'

export const Parts = ({parts}) => {
  return (
    <>
     {
        parts.map(part => 
          <p key={part.id}>{part.name} : {part.exercises}</p>
          )
      }
    </>
  )
}
