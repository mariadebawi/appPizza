import { Component, OnInit, ViewChild, ElementRef , EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/Ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent  {

@ViewChild('nameIngred') nameIngred : ElementRef ;
@ViewChild('AmountIngred') AmountIngred : ElementRef ;

@Output() IngredientAdd = new EventEmitter<Ingredient>();


  constructor() { }



  OnAddItem(){
   const nameIng = this.nameIngred.nativeElement.value ;
   const amountIng = this.AmountIngred.nativeElement.value ;
   const newIngredient = new Ingredient(nameIng , amountIng) ;
    this.IngredientAdd.emit(newIngredient) ;
  }

}
