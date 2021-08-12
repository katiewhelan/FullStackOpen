import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './Components/Form.js'
import Filter from './Components/Filter'
import DisplayList from './Components/DisplayList'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchList, setSearchList ] = useState(persons)

  useEffect(() => {
    console.log("Effect")
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log("Promise fulfilled", response.data)
      setPersons(response.data)
      console.log('after set persons ',persons)
      setSearchList(response.data)
    })
  }, [])
  console.log("render", persons.length, 'persons')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
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
      setSearchList(persons.concat(pO))

      axios
      .post('http://localhost:3001/persons', pO)
      .then(response => {
        console.log('Here is the response', response)
      })

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
        <DisplayList persons={searchList}/>
    </div>
  )
}
export default App
