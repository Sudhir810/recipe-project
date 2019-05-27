import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipiesService } from '../recipies.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {

  recipeElement: Recipe;
  id: number;

  constructor(private recipeService: RecipiesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.recipeElement = this.recipeService.getRecipe(this.id);
          }
        )
  }

  addtoShoppingList() {
    this.recipeService.sendIngredientsToShoppingList(this.recipeElement.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route} );
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }

}
