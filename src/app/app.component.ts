import { Component,ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses=["Python","Angular","Machine Learning","Aws","DevOps"]
  // @ViewChild('clickHoverMenuTrigger') clickHoverMenuTrigger: MatMenuTrigger;
  
  // selected=false;
  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
  // callMe()
  // {
  //   this.selected=true;
  //   this.clickHoverMenuTrigger.openMenu();
  // }
  // openOnMouseOver() {
  //   this.clickHoverMenuTrigger.openMenu();
  // }
}
