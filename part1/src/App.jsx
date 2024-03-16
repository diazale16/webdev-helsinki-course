import { useState } from "react"

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ text, handlerClick}) => <button onClick={handlerClick}>{text}</button>

const StatisticsLine = ({ text, value }) => {
  return ( 
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr> 
  )
}

const Statistics = ({ data, handlers }) => {
  if (data.allOpinions === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  const averageScore = (data.good - data.bad)/(data.good + data.neutral + data.bad)
  const positivePercent = (data.good / data.allOpinions * 100)

  return (
    <table>
      <StatisticsLine text="good" value={data.good} ></StatisticsLine>
      <StatisticsLine text="neutral" value={data.neutral} ></StatisticsLine>
      <StatisticsLine text="bad" value={data.bad} ></StatisticsLine>
      <StatisticsLine text="all" value={data.allOpinions} ></StatisticsLine>
      <StatisticsLine text="average" value={averageScore} ></StatisticsLine>
      <StatisticsLine text="positive" value={positivePercent} ></StatisticsLine>
      <Button text={"reset"} handlerClick={handlers.handlerReset} ></Button>
    </table>
  )
}

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
  const [ allOpinions, setAll] = useState(0)

  const handlerGoodFeedback = () => {
    const newGood = good + 1
    setGood(newGood)
    setAll(newGood + neutral + bad)
  }

  const handlerNeutralFeedback = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setAll(good + newNeutral + bad)
  }

  const handlerBadFeedback = () => {
    const newBad = bad + 1
    setBad(newBad)
    setAll(good + neutral + newBad)
  }

  const handlerReset = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
    setAll(0)
  }

  const dataCompiled = {
    allOpinions: allOpinions,
    good: good,
    neutral: neutral,
    bad: bad
  }

  const handlersCompiled = {
    handlerReset: handlerReset
  }

  return (
    <body>
      <Header title={"give feedback!"} ></Header>
      <Button text={"good"} handlerClick={handlerGoodFeedback} ></Button>
      <Button text={"neutral"} handlerClick={handlerNeutralFeedback} ></Button>
      <Button text={"bad"} handlerClick={handlerBadFeedback} ></Button>
      <Header title={"statistics"} ></Header>
      <Statistics data={dataCompiled} handlers={handlersCompiled}></Statistics>
    </body>
  )
}

export default App