import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeUpdate = new Subject<Recipe[]>();
  // private recipes = [
  //   new Recipe(
  //     'A Pasta Recipe',
  //     'This is simply a test',
  //     'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg',
  //     [new Ingredients('Pasta', 5), new Ingredients('Tomato', 2)]
  //   ),
  //   new Recipe(
  //     'Smashburger Recipe',
  //     'This is simply a test',
  //     'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg',
  //     [new Ingredients('högrev', 200), new Ingredients('onion', 2)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeUpdate.next(this.recipes.slice());
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipes(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeUpdate.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeUpdate.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeUpdate.next(this.recipes.slice());
  }
}
