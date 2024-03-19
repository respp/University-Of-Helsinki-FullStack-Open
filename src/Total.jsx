import React from 'react'

export const Total = ({parts}) => {
  return <h4>total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</h4>
}
