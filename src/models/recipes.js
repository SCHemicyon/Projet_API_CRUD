import mongoose from "mongoose";

const recipesSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Le titre est obligatoire"]
    },
    ingredients: {
        type: Array,
        required: [true, "Les ingrédients sont obligatoires"]
    },
    instructions: {
        type: Array,
        required: [true, "Les instructions sont obligatoires"]
    },
    prepTime: {
        type: Number,
        required: [true, "Le temps de préparation est obligatoire"]
    },
    cookTime: {
        type: Number,
        required: [true, "Le temps de cuisson est obligatoire"]
    },
    difficulty: {
        type: String,
        enum : ["facile", "moyen", "difficile"],
        default : "facile"
    },
    category: {
        type: String,
        enum : ["entree", "plat", "dessert"],
        default : "plat"
    }
})

export const Recipe = mongoose.model("recipes", recipesSchema)