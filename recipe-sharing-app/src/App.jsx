import "./App.css";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />
          <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
