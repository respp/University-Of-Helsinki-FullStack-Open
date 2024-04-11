import React from 'react'

export const Filter = ({filter ,setFilter }) => {

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
      };
  return (
    <div>
    filter shown with : 
    <input 
      value={filter}
      onChange={handleFilterChange}
    />
  </div>
  )
}