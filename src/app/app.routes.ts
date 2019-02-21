import { LoginComponent } from './auth/login/login.component';
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { RegisterComponent } from './auth/register/register.component';

export const APP_ROUTES : Routes = [{
    path : '',                  //http://localhost:4200
    redirectTo : 'login',
    pathMatch : 'full'
},{
    path : 'login',                 //http://localhost:4200/login
    component : LoginComponent
}, {
    path : 'users',             //http://localhost:4200/users
    component : UsersComponent
}, {
    path : 'pipe',              //http://localhost:4200/pipe
    component : PipeDemoComponent
}, {
    path : 'observable',        //http://localhost:4200/observable
    component : ObservableDemoComponent
}, {
    path : 'register',             //http://localhost:4200/register
    component : RegisterComponent
}, {
    path : '**',                       //http://localhost:4200/notexist
    redirectTo : 'login',
    pathMatch : 'full'
}]