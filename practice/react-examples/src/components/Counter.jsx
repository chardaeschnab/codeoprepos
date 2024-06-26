import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [threshold, setThreshold] = useState(10);

  function increase() {
    setCount(count + 1);
  }

  function handleInputChange(event) {
    console.log(event);
    setThreshold(event.target.value);
  }

  return (
    <div>
      <div>
        Threshold: <input value={threshold} onChange={handleInputChange} />
      </div>
      The count is:
      <span className={count > threshold ? "active" : null}>{count}</span>
      <button onClick={increase}>+1</button>{" "}
      {count > threshold ? <div>The count is above {threshold} </div> : null}
    </div>
  );
}
