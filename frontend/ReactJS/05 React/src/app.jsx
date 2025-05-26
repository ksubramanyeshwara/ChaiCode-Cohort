import { useState } from "react";

export function App() {
  const [message, setMessage] = useState("Loading...");
  return (
    <div>
      <h1>App</h1>
      <h2>{message}</h2>
    </div>
  );
}
