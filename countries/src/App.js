import React, {useState, useEffect} from 'react'
import axios from 'axios'
const App = () => {
  const [searchString, setSearchString] = useState('')
  const [searchCount, setSearchCount] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  const handleSearchChange = (event) => {
    setSearchString(event.target.value)
    setSearchCount(searchCount + 1)
  }

const Results = ({searchResults}) => {
  return(
<div>
{searchResults.map(item => <div key={item.name}> {item.name} </div>)}
</div>
  )
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
  },[searchCount])
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
