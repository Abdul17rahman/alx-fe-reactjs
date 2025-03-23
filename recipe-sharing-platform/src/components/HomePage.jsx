import React, { useEffect, useState } from "react";
import data from "../data.json";

export default function HomePage() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    setRecipe(data);
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {recipe.map((r) => (
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
}
