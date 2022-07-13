import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsUpdate = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();
  private shoppingList: Ingredients[] = [
    new Ingredients('tomat', 5),
    new Ingredients('Gurka', 15),
  ];

  getShoppingList() {
    return this.shoppingList.slice();
  }

  getIngredient(index: number) {
    return this.shoppingList[index];
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

  updateIngredient(index: number, newIngredient: Ingredients) {
    this.shoppingList[index] = newIngredient;
    this.ingredientsUpdate.next(this.shoppingList.slice());
  }

  deleteIngredient(index: number) {
    this.shoppingList.splice(index, 1);
    this.ingredientsUpdate.next(this.shoppingList.slice());
  }

  constructor() {}
}
