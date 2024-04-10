import React from 'react'

export const UpdateError = ({message}) => {

if(message === false) return null

  return (
    <div className="error-message">
        {message}
    </div>
  )
}