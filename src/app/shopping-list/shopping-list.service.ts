import { EventEmitter } from '@angular/core';


import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
   ingredientChanged  = new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getListShopping(){
        return this.ingredients.slice();
    }
    

    
     AddIngredient (ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice()) ;
  }

  AddIngredients (ingredient: Ingredient[]) {
      this.ingredients.push(...ingredient) //way to pusg an array
      this.ingredientChanged.emit(this.ingredients.slice()) ;

  } 

}