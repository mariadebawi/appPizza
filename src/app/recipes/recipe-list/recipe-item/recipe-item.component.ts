import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe-list/recipe.model' ;
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe = Recipe ;

  @Output() RecipeSelected = new EventEmitter<void>() ;

  constructor() { }
  ngOnInit() {
  }

  OnSelect(){
    this.RecipeSelected.emit();
  }

}
