import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipiesService } from '../recipies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent implements OnInit , OnDestroy{
  recipies: Recipe[];
  subscription: Subscription;

  constructor(private recipiesService: RecipiesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipiesService.recipiesChanged.subscribe(
      (recipes: Recipe[]) =>{
        this.recipies  = recipes
      }
    );
    this.recipies = this.recipiesService.getRecipies();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
