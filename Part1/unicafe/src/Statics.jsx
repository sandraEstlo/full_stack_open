import React from "react";

const Statics = ({props}) => {
    const total = props.filter(p => p.type === "Total")[0]?.result || 0;

    let content = (total === 0) ? (
        <p>No feedback given</p>
    ) : (
        <table border={0}>
            <tbody>
                {props.map(p => {
                    return (
                        <tr key={p.type}>
                            <td>{p.type}</td>
                            <td>
                                {p.type != "Positive" ? p.result: (p.result).toFixed(2) + " %"}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
    
    return (
        <>  
            {content}
        </>
    )
}
export default Statics