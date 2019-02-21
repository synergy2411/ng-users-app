import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token = null;

  onRegister(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => console.log("[REGISTER]", response))
      .catch(err => console.log(err));
  }

  onLogin(email : string, password : string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['users']);
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log("[TOKEN]", token);
            this.token = token;
            // localStorage.setItem("token", token);
          })
        console.log("[LOGGED IN]");
      })
      .catch(err => console.log(err));
  }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  onLogout(){
    firebase.auth().signOut()
      .then(response => {
        this.token = null;
        console.log("[SIGNOUT]");
        this.router.navigate(['login']);
      });
  }

  constructor(private router : Router) { }

}
