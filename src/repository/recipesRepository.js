import { Recipe } from "../models/recipes.js";

export async function getRecipesRequest() {
    return await Recipe.find();
}

export async function getRecipebyIDRequest(id){
    return await Recipe.find({_id : id});
}

export async function getRecipebyTitleRequest(title){

    return await Recipe.find({"title" : {$regex : title, $options: "i" }});
}

export async function getRecipebyIngredientsRequest(ingredients){

    return await Recipe.find({"ingredients" : {$regex : ingredients, $options: "i" }});
}

export async function getRecipebyCategoryRequest(category){

    return await Recipe.find({"category" : category});
}

export async function createRecipesRequest(title, ingredients, instructions, prepTime, cookTime, difficulty, category) {
    const recipe = new Recipe({ title, ingredients, instructions, prepTime, cookTime, difficulty, category });
    return await recipe.save();
}

export async function modifyRecipeRequest(id, objet){
    return await Recipe.updateOne({_id : id}, objet);
}

export async function deleteRecipeRequest(id){
    return await Recipe.deleteOne({_id : id});
}