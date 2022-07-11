import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes = [
    new Recipe(
      'A Pasta Recipe',
      'This is simply a test',
      'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg',
      [new Ingredients('Pasta', 5), new Ingredients('Tomato', 2)]
    ),
    new Recipe(
      'Smashburger Recipe',
      'This is simply a test',
      'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg',
      [new Ingredients('högrev', 200), new Ingredients('onion', 2)]
    ),
  ];

  constructor() {}

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
