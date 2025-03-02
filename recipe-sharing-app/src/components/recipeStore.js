import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((st) => id !== st.id),
    })),

  updateRecipe: (recipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === recipe.id ? { ...r, ...recipe } : r
      ),
    })),
}));
