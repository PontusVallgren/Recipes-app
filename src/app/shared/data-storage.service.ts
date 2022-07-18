import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private recipeService: RecipesService,
    private http: HttpClient
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(
        'https://food-planer-4b945-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log('save');
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://food-planer-4b945-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
    // .subscribe((recipes) => {
    //   this.recipeService.setRecipes(recipes);
    // });
  }
}
