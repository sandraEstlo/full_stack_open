const Content = ({parts}) => {
    return (
        <>
            {parts.map(part =>
                <p key={part.name}>{part.name}: {part.exercices}</p>
            )}
        </>
    )
}

export default Content