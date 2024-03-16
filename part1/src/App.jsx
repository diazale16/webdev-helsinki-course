import { useEffect, useState } from "react";

const Button = ({ text, handlerClick}) => <button onClick={handlerClick}> {text} </button>

const Display = ({ text, value }) => <p>{text} {value}</p>

const App = () => {
  const [ selected, setSelected ] = useState(0)
  const [ votes, setVote ] = useState({})
  
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
      setVote(initialVotes)
    }, []);
  
  const getRandomInt = (max) => {
    const randomNumber = Math.floor(Math.random() * max)
    return randomNumber
  }

  const handlerVoteAnecdote = () => {
    const newVotes =  { ...votes }
    newVotes[selected] = (votes[selected] || 0) + 1
    setVote(newVotes)
    // console.log("old votes:")
    // console.log(votes)
    console.log("new votes:")
    console.log(newVotes)
  }

  const handlerResetVotes = () => {
    setVote(initializeVotes(anecdotes))
    console.log(votes);
  }

  const handlerNextAnecdote = () => {
    let newSelected = getRandomInt(anecdotes.length)
    while (selected === newSelected) {
      newSelected = getRandomInt(anecdotes.length)
    }
    console.log(`new selected ${newSelected}`)
    setSelected(newSelected)
  } 
  
  return (
    <div>
      <Display text="" value={anecdotes[selected]}></Display>
      <Display text="Votes for anecdote: " value={votes[selected]}></Display>
      <Button text={"vote"} handlerClick={handlerVoteAnecdote}></Button>
      <Button text={"next anecdote"} handlerClick={handlerNextAnecdote}></Button>
      <br />
      <Button text={"reset votes"} handlerClick={handlerResetVotes}></Button>
    </div>
  )
}

export default App