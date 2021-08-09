import React, {useState, useEffect} from 'react'
import axios from 'axios'
const App = () => {
  const [searchString, setSearchString] = useState('')

  const [showResults, setShowResults] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  const handleSearchChange = (event) => {
    setSearchString(event.target.value)
  }

  const SingleResult = ({item}) => {
    console.log('item', item , {item})
    return(
          <div>
          <h1>{item.name}</h1>
          <div>Capital: {item.capital}</div>
          <div>Population: {item.population}</div>
          <h2>Languages</h2>
          {item.languages.map(lang =>
            <li key={lang.iso639_1}>{lang.name}</li> )}
            <img src={item.flag} alt='Flag' width="200" height="75"/>
          </div>
    )
  }
  const handleShowDetails = (item) => {

    console.log('Hello button click', item)
    setSearchResults([item])
  }

const Results = ({searchResults}) => {

  if(searchResults.length === 1) {
    console.log('hello', searchResults[0])

    return (
      <SingleResult item = {searchResults[0]} />
    )
  } else {
      return(
        <div>
          {searchResults.map(item =>
            <div key={item.name}> {item.name}
            <button value = {item} onClick={() => handleShowDetails(item)}>Show Details</button>
            </div>)}
        </div>
      )
    }
  }

  useEffect(() => {
    if(searchString.length > 0) {
      axios
      .get(`https://restcountries.eu/rest/v2/name/${searchString}`)
        .then(response => {
          if(response.data.length >= 11) {
            setShowResults(false)
        } else {
          setShowResults(true)
          setSearchResults(response.data)
          console.log('DATA', response.data)
        }
      })
    }
  },[searchString])
  return (
    <div>
      <div>
        Find Countries : <input value={searchString} onChange={handleSearchChange} />
      </div>
       {showResults ? <Results searchResults={searchResults} /> : <div>Too Many Results, Please Keep searching </div> }
      </div>
    );

}

export default App;
