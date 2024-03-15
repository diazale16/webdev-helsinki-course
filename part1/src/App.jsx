import { useState } from "react"

const Display = ({ data, counter }) => <div>{data}: {counter}</div>

const Button = ({ text, handlerClick}) => <button onClick={handlerClick}>{text}</button>

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>there is not pressed buttons</div>
    )
  }
  return (
    <div>pressed buttons: {allClicks.join(' ')}</div>
  )
}

const App = () => {
  const [ left, setLeft] = useState(0)
  const [ right, setRight] = useState(0)
  const [ allClick, setAll] = useState([])
  const [ total, setTotal] = useState(0)

  // console.log(`rendering with counter value equals ${counter}`)

  // Increase the counter for every click
  const handlerLeftClicks = () => {
    // console.log(`increasing value from the original ${counter}`)
    setAll(allClick.concat('L'))
    const newLeft = left + 1
    setLeft(newLeft)
    setTotal(newLeft + right)
  }

  const handlerRightClicks = () => {
    // console.log(`decreasing value from the original ${counter}`)
    setAll(allClick.concat('R'))
    const newRight = right + 1
    setRight(newRight)
    setTotal(left + newRight)
  }

  const handlerResetAllClicks = () => {
    setLeft(0)
    setRight(0)
    setAll([])
    setTotal(0)
  }

  return (
    <div>
      <Display data={"left"} counter={left}></Display>
      <Button text={"left"} handlerClick={handlerLeftClicks}></Button>
      <Display data={"right"} counter={right}></Display>
      <Button text={"right"} handlerClick={handlerRightClicks}></Button>
      <Display data={"total"} counter={total} ></Display>
      <History allClicks={allClick}></History>
      <Button text={"reset"} handlerClick={handlerResetAllClicks}></Button>
    </div>
  )
}

export default App