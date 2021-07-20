
import React, { useState } from 'react'

const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const [all, setAll] = useState(0)

const handleClickGood = () => {
  setGood(good + 1)
  setAll(all + 1)
  console.log('Good Clicked')
}

const handleClickNeutral = () => {
  setNeutral(neutral +1)
  setAll(all + 1)
  console.log('Nuetral Clicked')
}

const handleClickBad = () => {
  setBad(bad + 1)
  setAll(all + 1)
  console.log('Bad Clicked')
}



  return (
    <div>
    <h1>Give Feedback</h1>
    <button onClick={handleClickGood}>Good</button>
    <button onClick={handleClickNeutral}>Neutral</button>
    <button onClick={handleClickBad}>Bad</button>
    <h1> Statistics </h1>
    <div>Good : {good}</div>
    <div>Neutral : {neutral}</div>
    <div>Bad : {bad}</div>
    <div>All : {all}</div>
    <div>Average : {(good-bad)/all}</div>
    <div>Positive : {(good/all)*100} %</div>
    </div>
  )
}

export default App;
