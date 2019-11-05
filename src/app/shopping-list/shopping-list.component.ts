import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingredients : Ingredient[] = [ 
    new Ingredient('orange' , 5) ,
    new Ingredient('Tomatos' , 20) ,
   ] ;
  constructor() { }



  OnAddIngredient(Ig : Ingredient){
    this.Ingredients.push(Ig) ;
  }


}


