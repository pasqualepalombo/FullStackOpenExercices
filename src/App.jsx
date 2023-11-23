import { useState } from 'react'
// exercise 1.14 anecdotes step3

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0))

  const randomNumber = () => {
    let random = Math.floor(Math.random()*anecdotes.length)
    setSelected(random)
  }

  const voteMe = () => {
    const newVotes = [...voted]
    newVotes[selected] += 1
    setVoted(newVotes)
  }

  const ReturnMaxValue = () => {
    const maxValue = Math.max(...voted)
    let value = 0
    while (voted.length) {
      if (voted[value]==maxValue) break
      value += 1
    }
    return (
      <p>{anecdotes[value]}</p>
    )

  }

  return (
    <div>
      <h1>Anecdote of the day:</h1>
      <p>{anecdotes[selected]}</p>
      <p>This Anecdotes has: {voted[selected]}votes!</p>
      <button onClick={voteMe}>Vote me!</button>
      <button onClick={randomNumber}>Next Anecdote</button>
      <h2>Most voted Anecdote:</h2>
      <ReturnMaxValue />
    </div>
  )
}


export default App
