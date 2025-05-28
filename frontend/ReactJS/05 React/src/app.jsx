import { useState, useEffect } from "react";
import { AllTea } from "./AllTea";
import { useJokeById } from "./hooks/useJokeById";

export function App() {
  const [message, setMessage] = useState("");
  const { joke, loading, error } = useJokeById();

  useEffect(() => {
    fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((apires) => setMessage(apires.data.data[0].content))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>App</h1>
      <h2>{message}</h2>
      <AllTea />
      <h3>{joke.data.content}</h3>
    </div>
  );
}
