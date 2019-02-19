import { USER_DATA } from './../model/mocks';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { IUser } from './../model/user.model';


@Component({
    selector: "app-users",
    templateUrl: './users.component.html',
    styles: [`
    h1{
        color : yellow;
    }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent implements OnInit {
    // DoCheck, 
    // OnChanges,
    // AfterContentInit, 
    // AfterContentChecked, 
    // AfterViewInit, 
    // AfterViewChecked, 
    // OnDestroy{

    @Input('title') title: string;
    users: IUser[];

    constructor() {
        console.log("Constructor");
        // this.user = USER_DATA;
    }

    ngOnInit() {
        // console.log("ngOnInit");
        this.users = USER_DATA;
        console.log(this.users);
        // setTimeout(()=>{
        //     console.log("ngOnInit"); 
        // }, 2000);
    }
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log("ngOnChanges", changes);
    // }
    // ngDoCheck() { console.log("ngDoCheck"); }
    // ngAfterContentInit() { console.log("ngAfterContentInit"); }
    // ngAfterContentChecked() { console.log("ngAfterContentChecked"); }
    // ngAfterViewInit() { console.log("ngAfterViewInit"); }
    // ngAfterViewChecked() { console.log("ngAfterViewChecked"); }
    // ngOnDestroy() { console.log("ngOnDestroy"); }

    moreInfo(user: IUser) {
        alert(`From Parent : ${user.firstName} is working with ${user.company}!!`);
    }


    onChange(event: any) {
        // this.users.vote = event.target.value;
    }


}