import { useEffect, useState } from "react";

export function useJokeById() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomjokes/102", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch Joke by ID");
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setJoke(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  return { joke, loading, error };
}
