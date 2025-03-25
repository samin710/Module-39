import { useState } from "react";

export default function Batsman() {
  const buttonStyle = {
    margin: "10px",
  };
  const [runs, setRuns] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count6, setCount6] = useState(0);
  const handleSingle = () => {
    setRuns(runs + 1);
  };
  const handleFour = () => {
    setRuns(runs + 4);
    setCount4(count4 + 1);
  };
  const handleSix = () => {
    setRuns(runs + 6);
    setCount6(count6 + 1);
  };
  return (
    <div>
      <h2>Player: Bangladsh Batsman</h2>
      <h1>Score: {runs}</h1>
      <p>
        Four: {count4} Six: {count6}
      </p>
      <button style={buttonStyle} onClick={handleSingle}>
        Single
      </button>
      <button style={buttonStyle} onClick={handleFour}>
        Four
      </button>
      <button style={buttonStyle} onClick={handleSix}>
        Six
      </button>
    </div>
  );
}
