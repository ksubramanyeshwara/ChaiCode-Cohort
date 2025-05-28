import { useState } from "react";

export function TeaCounter() {
  const [count, setCount] = useState(0);

  const serveTea = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Tea Couter</h1>
      <p>You have server {count} cups of Tea</p>
      {/* Below code is written to pass parameter to setCount*/}
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Serve Tea</button> */}
      <button onClick={serveTea}>Serve Tea</button>
    </div>
  );
}
