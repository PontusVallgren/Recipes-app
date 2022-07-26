import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Ingredients } from 'src/app/shared/ingredients.model';
import * as shoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredients;

  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select('shoppingList')
      .subscribe((stateData) => {
        if (stateData.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = stateData.editedIngredient;
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        } else {
          this.editMode = false;
        }
      });
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(
        new shoppingListActions.UpdateIngredient(newIngredient)
      );
    } else {
      this.store.dispatch(new shoppingListActions.AddIngredient(newIngredient));
    }
    this.slForm.reset();
    this.editMode = false;
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new shoppingListActions.StopEdit());
  }

  onDelete() {
    this.store.dispatch(new shoppingListActions.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new shoppingListActions.StopEdit());
  }
}
