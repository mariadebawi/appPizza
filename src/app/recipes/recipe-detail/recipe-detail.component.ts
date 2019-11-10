import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


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

  constructor(private recipeService : RecipeService , private routerActiv : ActivatedRoute , private route : Router) { }

  ngOnInit() {
    //get and update the index path child id
    this.routerActiv.params.subscribe(
      (param : Params) => {
         this.id = +param['id'] ; // + convert the string to a number
         this.recipe = this.recipeService.getRecipeIndex(this.id);
         }
      )
  }

  Addgredients(){
   this.recipeService.addTolistShop(this.recipe.ingredient)
  }

  OnEditRecipe(){
     this.route.navigate(['edit'], {relativeTo : this.routerActiv}) ;
  }
}
