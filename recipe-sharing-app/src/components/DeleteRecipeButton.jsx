import React from "react";
import { useRecipeStore } from "./recipeStore";

function DeleteRecipeButton({ recipeId }) {
  const { deleteRecipe } = useRecipeStore();

  return <button onClick={deleteRecipe(recipeId)}>Delete</button>;
}

export default DeleteRecipeButton;
