// import Counter from "./components/Counter.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  //to create state (variables) in react:
  const [cities, setCities] = useState([
    { name: "Barcelona", visited: true },
    { name: "London", visited: false },
    { name: "Madrid", visited: false },
    { name: "Rome", visited: false },
  ]);
  const [newCity, setNewCities] = useState("");

  function handleInputChange(event) {
    setNewCities(event.target.value);
  }

  function submitNewCity() {
    setCities((state) => [...state, { name: newCity, visited: false }]);
    setNewCities("");
  }

  function markAsVisited(city) {
    setCities((state) =>
      state.map((e) => {
        if (e === city) {
          return { ...e, visited: true };
        } else return e;
      })
    );
  }

  return (
    <>
      <input type="text" value={newCity} onChange={handleInputChange} />

      <button onClick={() => submitNewCity()}>Add City</button>
      {cities.map((city) => (
        <li
          onClick={() => markAsVisited(city)}
          className={city.visited ? "visited" : null}
        >
          {city.name}
        </li>
      ))}
    </>
  );
}

export default App;

{
  /* <Counter /> */
}
