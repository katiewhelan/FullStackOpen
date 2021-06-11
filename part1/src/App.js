import React from 'react'
const Hello = (props) => {
  return (
    <div>
      <p>Hello, {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name1 = 'Peter'
  const age = 15
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Katie' age = {age}/>
      <Hello name='Matt' age = {39}/>
      <Hello name ='Finn' age ={1.5}/>
      <Hello name = {name1} age = {age}/>
    </div>
  )
}
export default App
