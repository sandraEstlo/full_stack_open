import React from "react";

const Results = ({good, neutral, bad}) => {
    return (
        <>
            <h3>Results:</h3>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </>
    )
};

export default Results;