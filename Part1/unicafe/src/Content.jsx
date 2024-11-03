const Content = ({parts}) => {
    return (
        <ul>
            {parts.map(p =>
                <li> {p.part} {p.exercices} </li>
            )}
        </ul>
    )
}

export default Content