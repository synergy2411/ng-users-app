import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req : HttpRequest<any>, next : HttpHandler ) : Observable<HttpEvent<any>>{
    // console.log("Auth Interceptor Works!", req);
    
    let clonedReq = req.clone({
      params : new HttpParams().set("auth", this.authService.getToken())
    })
    
    return next.handle(clonedReq);

  }

  constructor(private authService : AuthService) { }

}
