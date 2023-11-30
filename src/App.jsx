import { useState } from 'react'

// Exercise 2.1 information step 6

const Part = ({part}) => {
  return (
    <li>{part.name}</li>
  )
}

const Course = ({course}) => {
  console.log(course.parts)
  var parts = course.parts
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </ul>
    </div>
  )
}

function App() {
  const course = {
    id: 1,
    name:'Half Stack Application Development',
    parts: [
    {
    id:1,
    name:'Fundamentals of React',
    exercises:10,
    },
    {
    id:2,
    name:'Using props to pass data',
    exercises:7,
    },
    {
    id:3,
    name:'State of a component',
    exercises:14,
    },
    ]
  }
  return <Course course={course}/>
}

export default App