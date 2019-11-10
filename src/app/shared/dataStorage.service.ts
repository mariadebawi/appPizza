import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

//import { Http } from '@angular/http';

@Injectable()
export class DataStorageService {
   constructor(private http: HttpClient , private ServiceRecipe : RecipeService) {
      
   }

   storeRecipe(){
       return this.http.put('https://ng-recipe-book-e7a44.firebaseio.com/recipes.json' , this.ServiceRecipe.getRecipe()) ;
   }

}