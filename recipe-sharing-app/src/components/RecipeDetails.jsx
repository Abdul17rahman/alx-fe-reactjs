// RecipeDetails component
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  const { deleteRecipe, updateRecipe } = useRecipeStore();

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button onClick={deleteRecipe(recipeId)}>Delete</button>
    </div>
  );
};

export default RecipeDetails;
