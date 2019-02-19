import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserInfoComponent implements OnInit {

  @Input('user') user: any;
  myClasses = { 'border': true, 'feature': false }
  myStyles = {
    border : "2px grey dashed",
    color : "#ff45ff",
    "font-size" : "1.2em"
  }
  myColor = "#ff3345";

  onToggle(){
    this.myClasses.border = !this.myClasses.border;
    this.myClasses.feature = !this.myClasses.feature;
    this.myStyles['border'] = "2px yellow solid";
  }
  constructor() { }

  ngOnInit() {
  }

}
