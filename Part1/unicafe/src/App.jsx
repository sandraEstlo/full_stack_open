import Content from "./Content";
import Header from "./Header"

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    { part: 'Fundamentals of React', exercices: 10 },
    { part: 'Using props to pass data', exercices: 7 },
    { part: 'State of a component', exercices: 14 }
  ];

  return (
    <div>
      <Header course= {course} />
      <Content parts={parts} />
    </div>
  )
}

export default App
