import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = () => {
  const { recipe, updateRecipe } = useRecipeStore();
  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
