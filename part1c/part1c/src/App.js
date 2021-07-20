
import React, { useState } from 'react'

const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const handleClickGood = () => {
  setGood(good + 1)
  console.log('Good Clicked')
}

const handleClickNeutral = () => {
  setNeutral(neutral +1)
  console.log('Nuetral Clicked')
}

const handleClickBad = () => {
  setBad(bad + 1)
  console.log('Bad Clicked')
}

  return (
    <div>
    <h1>Give Feedback</h1>
    <button onClick={handleClickGood}>Good</button>
    <div>Good : {good}</div>
    <button onClick={handleClickNeutral}>Neutral</button>
    <div>Neutral : {neutral}</div>
    <button onClick={handleClickBad}>Bad</button>
    <div>Bad : {bad}</div>
    </div>
  )
}

export default App;
