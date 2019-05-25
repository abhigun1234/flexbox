import { Component, OnInit,ViewChild } from '@angular/core';
  import {MatMenuTrigger} from '@angular/material/menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('clickHoverMenuTrigger') clickHoverMenuTrigger: MatMenuTrigger;
  constructor() { }

  ngOnInit() {
  }
  openOnMouseOver() {
    this.clickHoverMenuTrigger.openMenu();
  }
}
