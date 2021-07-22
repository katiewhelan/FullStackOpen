import React, { useState } from 'react'

const Course = (props) => {
  const {course} = props

  const count = course.parts.reduce((sum,part) => sum + part.exercises,0)

  return (
  <div>

    <h1>Hello</h1>
    <h1>{course.name}</h1>
    <ul>
      {course.parts.map(part =>
        <li key={part.id}>
          {part.name} {part.exercises}
        </li>
    )}
    </ul>
    <div>Total courses {count}</div>
  </div>
)

}
const App = () => {
  const course =
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }



  return <Course course={course} />
}

export default App;
