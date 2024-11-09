import React from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const course = 'Half Stack application development'

  const parts = [
    { name: 'Fundamentals of React', exercices: 10 },
    { name: 'Using props to pass data', exercices: 7 },
    { name: 'State of a component', exercices: 14 }
  ];

  const total = parts.reduce((sum, part) => sum + part.exercices, 0);

  return (
    <div>
      <Header course= {course} />
      <Content parts={parts} />
      <p>Total: {total}</p>
    </div>
  )
}

export default App
