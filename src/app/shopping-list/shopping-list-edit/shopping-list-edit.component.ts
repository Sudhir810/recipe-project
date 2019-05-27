import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing
        .subscribe(
          (index: number) =>{
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.shoppingService.getIngredient(this.editedItemIndex);
            this.slForm.setValue({
              ingredientName: this.editedItem.name,
              amount: this.editedItem.amount
            })
          }
        )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm){
    const newIngredient = new Ingredient(form.value.ingredientName, form.value.amount);
    if(this.editMode){
      console.log("Editing", this.editedItemIndex, newIngredient);
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient)
    }else{
      const newIngredient = new Ingredient(form.value.ingredientName, form.value.amount);
      this.shoppingService.onIngredientAdded(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  // onAddItem(){
  //   // const ingName   = this.nameInputRef.nativeElement.value;
  //   // const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmount);
  //   this.shoppingService.onIngredientAdded(newIngredient);
  //   // this.ingredientAdded.emit(newIngredient);
  // }
}
