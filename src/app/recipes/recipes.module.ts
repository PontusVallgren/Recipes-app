import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListModule } from '../shopping-list/shopping-list.module';
import { RecipeDefaultComponent } from './recipe-default/recipe-default.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeDefaultComponent,
    RecipeEditComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    ShoppingListModule,
  ],
})
export class RecipesModule {}
