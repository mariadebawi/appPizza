import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id : number ;

  constructor(private recipeService : RecipeService , private router : ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(
      (param : Params) => {
         this.id = +param['id'] ;
         this.recipe = this.recipeService.getRecipeIndex(this.id);
         }
      )
  }

  Addgredients(){
   this.recipeService.addTolistShop(this.recipe.ingredient)
  }
}
