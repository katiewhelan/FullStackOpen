import React from 'react'
import Person from './Person.js'


const DisplayList = ({persons, deletePerson}) => {
  return (
    <div>{persons.map(person =>
      <Person key={person.name} person={person} deletePerson={deletePerson} />
    )}
    </div>

  )
}

export default DisplayList
