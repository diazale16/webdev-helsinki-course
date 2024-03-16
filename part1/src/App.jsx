import { useEffect, useState } from "react";

const Button = ({ text, handlerClick}) => <button onClick={handlerClick}> {text} </button>

const DisplayAnecdote = ({ text, counter }) => {
  return (
    <div>
      <p>{text}</p>
      <p>Number of votes: {counter}</p>  
    </div>
  )
}

const DisplayRatedAnecdote = ({ text, counter }) => {
  if (counter > 0) {
    return (
      <div>
        <p>{text}</p>
        <p>Number of votes: {counter}</p>  
      </div>
    )
  }
  return (
    <p>Not rated anecdotes yet...</p>
  )
}

const App = () => {
  const [ selected, setSelected ] = useState(0)
  const [ votes, setVotes ] = useState({})
  
  const initializeVotes = (list) => {
    const initialVotes = {}
    list.forEach((_, index) => {
      initialVotes[index] = 0
    })
    return initialVotes
  }
  
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
  
  useEffect(() => {
      const initialVotes = initializeVotes(anecdotes)
      setVotes(initialVotes)
  }, []);
  
  const getRandomInt = (max) => {
    const randomNumber = Math.floor(Math.random() * max)
    return randomNumber
  }

  const handlerVoteAnecdote = () => {
    const newVotes =  { ...votes }
    newVotes[selected] = (votes[selected] || 0) + 1
    setVotes(newVotes)

  }

  const handlerResetVotes = () => {
    setVotes(initializeVotes(anecdotes))
  }

  const handlerNextAnecdote = () => {
    let newSelected = getRandomInt(anecdotes.length)
    while (selected === newSelected) {
      newSelected = getRandomInt(anecdotes.length)
    }
    setSelected(newSelected)
  }

  const mostRatedAnecdote = () => {
    let maxIndex = -1 
    let maxValue = -Infinity
    for (const index in votes) {
      const currentIndex = parseInt(index)
      if (votes[index] > maxValue) {
        maxIndex = currentIndex
        maxValue = votes[index]
      }
    }
    return maxIndex
  }
  
  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <DisplayAnecdote text={anecdotes[selected]} counter={votes[selected]}></DisplayAnecdote>
        <Button text={"vote"} handlerClick={handlerVoteAnecdote}></Button>
        <Button text={"next anecdote"} handlerClick={handlerNextAnecdote}></Button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <DisplayRatedAnecdote text={anecdotes[mostRatedAnecdote()]} counter={votes[mostRatedAnecdote()]}></DisplayRatedAnecdote>
      </div>
      <Button text={"reset votes"} handlerClick={handlerResetVotes}></Button>
    </div>
  )
}

export default App