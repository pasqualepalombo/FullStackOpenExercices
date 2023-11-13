import { useState } from 'react'


const Header = (variabile) => {
  return (
    <div>
      <h1>{variabile.course}</h1>
    </div>
  )
}

const Part = (contenuto) => {
  return (
    <div>
      <p>
        {contenuto.contenuto[0]} {contenuto.contenuto[1]}
      </p>
    </div>
  )
}

const Content = (contenuto) => {
  return (
   <>
   <Part contenuto={[contenuto.array[0],contenuto.array[1]]} />
   <Part contenuto={[contenuto.array[2],contenuto.array[3]]} />
   <Part contenuto={[contenuto.array[4],contenuto.array[5]]} />
   </>

  )
}

const Total = (totale) => {
  return (
    <div>
      <p>
        Total Exercises: {totale.array[0]+totale.array[1]+totale.array[2]}
      </p>
    </div>
  )
}

function App() {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content array={[part1,exercises1,part2,exercises2,part3,exercises3]} />
      <Total array={[exercises1,exercises2,exercises3]} />
    </div>
  )
}

export default App
