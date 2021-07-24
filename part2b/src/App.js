import React, { useState } from 'react'

const Number = ({person}) => {
  return (
    <div>Name: {person.name}</div>
  )
}

const isEqual = (first, second) => {
    return JSON.stringify(first) === JSON.stringify(second);
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName
    }
    checkForSameName(personObject)
  }

  const checkForSameName = (pO) => {
    const resultIsEqual = persons.some(p => isEqual(p,pO));
    if (resultIsEqual){
      alert(`${newName} has already been added to the phonebook`)
    } else {
      setPersons(persons.concat(pO))
      setNewName('')
    }

  }

  const handleNameChange = (event) => {
    console.log('Handle Change', event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

        {persons.map(person =>
          <Number key={person.name} person={person}/>
        )}
    </div>
  )
}

export default App
