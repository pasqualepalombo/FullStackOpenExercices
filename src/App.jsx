import { useState } from 'react'

// Exercise 2.3 information step 8

const Total = ({parts}) => {
  let total = parts.reduce(function(sum, part){
    return sum + part.exercises
  },0)

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