// Prerequisites:
// - functions, objects, conditionals
// - arrow functions
// - array functions map, filter, find..

function getRecipes() {
    return [{
        name: "salmon soup",
        vegan: false,
        ingredients: [{
            name: "salmon",
            quantity: 1,
        }, {
            name: "cream",
            quantity: 2,
        }, {
            name: "milk",
            quantity: 1,
        }]
    }, {
        name: "carbonara",
        vegan: false,
        ingredients: [{
            name: "pasta",
            quantity: 1,
        }, {
            name: "cheese",
            quantity: 5,
        }, {
            name: "milk",
            quantity: 1,
        }]
    }, {
        name: "rice bowl",
        vegan: false,
        ingredients: [{
            name: "rice",
            quantity: 2,
        }, {
            name: "water",
            quantity: 1,
        }]
    }];
}

// Implement functions that perform the following tasks

// Task: 1. Add a new recipe
const addRecipe = (recipes, recipe) => {
    if (recipe.name && recipe.vegan !== null) {
        recipes.push(recipe);
    }
    return recipes;
}

// Task: 2. delete a recipe that matches a given name
const deleteRecipe = (recipes, recipeName) => {
    const updatedList = recipes.filter((recipe) => {
        if (recipe.name === recipeName) {
            return false
        }
        return true;
    })
    return updatedList;
}

// Task: 3. get only vegan recipes
const getVeganRecipes = (recipes) => {
        const veganRecipies = recipes.filter((recipe) => {
            if (recipe.vegan === true) {
                return true;
            }
            return recipe;
        })
        return veganRecipies;
    }
    // Task: 4. get the names of the ingredients of a recipe
const getIngredientNames = (recipes, recipeName) => {

    const specificRecepi = recipes.find((recipe) => {
        if (recipe.name === recipeName) {
            return recipe;

        }

    });

    const ingredientNames = specificRecepi.ingredients.map((ingredient) => {
        return ingredient.name;
    })
    return ingredientNames
}

// Task: 5. add a recipe to favorites
const addToFavorites = (favorites, recipe) => {

    favorites.push(recipe);
    return favorites;
}

// Task: 6. remove a recipe from favorites
const removeFavorite = (favorites, recipeName) => {
    const updatedFavorites = favorites.filter((recipe) => {
        if (recipe.name === recipeName) {
            return false;
        }
        return true;
    })

    return updatedFavorites;
}

// Task: 7. get the list of names of the recipes in favorites
const getListOfNames = (favorites) => {
    const namesOnly = favorites.map((recipe) => {

        return recipe.name
    })
    return namesOnly;
}

// Task: 8. edit a recipe - change the name
const editRecipe = (recipes, oldName, newName) => {
    const recipeWithNewName = recipes.map((recipe) => {
        if (recipe.name === oldName) {
            return recipe.name = newName;
        }

    })
    return recipeWithNewName;
}

// Task: 9. edit a recipe - make it vegan / make it non-vegan
const toggleVeganStatus = (recipes, recipeName) => {
    const changedVeganStatus = recipes.map((recipe) => {
        if (recipe.name === recipeName) {
            if (recipe.vegan === true) {
                recipe.vegan = false;
            } else {
                recipe.vegan = true;
            }

        }
        return recipe;
    })
    return changedVeganStatus;

}

// Task: 10. get one recipe by name - return the recipe that matches the exact name of the recipe
const searchByRecipeName = (recipes, recipeName) => {
    const recipesByName = recipes.find((recipe) => {
        if (recipe.name === recipeName) {
            return true;
        }

    })
    return recipesByName;
}

// Task: 11. search by ingredient name - return all recipes that contain a given ingredient name
const searchByIngredientName = (recipes, ingredientName) => {
    // use filter and again filter through the ingredients
}

// Task: 12. add an ingredient to a recipe
const addIngredient = (recipes, recipeName, ingredient) => {
    const foundRecipe = recipes.find((recipe) => {
        if (recipe.name === recipeName) {
            return true;
        }
        return recipe;
    })

    const updatedIngredient = foundRecipe.ingredients.push(ingredient);

    const updatedrecipes = recipes.map((recipe) => {
        if (recipe === foundRecipe) {
            recipe = foundRecipe;
        }
        return recipe;
    })

    return updatedrecipes;
}

// Task: 13. delete an ingredient from a recipe, 
const deleteIngredient = (recipes, recipeName, ingredientName) => {
    const foundRecipe = recipes.find((recipe) => {
        if (recipe.name === recipeName) {
            return true;
        }
        return recipe;
    })

    const updatedIngredient = foundRecipe.ingredients.filter((ingredient) => {
        if (ingredient.name === ingredientName) {
            return false
        }

        return true;
    })
    foundRecipe.ingredients = updatedIngredient;



    const updatedrecipes = recipes.map((recipe) => {
        if (recipe === foundRecipe) {
            recipe = foundRecipe;
        }
        return recipe;
    })

    return updatedrecipes;
}


