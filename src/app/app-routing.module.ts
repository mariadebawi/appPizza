import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { CompAnimationComponent } from './comp-animation/comp-animation.component';

const appRoutes: Routes = [
  {path:'' , redirectTo : '/recipes' , pathMatch:'full'} ,
  {path:'recipes' , component: RecipesComponent , children: [
    {path:'' , component: RecipeStartComponent } ,
    {path:'new' , component: RecipeEditComponent }, 
    {path:':id' , component: RecipeDetailComponent },
    // new path  must be after id  path because id is a dynamic params 
    {path:':id/edit' , component: RecipeEditComponent },
  ]} ,
  {path:'shoppingList' , component: ShoppingListComponent} ,
  {path:'animation' , component: CompAnimationComponent} ,


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
