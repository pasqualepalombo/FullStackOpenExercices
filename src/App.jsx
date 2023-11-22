import { useState } from 'react'
// exercise 1.10 unicafe step5

const StatisticLine = ({text, value}) =>{
  return(
    <p>{text}:{value}</p>
  )
}

const Statistics = (props) => {
  const good = props.props[0]
  const neutral = props.props[1]
  const bad = props.props[2]
  const allFeedbacks = good+neutral+bad
  let average = 0
  let positive = 0
  if (allFeedbacks>0) {
    average = (good-bad)/allFeedbacks
    positive = good / allFeedbacks
    return(
      <div>
        <h2>Statistics</h2>
        <StatisticLine text = "Good" value={good}/>
        <StatisticLine text = "Neutral" value={neutral}/>
        <StatisticLine text = "Bad" value={bad}/>
        <p>Total of feedbacks: {allFeedbacks}</p>
        <p>Average: {average}%</p>
        <p>Positive: {positive}%</p>
      </div>
    )
  }
  return(
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total of feedbacks: {allFeedbacks}</p>
      <p>No feedback given</p>
    </div>
  )
}

const Button = ({text, handleFunction}) => {
  return (
      <button onClick={handleFunction}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  } 

const handleNeutral = () => {
  const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
}

const handleBad = () => {
  const updatedBad = bad + 1
    setBad(updatedBad)
}

  return (
    <div>
      <h1>give feedback</h1>
      <Button text ='Good' handleFunction={handleGood}/>
      <Button text ='Neutral' handleFunction={handleNeutral}/>
      <Button text ='Bad' handleFunction={handleBad}/>
      <Statistics props={[good, neutral, bad]} />
    </div>
  )
}

export default App
