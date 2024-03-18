import React from 'react'

export const ButtonFeedback = ({onSmash, name}) => {
  return (
    <button onClick={onSmash}>{name}</button>
  )
}