// Task: 14. edit a recipe - change the quantity of an ingredient
const editIngredientQuantity = (recipes, recipeName, ingredientName, newQuantity) => {
    const updatedrecipes = recipes.map((recipe) => {
        if (recipe.name === recipeName) {
            const foundIngredient = recipe.ingredients.map((ingredient) => {
                if (ingredient.name === ingredientName) {
                    ingredient.quantity = newQuantity;
                }

                return ingredient;
            })
            return recipe;
        }
        return recipe;
    })

    return updatedrecipes;
}

// Task: 15. Execute the functions you implemented above as required below
const main = () => {
    let recipes = getRecipes();

    let favorites = [];



    // Task: 15.1
    // Add the following recipes to the recipes array using the function from Task-1
    //    Lentil Bolognese, vegan, & Ingredients: 1 lentil; 3 tomatoes; 1 pasta; 1 onion
    //    Ozzo Chicken, non-vegan, & Ingredients: 1 spinach; 1 chicken; 1 sour cream
    // fill in the attributes
    const lentilBolognese = {
        name: "Lentil Bolognese",
        vegan: true,
        ingredients: [{
                name: "lentil",
                quantity: 1,
            },
            {
                name: "tomatoes",
                quantity: 3,
            },
            {
                name: "pasta",
                quantity: 1,
            },
            {
                name: "onion",
                quantity: 1,
            }
        ]
    };
    const OzzoChicken = {
        name: "Ozzo Chicken",
        vegan: false,
        ingredients: [{
                name: "spinach",
                quantity: 1,
            },
            {
                name: "chicken",
                quantity: 1,
            },
            {
                name: "sour cream",
                quantity: 1,
            }
        ]
    }
    recipes = addRecipe(recipes, lentilBolognese); // add ozzo chicken in a similar way


    // Task: 15.2
    // Delete the recipe named "carbonara" using the function from Task-2

    // Task: 15.3
    // Add ingredient "garlic with quantity: 3" to the recipe "salmon soup"
    // Add ingredient "lentil with quantity: 1" to the recipe "rice bowl"

    // Task: 15.4
    // Delete ingredient named "water" from the recipe "rice bowl"

    // Task: 15.5
    // Get the recipe by the name "salmon soup" and Add it to favorites
    // Add the recipe that has the name "Ozzo Chicken" to favorites
    // Add the recipe that has the name "Lentil Bolognese" to favorites
    favorites = addToFavorites(favorites, lentilBolognese);

    // Task: 15.6
    // Delete the recipe "Lentil Bolognese" from the favorites

    // Task: 15.7
    // Change the name of the recipe "rice bowl" to "Japanese Rice Bowl"

    // Task: 15.8
    // change "Japanese Rice Bowl" to be vegan
    recipes = toggleVeganStatus(recipes, "Japanese Rice Bowl");

    // Task: 15.9
    // change the quantity of the Ingredient lentil to be 2, in  Lentil Bolognese

    // Task: 15.10
    // call the function you implemented on task-4 to get the list of ingredients of "salmon soup"
    // console.log these Ingredients
    // TEST 1: it should print these ingredients: salmon, cream, milk, garlic

    // Task: 15.11
    // console.log all the vegan recipes
    // TEST 2: It should print the recipe Japanese Rice Bowl and Lentil Bolognese

    // Task: 15.12
    // console.log all the recipes that contain the ingredient "lentil"
    // TEST 3: It should print the recipes Japanese Rice Bowl and Lentil Bolognese

    // Task: 15.12
    // console.log the favorites array
    // TEST 4: It should print the recipes "salmon soup" & "Ozzo Chicken"

    // Task: 15.13
    // console.log the recipes array
    // TEST 5: It should print an array of 4 recipes that matches expectedRecipesArray defined below
}


main();




// after executing main(), the recipes array should look like this..
const expectedRecipesArray = [{
    name: "salmon soup",
    vegan: false,
    ingredients: [{
        name: "salmon",
        quantity: 1,
    }, {
        name: "cream",
        quantity: 2,
    }, {
        name: "milk",
        quantity: 1,
    }, { // 1. verify ingredient garlic is added
        name: "garlic",
        quantity: 3,
    }]
}, {
    name: "Japanese Rice Bowl", // 2. verify name change from rice bowl
    vegan: true, // 3. verify that this recipe is vegan
    ingredients: [{
            name: "rice",
            quantity: 2,
        }, {
            name: "lentil", // 4. verify ingredient lentil is added
            quantity: 1,
        }] // 5. verify ingredient water is deleted from rice bowl
}, {
    name: "Lentil Bolognese", // 6. verify the recipe lentil bolognese is added
    vegan: true,
    ingredients: [{
        name: "lentil",
        quantity: 2, // 7. verify the quantity of lentil is changed from 1 to 2
    }, {
        name: "tomatoes",
        quantity: 3,
    }, {
        name: "pasta",
        quantity: 1,
    }, {
        name: "onion",
        quantity: 1,
    }]
}, { // 8. verify the recipe ozzo chicken is added
    name: "Ozzo Chicken",
    vegan: false,
    ingredients: [{
        name: "spinach",
        quantity: 1,
    }, {
        name: "chicken",
        quantity: 1,
    }, {
        name: "sour cream",
        quantity: 1,
    }]
}];