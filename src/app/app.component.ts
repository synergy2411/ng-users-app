import { SharedService } from './shared/shared.service';
import { AuthService } from './services/auth.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title: string = "Angular";

  constructor(public dataService: DataService,
              public authService: AuthService,
              public sharedService : SharedService) { }

  onLogout(){
    this.authService.onLogout();
  }
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAxJ_T_9yUqcewAH2KtSMoUqbXKvcbOseI",
      authDomain: "ng-users-app-fdc5f.firebaseapp.com"
    });
  }

  onIncrease() {
    this.dataService.counter++;
    this.sharedService.ctr++;
  }

}
//npm install firebase --save