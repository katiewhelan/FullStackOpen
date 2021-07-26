import React, { useState } from 'react'
import Person from './Person.js'
import PersonForm from './Form.js'
import Filter from './Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchList, setSearchList ] = useState(persons)
  const [ searchTerm, setSearchTerm] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    console.log('name change', newName , event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    console.log('name change', newNumber , event.target.value)
  }
  const addName = (event) => {
    event.preventDefault()
    console.log('AddName Called', event)
    const personObject = {
      name : newName,
      number : newNumber
    }
    checkForSameName(personObject)
  }

  const isEqual = (first, second) => {
      return JSON.stringify(first) === JSON.stringify(second);
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    setSearchList(persons.filter(person => person.name.toLowerCase().includes(event.target.value)))
    console.log('The final list ',searchList, searchTerm)
  }
  return (
    <div>
      <h2>Search</h2>
    <Filter />
      <h2>Phonebook</h2>

      <h2>Numbers</h2>
        {searchList.map(person =>
          <Person key={person.name} person={person}/>
        )}
    </div>
  )
}
export default App
