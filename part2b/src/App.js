import React, { useState } from 'react'
import Person from './Person.js'
import PersonForm from './Form.js'
import Filter from './Filter'
import DisplayList from './DisplayList'

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

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    console.log('name change', newName , event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    console.log('name change', newNumber , event.target.value)
  }
  const addPerson = (event) => {
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
    console.log('check same called', pO)
    const resultIsEqual = persons.some(p => isEqual(p,pO));
    if (resultIsEqual){
      console.log('is equal')
      alert(`${newName} has already been added to the phonebook`)
    } else {
        console.log('is not equal', persons, pO)
      setPersons(persons.concat(pO))
      console.log('update', persons)
      console.log('Name and number', newName, newNumber)
      setNewName('')
      console.log('new name',newName)
      setNewNumber('')
      console.log('new number', newNumber)
      setSearchList(persons)
    }
  }

  const handleSearchChange = (event) => {
    setSearchList(persons.filter(person => person.name.toLowerCase().includes(event.target.value)))
  }
  return (
    <div>
      <h2>Search</h2>
    <Filter handleSearchChange = {handleSearchChange} />
      <h2>Phonebook</h2>
      <PersonForm onSubmit={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange = {handleNumberChange}/>
      <h2>Numbers</h2>
        <DisplayList persons={persons}/>
    </div>
  )
}
export default App
