import React, { useState } from 'react'

const Number = ({person}) => {
  return (
    <div>
    <div>Name: {person.name}</div>
    <div> Number:{person.number}</div>
    </div>
  )
}



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchList, setSearchList ] = useState('')
  const [ searchTerm, setSearchTerm] = useState('')

  const isEqual = (first, second) => {
      return JSON.stringify(first) === JSON.stringify(second);
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName,
      number : newNumber
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
      setNewNumber('')
    }

  }

  const handleNameChange = (event) => {

    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {

    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    setSearchList(persons.filter(person => person.name.toLowerCase().includes(event.target.value)))
    console.log('The final list ',searchList, searchTerm)
  }


  return (
    <div>
    <h2>Search</h2>
    <div>
    <input value={searchTerm}
      onChange={handleSearchChange}
      />
      </div>
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
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {searchList.map(person =>
          <Number key={person.name} person={person}/>
        )}
    </div>
  )
}

export default App
