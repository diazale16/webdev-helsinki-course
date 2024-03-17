import Header from "./Header"
import Content from "./Content"

const Course = (props) => {
    const { course } = props

    return (
        <>
            <Header course={course} ></Header>
            <Content course={course} ></Content>
        </>
    )
}
export default Course