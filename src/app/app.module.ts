
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserVoteComponent } from './users/user-vote/user-vote.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent, 
    UsersComponent, 
    UserImageComponent, 
    UserInfoComponent, 
    UserVoteComponent,
    HighlightDirective,
    UnlessDirective,
    LoginComponent,
    RegisterComponent
  ],
  imports: [          // Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule     
  ],
  providers: [],      // Services
  // bootstrap: [AppComponent, UsersComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }


// ng g c auth/register --spec=false