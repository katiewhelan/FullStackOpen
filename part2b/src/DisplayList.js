import React from 'react'
import Person from './Person.js'

const DisplayList = (props) => {

const searchList = props.persons

  return (
    <div>{searchList.map(person =>
      <Person key={person.name} person={person}/>
    )}
    </div>

  )
}

export default DisplayList
