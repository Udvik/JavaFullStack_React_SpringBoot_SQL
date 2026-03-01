import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Counter App</h2>
      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{count}</div>
      <button onClick={increment} style={{ marginRight: "0.5rem" }}>Increment</button>
      <button onClick={decrement} style={{ marginRight: "0.5rem" }}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;
