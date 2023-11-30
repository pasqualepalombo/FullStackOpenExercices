import { useState } from 'react'

// Exercise 2.2 information step 7

const Total = ({parts}) => {
  let total = 0
  for (let i=0;i<parts.length;i++){
    total += parts[i].exercises
  }
  return (
    <p>Total of {total} exercises</p>
  )
}

const Part = ({part}) => {
  return (
    <li>{part.name}</li>
  )
}

const Course = ({course}) => {
  var parts = course.parts
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </ul>
      <Total parts={parts} />
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