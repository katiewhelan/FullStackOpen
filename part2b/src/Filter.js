import React from 'react'

  const Filter = (props) => {
  return(
  <div>
  <input value={props.searchTerm}
    onChange={props.handleSearchChange}
    />
    </div>
  )
  }

export default Filter
