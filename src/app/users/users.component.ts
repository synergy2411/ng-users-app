import { Component, Input } from '@angular/core';


@Component({
    selector : "app-users",
    templateUrl : './users.component.html'
    // template : `
    //     <div> 
    //         <h2> Users component loaded successfully.</h2>
    //     </div>
    // `
})
export class UsersComponent{

    @Input('title') title : string;

    moreInfo(user : any){
        alert(`${user.firstName} is working with ${user.company}!!`);
    }

    onChange(event){
        this.user.vote = event.target.value;
    }
    
    user = {
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date("Dec 21, 1965"),
        isWorking : true,
        income : 50000,
        company : "Microsoft",
        image : "assets/images/bill.jpg",
        vote : 120
    }
}