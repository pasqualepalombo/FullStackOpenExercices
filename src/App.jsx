import { useState } from 'react'
// exercise 1.6

const Button = ({handleClick, text}) => {
  <button onClick={console.log("click")}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=> {
        const updatedGood = good + 1
        setGood(updatedGood)
      }}>Good</button>
      <button onClick={()=> {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
      }}>Neutral</button>
      <button onClick={()=> {
        const updatedBad = bad + 1
        setBad(updatedBad)
      }}>Bad</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

export default App
