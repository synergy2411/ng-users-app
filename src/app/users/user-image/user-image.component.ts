import { IUser } from './../../model/user.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent {

  @Input('user') user: IUser;
  @Output('childEvent') childEvent = new EventEmitter<IUser>();

  onClick(user: IUser){
    this.childEvent.emit(user);
  }

  // moreInfo(user: any) {
  //   alert(`${user.firstName} is working with ${user.company}!!`);
  // }

}
