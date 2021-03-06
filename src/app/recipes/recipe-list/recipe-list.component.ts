import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] ;


  constructor( private RecipeService : RecipeService , private route : Router , private routerActiv : ActivatedRoute) {
   
   }

  ngOnInit() {
    //console.log(this.RecipeService.getRecipe()) ;
     this.recipes = this.RecipeService.getRecipe() ;
  }

  // onRecipeSelected(recipe: Recipe) {
  //  this.recipeWasSelected.emit(recipe);
  // }


  OnAddRecipe(){
   this.route.navigate(['new'] , {relativeTo : this.routerActiv})
  }
}
