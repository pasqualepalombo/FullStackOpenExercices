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

export default Course