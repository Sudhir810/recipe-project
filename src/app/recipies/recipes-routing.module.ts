import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { RecipiesComponent } from './recipies.component';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { AuthGuard } from '../auth/auth-guard.service';



const recipeRoutes: Routes =[
  { path: "",  component: RecipiesComponent, children:[
    { path: '', component:  SelectRecipeComponent},
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
  ] },
]

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
