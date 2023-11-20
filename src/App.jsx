import { useState } from 'react'
// exercise 1.7 unicafe step2

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedbacks, setAllFeedbacks] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const Positive = (props) => {
    const good = props.props[0]
    const allFeedbacks = props.props[1]
    if (allFeedbacks>0) {
      const updatedPositive = (good/allFeedbacks)
      setPositive(updatedPositive)
      return(
        <p>Average: {positive*100}%</p>
      )
    }
    else {
      return(
        <p>Positive : 0</p>
      )
    }
  }

  const Average = (props) => {
    const good = props.props[0]
    const bad = props.props[1]
    const allFeedbacks = props.props[2]
    if (allFeedbacks>0) {
      const updatedAverage = ((good-bad)/allFeedbacks)
      setAverage(updatedAverage)
      return(
        <p>Average: {average}</p>
      )
    }
    else {
      return(
        <p>Average: 0</p>
      )
    }
  }

  const handleGood = () => {
    const updatedGood = good + 1
        setGood(updatedGood)
        const updatedAllFeedbacks = allFeedbacks + 1
        setAllFeedbacks(updatedAllFeedbacks)
  }

const handleNeutral = () => {
  const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        const updatedAllFeedbacks = allFeedbacks + 1
        setAllFeedbacks(updatedAllFeedbacks)
}

const handleBad = () => {
  const updatedBad = bad + 1
        setBad(updatedBad)
        const updatedAllFeedbacks = allFeedbacks + 1
        setAllFeedbacks(updatedAllFeedbacks)
}

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total of feedbacks: {allFeedbacks}</p>
      <Average props={[good, bad, allFeedbacks]} />
      <Positive props={[good, allFeedbacks]} />
    </div>
  )
}

export default App
