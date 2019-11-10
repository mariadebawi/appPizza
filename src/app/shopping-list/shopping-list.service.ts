import { EventEmitter } from '@angular/core';

import { Subject } from 'rxjs/Subject'

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
   ingredientChanged  = new EventEmitter<Ingredient[]>();

   startEditing = new Subject<number>() ;
   

   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getListShopping(){
        return this.ingredients.slice();
    }

    getIngredientIndex( index : number ){
      return this.ingredients[index]
    }

    
    
    
     AddIngredient (ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice()) ;
  }

     AddIngredients (ingredient: Ingredient[]) {
      this.ingredients.push(...ingredient) //way to pusg an array
      this.ingredientChanged.emit(this.ingredients.slice()) ;

  } 

  updateIngredient(index : number , newIngredient: Ingredient){
    this.ingredients[index] = newIngredient ;
    this.ingredientChanged.emit(this.ingredients.slice()) ;
  }

  DeleteIngredient(index : number ){
    this.ingredients.splice(index , 1) ;
    this.ingredientChanged.emit(this.ingredients.slice()) ;
  }


}