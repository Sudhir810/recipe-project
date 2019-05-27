import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipiesComponent } from './recipies.component';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipiesComponent,
    SelectRecipeComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}
