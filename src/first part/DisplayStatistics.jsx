import React from 'react'

export const DisplayStatistics = ({name, number}) => {
  return (
        <tr>
            <td>{name}</td>
            <td>{number}</td>
        </tr>
  )
}
