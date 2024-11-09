import React, {useState} from "react";
import Statics from "./Statics";

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const total = good + neutral + bad;
  const average = (good - bad) /total;
  const positive = (good / total) *100;

  const props = [
    {type:"Good", result: good},
    {type:"Neutral", result: neutral},
    {type:"Bad", result: bad},
    {type:"Total", result: total},
    {type:"Average", result: average},
    {type:"Positive", result: positive}
  ]

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Statics props = {props}></Statics>
    </div>
  )
}

export default App
