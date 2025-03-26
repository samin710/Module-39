import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Conter";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPosts = fetch("http://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

function App() {
  // const friendsPromise = fetchFriends();
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

      <Suspense fallback={<p>Please wait!!!!</p>}>
        <Posts fetchPosts={fetchPosts}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Batsman></Batsman> */}

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
