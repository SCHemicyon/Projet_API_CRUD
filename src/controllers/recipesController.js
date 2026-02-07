import { createRecipesRequest, getRecipesRequest, getRecipebyIDRequest, getRecipebyTitleRequest, modifyRecipeRequest, deleteRecipeRequest, getRecipebyIngredientsRequest, getRecipebyCategoryRequest } from "../repository/recipesRepository.js";


export async function getRecipes(req, res) {
    const recipes = await getRecipesRequest();
    res.json(recipes);
}

export async function getRecipebyID(req, res) {
    const {id} = req.params;
    const recipes = await getRecipebyIDRequest(id);
    res.json(recipes);
}

export async function getRecipebyTitle(req, res) {
    const {title} = req.params;
    const recipes = await getRecipebyTitleRequest(title);
    res.json(recipes);
}

export async function getRecipebyIngredients(req, res) {
    const {ingredients} = req.params;
    const recipes = await getRecipebyIngredientsRequest(ingredients);
    res.json(recipes);
}

export async function getRecipebyCategory(req, res) {
    const {category} = req.params;
    const recipes = await getRecipebyCategoryRequest(category);
    res.json(recipes);
}

export async function createRecipes(req, res)  {
    const {title, ingredients, instructions, prepTime, cookTime, difficulty, category} = req.body;

    try {
        await createRecipesRequest(title, ingredients, instructions, prepTime, cookTime, difficulty, category);
        res.json({ ok: true })
    } catch (err) {
        console.error(err);
        res.json({ ok: false })
    }
}

export async function modifyRecipe(req, res)  {
    const id = req.params.id
    // const {id} = req.params
    const objet = req.body;

    try {
        await modifyRecipeRequest(id,objet);
        res.json({ ok: true })
    } catch (err) {
        console.error(err);
        res.json({ ok: false })
    }
}

export async function deleteRecipe(req, res)  {
    const id = req.params.id

    try {
        await deleteRecipeRequest(id);
        res.json({ ok: true })
    } catch (err) {
        console.error(err);
        res.json({ ok: false })
    }
}