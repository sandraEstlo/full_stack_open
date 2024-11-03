const Content = ({parts}) => {
    return (
        <>
            {parts.map(part =>
                <p>{part.name}: {part.exercices}</p>
            )}
        </>
    )
}

export default Content