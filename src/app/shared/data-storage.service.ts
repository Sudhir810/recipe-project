import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { RecipiesService } from '../recipies/recipies.service'
import { Recipe } from '../recipies/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipiesService,
              private authService: AuthService) {}

  storeRecipies(){
    const token = this.authService.getToken();
    return this.httpClient.put('https://ng-recipe-book-91ca4.firebaseio.com/recipe.json?auth='
      + token,
      this.recipeService.getRecipies());
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-91ca4.firebaseio.com/recipe.json?auth=' + token)
    .map(
      // (response: Response) =>{
      (data) => {
        // const data: Recipe[] = response.json();
        for(let recipe of data){
          if(!recipe['ingredients']){
            recipe['ingredients'] = [];
          }
        }
        return data;
      }
    )
      .subscribe(
        (recipies: Recipe[]) => {
          this.recipeService.setRecipe(recipies);
        }
      );
  }

}
