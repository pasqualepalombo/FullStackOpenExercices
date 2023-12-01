import { useState } from 'react'
import Course from './components/Course'

// Exercise 2.5 information step 10

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