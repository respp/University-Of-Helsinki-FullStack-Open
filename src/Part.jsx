import React from 'react'

export const Part = ({part, exercises}) => {
  return (
    <ul>
        <li><h2>{part}</h2></li>
        <li><p>{exercises}</p></li>
    </ul>
  )
}
