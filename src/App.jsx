import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import User from "./user";
import Friends from "./friends";

function App() {
  function handleClick() {
    alert("buttton click");
  }
  const handleClick2 = () => {
    alert("button click 2");
  };
  const addFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h2> React Core concept</h2>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click to</button>
      {/* bejaila */}
      <button onClick={() => addFive(3)}>Four</button>
    </>
  );
}

export default App;
