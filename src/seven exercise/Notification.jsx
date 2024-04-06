import React from 'react'

export const Notification = ({message}) => {

if(message === false) return null

  return (
    <div className="added-message">
        {message}
    </div>
  )
}