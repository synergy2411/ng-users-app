import { AuthService } from './../../services/auth.service';
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
    this.authService.onLogin(
        form.value.username, 
        form.value.password
        );
  }

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

}


//ng g c auth/login --spec =false