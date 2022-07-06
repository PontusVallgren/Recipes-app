import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput', {static: true}) nameInputRef: ElementRef
@ViewChild('amountInput', {static: true}) amountInputRef: ElementRef
@Output() addToShoppingList = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }
  onAdd() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingAmount);
    this.addToShoppingList.emit(newIngredient)
  }

}
