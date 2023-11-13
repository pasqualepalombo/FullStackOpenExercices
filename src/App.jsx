import { useState } from 'react'


const Header = (props) => {
  return (
    <div>
      <h1>{props.props}</h1>
    </div>
  )
}

const Part = (contenuto) => {
  return (
    <div>
      <p>
        {contenuto.contenuto.name} {contenuto.contenuto.exercises}
      </p>
    </div>
  )
}

const Content = (contenuto) => {
  return (
   <>
   <Part contenuto={contenuto.props[0]} />
   <Part contenuto={contenuto.props[1]} />
   <Part contenuto={contenuto.props[2]} />
   </>

  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Total Exercises: {props.props[0]+props.props[1]+props.props[2]}
      </p>
    </div>
  )
}

function App() {
  const course = 'Half Stack Application Development'
  const part1 = {
    name:'Fundamentals of React',
    exercises:10,
  }
  const part2 = {
    name:'Using props to pass data',
    exercises:7,
  }
  const part3 = {
    name:'State of a component',
    exercises:14,
  }

  return (
    <div>
      <Header props={course} />
      <Content props={[part1,part2,part3]} />
      <Total props={[part1.exercises,part2.exercises,part3.exercises]} />
    </div>
  )
}

export default App
