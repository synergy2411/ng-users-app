import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class LoggerInterceptorService implements HttpInterceptor {

  intercept(req : HttpRequest<any>, next : HttpHandler ) : Observable<HttpEvent<any>>{
    
    return next.handle(req)
      .do(response =>{
        console.log("[RESPONSE]", response);
        return response;
      });

  }
}
