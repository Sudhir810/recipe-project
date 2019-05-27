import { Component, OnInit, Input,EventEmitter,Output} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeElement: Recipe;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();

  //constructor(private recipeService: RecipiesService) { }


  ngOnInit() {
  }

  // emitThisRecipe(){
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipeElement);
  // }

}
