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

    personService
    .getAll()
    .then(response => {
      setPersons(response)
      setSearchList(response)
    })
  }, [])


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

  const checkForSameName = (pO) => {
    const match = persons.filter(p => p.name === pO.name)
    console.log('Filter match', match)

    if (match.length === 1){
      const changeNumber = window.confirm(`${newName} has already been added to the phonebook, replace the old number with a new one?`)

      if(changeNumber){

        console.log('person to update', pO , match)
        personService
        .update(match[0].id,pO)
        .then(response => {
          console.log('Here is the update', response)
          setPersons(persons.map(person => person.id !== match[0].id ? person : response))
          setSearchList(searchList.map(searchList => searchList.id !== match[0].id ? searchList : response))

        })
      }
    } else {
      personService
      .create(pO)
      .then(response => {

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
