import { useState } from "react"

const Header = ({ title }) => <h1>{title}</h1>

const Display = ({ text, counter }) => <p>{text}: {counter}</p>

const Button = ({ text, handlerClick}) => <button onClick={handlerClick}>{text}</button>

// const History = ({ allClicks }) => {
//   if (allClicks.length === 0) {
//     return (
//       <div>there is not pressed buttons</div>
//     )
//   }
//   return (
//     <div>pressed buttons: {allClicks.join(' ')}</div>
//   )
// }

const App = () => {
  const [ good, setGood] = useState(0)
  const [ neutral, setNeutral] = useState(0)
  const [ bad, setBad] = useState(0)

  // console.log(`rendering with counter value equals ${counter}`)

  // Increase the counter for every click
  const handlerGoodFeedback = () => {
    // console.log(`increasing value from the original ${counter}`)
    const newGood = good + 1
    setGood(newGood)
  }

  const handlerNeutralFeedback = () => {
    // console.log(`decreasing value from the original ${counter}`)
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handlerBadFeedback = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  const handlerReset = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }

  return (
    <div>
      <Header title={"give feedback"}></Header>
      <Button text={"good"} handlerClick={handlerGoodFeedback}></Button>
      <Button text={"neutral"} handlerClick={handlerNeutralFeedback}></Button>
      <Button text={"bad"} handlerClick={handlerBadFeedback}></Button>
      <Header title={"statistics"}></Header>
      <Display text={"good"} counter={good}></Display>
      <Display text={"neutral"} counter={neutral}></Display>
      <Display text={"bad"} counter={bad}></Display>
      <Button text={"reset"} handlerClick={handlerReset}></Button>
    </div>
  )
}

export default App