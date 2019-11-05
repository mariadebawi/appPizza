import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Recipe} from './recipe.model' ;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  Recipes : Recipe [] = [
     new Recipe('pizza', 'delicious' , 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2F509a5313-6545-4cb1-ad93-af5895dd35b6.2Ejpeg/748x372/quality/80/crop-from/center/pizza-royale.jpeg'),
    
    ];
  
    @Output() RecipeWasSelected = new EventEmitter<Recipe>() ;

  constructor() { }

  ngOnInit() {
  }

  OnRecipeSelect(recipe : Recipe  ){
   this.RecipeWasSelected.emit(recipe) ;
   //console.log(recipe)
  }
}
