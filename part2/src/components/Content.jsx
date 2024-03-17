import Part from "./Part"

const Content = (props) => {
    const { course } = props
    
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
            {course.parts.map((part) => 
                <Part key={part.id} part={part} ></Part>
            )}
            <p>total of {totalExercises} exercises</p>
        </div>
    )
}
export default Content