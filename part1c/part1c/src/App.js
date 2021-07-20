
import React, { useState } from 'react'

const Statistics = props => {
  return (
    <div>
      <h1> Statistics </h1>
      <div>Good : {props.good}</div>
      <div>Neutral : {props.neutral}</div>
      <div>Bad : {props.bad}</div>
      <div>All : {props.all}</div>
      <div>Average : {(props.good-props.bad)/props.all}</div>
      <div>Positive : {(props.good/props.all)*100} %</div>
    </div>
  )
}

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
    <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App;
