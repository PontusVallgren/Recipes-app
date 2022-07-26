import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';

import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as shoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredients[] }>;
  private subscription: Subscription;
  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
  }
  ngOnDestroy(): void {}

  onEditItem(index: number) {
    console.log(index);
    this.store.dispatch(new shoppingListActions.StartEdit(index));
  }
}
