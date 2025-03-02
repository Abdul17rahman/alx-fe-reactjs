import React from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

function DeleteRecipeButton({ recipeId }) {
  const { deleteRecipe } = useRecipeStore();

  const navigate = useNavigate();

  function handleDel() {
    deleteRecipe(recipeId);
    navigate("/");
  }

  return <button onClick={handleDel}>Delete</button>;
}

export default DeleteRecipeButton;
