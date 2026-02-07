import express from "express";
import { getRecipes, createRecipes, getRecipebyID, getRecipebyTitle, modifyRecipe, deleteRecipe, getRecipebyIngredients, getRecipebyCategory } from "../controllers/recipesController.js";


const recipesRouter = express.Router()

recipesRouter.post("/recipes", createRecipes);

recipesRouter.get("/recipes", getRecipes);
recipesRouter.get("/recipes/title/:title", getRecipebyTitle);
recipesRouter.get("/recipes/ingredients/:ingredients", getRecipebyIngredients);
recipesRouter.get("/recipes/category/:category", getRecipebyCategory);


recipesRouter.get("/recipes/id/:id", getRecipebyID);

recipesRouter.patch("/recipes/modify/:id", modifyRecipe);

recipesRouter.delete("/recipes/delete/:id", deleteRecipe);

export default recipesRouter;