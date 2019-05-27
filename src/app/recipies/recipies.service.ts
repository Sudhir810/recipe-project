import { Injectable } from '@angular/core'; //EventEmitter,
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipiesService {
  // recipeSelected = new EventEmitter<Recipe>();

  recipiesChanged = new Subject<Recipe[]>();
  private recipies: Recipe[]= [
    new Recipe(
    'Veg Noodles',
    'Super Tasty Veg Noodles must try.',
    'https://c1.staticflickr.com/3/2238/2370267634_b483a386a1_b.jpg',
    [
      new Ingredient('Noodles', 1),
      new Ingredient('Capsicum', 1)
    ]),
    new Recipe(
      'Barbeque Burger',
      'What else you need to say?',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQxUnsGBZGsur2gVKMx9EMTwnHlPrb33sSivziFBWd2xRUuq1xQ',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Cheese', 1)
      ]),
  ];

  constructor(private shopService: ShoppingService){}

  getRecipies() {
    return this.recipies.slice();
  }

  getRecipe(index: number){
    return this.recipies[index];
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shopService.onIngredientsAdded(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipies.push(recipe);
    this.recipiesChanged.next(this.recipies.slice());
  }

  updateRecipe(index: number,recipe: Recipe){
    this.recipies[index] = recipe;
    this.recipiesChanged.next(this.recipies.slice());
  }

  deleteRecipe(index: number){
    this.recipies.splice(index,1);
    this.recipiesChanged.next(this.recipies.slice());
  }

  setRecipe(recipe: Recipe[]) {
    this.recipies = recipe;
    this.recipiesChanged.next(this.recipies.slice());
  }
}
