import React from 'react'



const Person = ({person, deletePerson}) => {
  return (
    <li>Name: {person.name} Number: {person.number}
      <button onClick={()=> deletePerson(person)}> Delete Contact </button>
    </li>
  )

}


export default Person
