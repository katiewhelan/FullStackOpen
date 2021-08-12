import React from 'react'



const Person = ({person, deletePerson}) => {
  console.log('passed to the person', person )
  return (
    <li>Name: {person.name} Number: {person.number}
      <button onClick={()=> deletePerson(person)}> Delete Contact </button>
    </li>
  )

}


export default Person
