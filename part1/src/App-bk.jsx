const Header = ({ course }) => {
    return (
      <h1>
        {course.name}
      </h1>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercise}
      </p>
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((element, index) => 
          <Part key={index} name={element.name} exercise={element.exercises}></Part>)}
      </div>
    )
  }
  
  const Total = ({ course }) => {
    const totalExercises = course.parts.reduce(
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