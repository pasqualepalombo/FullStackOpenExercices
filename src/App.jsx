import { useState } from 'react'

// Exercise 2.4 information step 9

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
      <h2>{course.name}</h2>
      <ul>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </ul>
      <Total parts={parts} />
    </div>
  )
}

const Courses = ({courses}) => {
  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course}/>)}
    </div>
  )
}
function App() {
  const courses = [{
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
    },
    {
      id: 2,
      name:'NodeJS',
      parts: [
      {
      id:1,
      name:'Fundamentals of NodeJS',
      exercises:10,
      },
      {
      id:2,
      name:'Node is better than you',
      exercises:7,
      },
      ]
    }]
  return <Courses courses={courses}/>
}

export default App