import { Component, OnInit,Input } from '@angular/core';
// import { Recipe } from './Recipe.model';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
})
export class RecipiesComponent implements OnInit {
  // recipeElement: Recipe;

  constructor() { } //private recipiesService :RecipiesService

  ngOnInit() {
    // this.recipiesService.recipeSelected.subscribe((recipe:Recipe) => {
    //   this.recipeElement = recipe;
    // })
  }

  // displayThisRecipe(recipe:Recipe){
  //   // this.recipeElement = recipe;
  // }


}
