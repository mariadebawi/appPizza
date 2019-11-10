import { EventEmitter, Injectable } from '@angular/core';


import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable() // withouth injectable we can't inject to another service from onother folder 

export class  RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [

        new Recipe('A Test Recipe', 
        'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg' ,
        [new Ingredient('Apples', 5) , new Ingredient('Apples', 5)  , new Ingredient('Apples', 5)]   ),

         new Recipe('Another Test Recipe',
          'This is simply a test',
           'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('tomatos', 10) , new Ingredient('tomatos', 10) , new Ingredient('tomatos', 10)]  )
      ];

  constructor(private ShoppingListService : ShoppingListService) {

  }

/*setRecipe( recipes : Recipe[] ){
  this.recipes = recipes ;

}
*/
 getRecipe(){
     return this.recipes.slice();
 }


   addTolistShop(ingredient : Ingredient[]){
      this.ShoppingListService.AddIngredients(ingredient)
    }

   getRecipeIndex(index : number){
     return this.recipes[index] ;
  }
}