const Content = ({parts}) => {
    return (
        <>
            {parts.map(p =>
                <p>{p.part}: {p.exercices}</p>
            )}
        </>
    )
}

export default Content