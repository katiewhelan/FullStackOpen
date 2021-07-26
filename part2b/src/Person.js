import React, { useState } from 'react'

const Person = ({person}) => {
  return (
    <div>
    <div>Name: {person.name}</div>
    <div> Number:{person.number}</div>
    </div>
  )
}


export default Person
