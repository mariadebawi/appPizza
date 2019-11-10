import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/dataStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor( private dataStorege : DataStorageService){}
 // @Output() featureSelected = new EventEmitter<string>();

 /* onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  */

 OnSaveData(){
    this.dataStorege.storeRecipe().subscribe(
      (response : Response) => {
        console.log(response)
      }
    ) ;
 }
} 
