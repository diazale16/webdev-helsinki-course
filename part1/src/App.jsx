import { useState } from "react"

const Display = ({ counter }) => <div>Counter: {counter}</div>

const Button = ({ text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [ counter, setCounter] = useState(0)
  // console.log(`rendering with counter value equals ${counter}`)

  // Increase the counter for every click
  const increaseCounter = () => {
    // console.log(`increasing value from the original ${counter}`)
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    // console.log(`decreasing value from the original ${counter}`)
    setCounter(counter - 1)
  }

  const restartCounter = () => {
    // console.log(`resetting to zero from the original ${counter}`)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}></Display>
      <Button text={"plus"} onClick={increaseCounter}></Button>
      <Button onClick={decreaseCounter} text={"minus"}></Button>
      <Button text={"restart"} onClick={restartCounter}></Button>
    </div>
  )
}

export default App