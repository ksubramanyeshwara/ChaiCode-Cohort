import { useEffect, useState } from "react";

export function AllTea() {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1"
    )
      .then((res) => res.json())
      .then((apires) => setMenu(apires.data.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <h2>Available Tea</h2>
      <ul>
        {menu.map((tea) => (
          <li key={tea.id}>{tea.name}</li>
        ))}
      </ul>
    </>
  );
}
