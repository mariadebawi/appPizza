import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-comp-animation',
  templateUrl: './comp-animation.component.html',
  styleUrls: ['./comp-animation.component.css'] ,
  animations : [
    trigger('divState' , [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) '
      })) ,
      state('hiii', style({
        'background-color': 'blue',
        transform : 'TranslateX(100px) '
      })) 
    ]) ,
    trigger('wildState' , [ 
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })) ,
      state('hiii', style({
        'background-color': 'blue',
        transform : 'TranslateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'blue',
        transform : 'TranslateX(0) scale(0.5)'
      })) , 
      transition ('normal => hiii' , animate(300)) ,
      transition ('hiii => normal' , animate(800)) ,
      transition ('shrunken <=> *' , animate(500 , style({
        borderRadius: '50px'
      }))) ,

    ])
  ]
  
})
export class CompAnimationComponent  {

  constructor() { }
  state = "normal" ;
  wildState = "normal" ;
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate(){
    this.state == "normal" ? this.state = "hiii" : this.state = "normal"  ;
    this.wildState == "normal" ? this.wildState = "hiii" : this.wildState = "normal"  ;

  }
  onShrink(){
    this.wildState = "shrunken" ;
  }
}
