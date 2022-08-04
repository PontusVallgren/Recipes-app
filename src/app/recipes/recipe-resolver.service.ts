import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as RecipeActions from '../recipes/store/recipe.actions';
import { Actions, ofType } from '@ngrx/effects';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    // const recipes = this.recipesService.getRecipes();
    // if (recipes.length === 0) {
    //   return this.dataStorageSerice.fetchRecipes();
    // } else {
    //   return recipes;
    // }
    return this.store.select('recipe').pipe(
      take(1),
      map((recipeState) => {
        return recipeState.recipes;
      }),
      switchMap((recipes) => {
        if (recipes.length === 0) {
          this.store.dispatch(new RecipeActions.fetchRecipes());
          return this.actions$.pipe(ofType(RecipeActions.SET_RECIPES), take(1));
        } else {
          return of(recipes);
        }
      })
    );
  }
}
