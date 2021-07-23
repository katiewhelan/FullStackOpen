import React from 'react'
const Course = (props) => {
  const {course} = props

  const count = course.parts.reduce((sum,part) => sum + part.exercises,0)

  return (
  <div>
    <h2>{course.name}</h2>
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
export default Course
