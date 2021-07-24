import React, { useState } from 'react'

const Number = ({person}) => {
  return (
    <div>Name: {person.name}</div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('add button was clicked', event.target)
    const personObject = {
      name : newName
    }

    //copy persons
    //create person

    setPersons(persons.concat(personObject))
    setNewName('')
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
