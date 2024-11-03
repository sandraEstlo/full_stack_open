const Content = ({parts}) => {
    console.log(parts.exercices)
    return(
        <>
            <p>
                Total: { parts.map(part => part.exercices)
                              .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                }
            </p>
        </>
    );
}

export default Content