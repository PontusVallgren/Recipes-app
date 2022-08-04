import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';
import * as RecipeActions from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    // private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params.id;
    //   this.recipe = this.recipesService.getRecipe(params.id);
    // });
    this.route.params
      .pipe(
        map((params) => {
          return +params.id;
        }),
        switchMap((id) => {
          this.id = id;
          return this.store.select('recipe');
        }),
        map((recipeState) => {
          return recipeState.recipes.find((r, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe((recipe) => (this.recipe = recipe));
  }

  onAddToSL() {
    // this.shoppingListService.addIngredients(this.recipe.ingredients);
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(this.recipe.ingredients)
    );
  }

  onDelete() {
    // this.recipesService.deleteRecipe(this.id);
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}
