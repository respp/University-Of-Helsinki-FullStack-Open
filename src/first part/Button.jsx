import React from 'react'

export const Button = ({onSmash, name}) => {
  return (
    <button onClick={onSmash}>{name}</button>
  )
}
