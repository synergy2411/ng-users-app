import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { IUser } from '../model/user.model';
// import {map} from 'rxjs/operators; 

@Injectable()
export class DataService{
    counter : number = 0;
    
    constructor(private http : Http,
                private httpClient : HttpClient){}

    getUserData(){
        return USER_DATA;
    }

    getJsonUserData(){
        // this.http.get()
        // this.http.get("")
        //     .map(res =>res.json())
        //     .subscribe(response => console.log("[RES : ]", response));

        return this.http.get("assets/model/user-data.json")
            .map(response => <IUser[]> response.json().userdata);
        
        // return this.http.get("assets/model/user-data.json")
        //     .pipe(map(response => <IUser[]> response.json().userdata))
            

            // .subscribe(userdata => console.log("[USER_DATA]", userdata));
    }

    getHttpClientUserData(){
        return this.httpClient.get<IUser[]>("https://ng-users-app-fdc5f.firebaseio.com/userdata.json");
            //.subscribe(userdata => console.log("[HTTP CLIENT]", userdata));
    }


}

// npm i rxjs-compat --save