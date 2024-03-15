const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map((element, index) => 
        <Part key={index} name={element.name} exercise={element.exercises}></Part>)}
    </div>
  )
}

const Total = (props) => {
  const totalExercises = props.course.parts.reduce(
    (accumulator, parte) => accumulator + parte.exercises, 0);
  
  return (
    <p>
      Number of exercises {totalExercises}
    </p>
  )
}


const App = () => {
  const course = {
    name: "Half Stack application course",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} ></Header>
      <Content course={course} ></Content>
      <Total course={course} ></Total>
    </div>
  )
}

export default App