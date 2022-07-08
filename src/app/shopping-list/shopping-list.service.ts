import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsUpdate = new EventEmitter<Ingredients[]>();
  private shoppingList: Ingredients[] = [
    new Ingredients('tomat', 5),
    new Ingredients('Gurka', 15),
  ];

  getShoppingList() {
    return this.shoppingList.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.shoppingList.push(ingredient);
    this.ingredientsUpdate.emit(this.shoppingList.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    console.log(...ingredients);
    this.shoppingList.push(...ingredients);
    this.ingredientsUpdate.emit(this.shoppingList.slice());
  }

  constructor() {}
}
