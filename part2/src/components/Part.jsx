const Part = (props) => {
    const { part } = props

    return (
        <li>{part.name} {part.exercises}</li>
    )
}
export default Part