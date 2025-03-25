import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Conter";

function App() {
  // function handleClicked() {
  //   alert("Click 1");
  // }
  // const handleClicked3 = () => {
  //   alert("Click 3");
  // };
  // const handleAdd5 = (num) => {
  //   alert(num + 5);
  // };

  return (
    <>
      <h3>Vite + React</h3>

      <Batsman></Batsman>

      {/* <Counter></Counter> */}

      {/* <button onClick={handleClicked}>Click Me 1</button>
      <button
        onClick={function () {
          alert("Click 2");
        }}
      >
        Click Me 2
      </button>
      <button onClick={handleClicked3}>Click Me 3</button>
      <button
        onClick={() => {
          alert("Click 4");
        }}
      >
        Click Me 4
      </button>
      <button onClick={() => handleAdd5(12)}>Click Me 5</button> */}
    </>
  );
}

export default App;
