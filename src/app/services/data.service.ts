import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { Http } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { IUser } from '../model/user.model';
// import {map} from 'rxjs/operators; 

@Injectable()
export class DataService{
    counter : number = 0;
    
    constructor(private http : Http,
                private httpClient : HttpClient,
                private authService : AuthService){}

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
        
        // return this.httpClient.get<IUser[]>("https://ng-users-app-fdc5f.firebaseio.com/userdata.json?auth="+this.authService.getToken());
        
        // return this.httpClient.get<IUser[]>("https://ng-users-app-fdc5f.firebaseio.com/userdata.json",{
        //     params : new HttpParams().set("auth", this.authService.getToken())
        //     // headers : new HttpHeaders().set()
        // });
        
        //.subscribe(userdata => console.log("[HTTP CLIENT]", userdata));
    }

}

