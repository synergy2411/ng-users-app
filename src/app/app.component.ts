import { SharedService } from './shared/shared.service';
import { AuthService } from './services/auth.service';
import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection : ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title: string = "Angular";

  jsSnippets = "JavaScript Template <script>alert('Hello There')</script>";

  constructor(public dataService: DataService,
              public authService: AuthService,
              public sharedService : SharedService,
              public sanitize : DomSanitizer,
              public cdRef : ChangeDetectorRef) { 
                // this.sanitize.
                // this.cdRef.
              }

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