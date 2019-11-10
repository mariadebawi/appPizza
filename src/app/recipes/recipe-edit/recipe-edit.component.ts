import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number ;
  editMod = false ;

  constructor( private router : ActivatedRoute) { }

  //get the id 
  ngOnInit() {
     this.router.params.subscribe(
       (param : Params) => {
         this.id = param['id'] ;
         this.editMod = param['id'] != null  //false if param['id'] is undifined
         //console.log(this.id)
        }
     )
  }

}
