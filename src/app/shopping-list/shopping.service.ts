import { EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {

  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing  = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  onIngredientsAdded(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
