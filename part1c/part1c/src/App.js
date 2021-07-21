
import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {

    if(props.click === 0) {
      return (
        <div>No data </div>
      )
    }
      return (
        <div> {props.name} {props.val} </div>
      )
}

const App = () => {

const [stats, setStats] = useState({
   good: 0, neutral: 0, bad:0, all:0, click:0
 })

const handleClickGood = () => {
    setStats({...stats,
    good: stats.good + 1,
    all: stats.all + 1,
    click: 1
  })
}

const handleClickNeutral = () => {
  console.log("Neutral Clicked")
    setStats({...stats,
    neutral: stats.neutral + 1,
    all: stats.all + 1,
    click: 1
  })
}

const handleClickBad = () => {
  console.log("Bad Clicked")
    setStats({...stats,
    bad: stats.bad + 1,
    all: stats.all + 1,
    click: 1
  })
}



  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => handleClickGood()} text="Good" />
      <Button handleClick={() => handleClickNeutral()} text="Neutral" />
      <Button handleClick={() => handleClickBad()} text="Bad" />
      <h1> Statistics </h1>
      <Statistics name="Good" val={stats.good} click={stats.click}/>
      <Statistics name="Neutral" val={stats.neutral} click={stats.click}/>
      <Statistics name="Bad" val={stats.bad} click={stats.click}/>
      <Statistics name="All" val={stats.all} click={stats.click}/>
      <Statistics name="Average" val={(stats.good-stats.bad)/stats.all} click={stats.click}/>
      <Statistics name="Posative" val={(stats.good/stats.all)*100} click={stats.click}/>
    </div>
  )
}

export default App;
