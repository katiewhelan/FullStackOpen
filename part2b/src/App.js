import React, { useState, useEffect } from 'react'
import PersonForm from './Components/Form.js'
import Filter from './Components/Filter'
import DisplayList from './Components/DisplayList'
import personService from './Services/Persons'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchList, setSearchList ] = useState(persons)

  useEffect(() => {
    console.log("Effect")
    personService
    .getAll()
    .then(response => {
      console.log("Promise fulfilled", response)
      setPersons(response)
      setSearchList(response)
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

  const deletePerson = (person) => {

    console.log('in the delete ', person)
    const result = window.confirm(`Are you sure you want to delete ${person.name}`)

    if(result){
      personService
      .remove(person)
      .then(
        setPersons(persons.filter (p => p.id !== person.id)),
        setSearchList(searchList.filter(p => p.id !== person.id))
      )
    }

  }

  const isEqual = (first, second) => {
      return JSON.stringify(first) === JSON.stringify(second);
  }

  const checkForSameName = (pO) => {
    const resultIsEqual = persons.some(p => isEqual(p,pO));
    if (resultIsEqual){
      alert(`${newName} has already been added to the phonebook`)
    } else {
      personService
      .create(pO)
      .then(response => {
        console.log('Here is the response', response)
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
        setSearchList(persons.concat(response))
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
        <DisplayList persons={searchList} deletePerson = {deletePerson}/>
    </div>
  )
}
export default App
