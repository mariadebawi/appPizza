import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ShoppingService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ShoppingService.getListShopping() ;
    
    this.ShoppingService.ingredientChanged.subscribe(
      (ingredients : Ingredient[]) => {this.ingredients = ingredients}
      ) ;
  }

 /* onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  */


  OnEditItem(index : number){
    this.ShoppingService.startEditing.next(index) ;
  }
}
