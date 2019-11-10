import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';

import {NgForm} from '@angular/forms';


import { Subscription } from 'rxjs/Subscription';


import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
 // @ViewChild('nameInput') nameInputRef: ElementRef;
 // @ViewChild('amountInput') amountInputRef: ElementRef;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();
    EditIndex : number ;
    subscription : Subscription ;
    editMode = false ;

    editItem : Ingredient ;

    @ViewChild('f') SLForm: NgForm;

 constructor(private ShoppingService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.ShoppingService.startEditing.subscribe(
      (index : number) => {
        this.EditIndex = index ;
        this.editMode = true ;

        this.editItem = this.ShoppingService.getIngredientIndex(this.EditIndex) ;

        this.SLForm.setValue({
          name : this.editItem.name ,
          amount : this.editItem.amount
        }) ;
      }
    ) ;
  }

  onSubmit(form : NgForm) {
    const value =  form.value ;
    
    //const ingName = this.nameInputRef.nativeElement.value;
   // const ingAmount = this.amountInputRef.nativeElement.value;

     const newIngredient = new Ingredient(value.name, value.amount);
     this.ingredientAdded.emit(newIngredient);

      if(this.editMode) {
        this.ShoppingService.updateIngredient(this.EditIndex , newIngredient)
      }
      else {
        this.ShoppingService.AddIngredient(newIngredient) ;
      }

      this.editMode = false ;
      form.reset() ;
  }


  OnClear(){
    this.SLForm.reset() ;
    this.editMode = false ;
  }

  OnDelete(){
    this.ShoppingService.DeleteIngredient(this.EditIndex) ;
    this.OnClear() ;
  }


  ngOnDestroy(){
    this.subscription.unsubscribe() ;
  }
}
