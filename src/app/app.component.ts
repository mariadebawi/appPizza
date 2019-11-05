import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  LoaderFeature = 'recipe'
  OnNavigate(feature : string){
    this.LoaderFeature = feature ;
  }
}





