import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.email,
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamation
  ]);
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password
    })
  }

  hasExclamation(input: FormControl) {
    const hasExclamation = input.value.indexOf("!") >= 0;
    return hasExclamation ? null : { 'needExclamation': true };
  }

  onRegister() {
    console.log("[REGISTER]", this.registerForm);
  }
  ngOnInit() {
  }

}
