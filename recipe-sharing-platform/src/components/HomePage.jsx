import React, { useEffect, useState } from "react";
import data from "../data.json";

export default function HomePage() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    setRecipe(data);
  }, []);
  return (
    <div>
      <h1 className="text-red-300 rounded-lg shadow-lg hover:text-blue-500">
        Home Page
      </h1>
      <ul className="grid grid-cols-1 grid-cols-2 grid-cols-3 sm md">
        {recipe.map((r) => (
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
}
