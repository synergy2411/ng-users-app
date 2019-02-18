import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserVoteComponent } from './users/user-vote/user-vote.component';


@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent, 
    UsersComponent, 
    UserImageComponent, UserInfoComponent, UserVoteComponent
  ],
  imports: [          // Modules
    BrowserModule,
    FormsModule     
  ],
  providers: [],      // Services
  // bootstrap: [AppComponent, UsersComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
