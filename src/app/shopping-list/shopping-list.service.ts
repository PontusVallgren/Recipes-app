import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsUpdate = new Subject<Ingredients[]>();
  private shoppingList: Ingredients[] = [
    new Ingredients('tomat', 5),
    new Ingredients('Gurka', 15),
  ];

  getShoppingList() {
    return this.shoppingList.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.shoppingList.push(ingredient);
    this.ingredientsUpdate.next(this.shoppingList.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    console.log(...ingredients);
    this.shoppingList.push(...ingredients);
    this.ingredientsUpdate.next(this.shoppingList.slice());
  }

  constructor() {}
}
