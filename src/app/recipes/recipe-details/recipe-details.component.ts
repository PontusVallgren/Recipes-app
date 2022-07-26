import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

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
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipe = this.recipesService.getRecipe(params.id);
    });
  }

  onAddToSL() {
    // this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
