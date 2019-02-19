import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onLogin(form: NgForm) {
    console.log("[Login] : ", form);
  }

  constructor() { }

  ngOnInit() {
  }

}


//ng g c auth/login --spec =false