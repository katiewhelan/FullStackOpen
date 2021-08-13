import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Country from './Components/Country.js'
const App = () => {
  const [searchString, setSearchString] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  const handleSearchChange = (event) => {
    setSearchString(event.target.value)
  }

  const handleShowDetails = (item) => {
    setSearchResults([item])
  }

const Results = ({searchResults}) => {


  if(searchResults.length === 1) {
    return (
      <Country country = {searchResults[0]} />
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
