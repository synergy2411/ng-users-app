import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  dataObservable = Observable.create((observer) =>{
    setTimeout(()=>{
      observer.next("First Package");
    }, 1000);
    setTimeout(()=>{
      observer.next("Second Package");
    }, 2000);
    setTimeout(()=>{
      // observer.next("Third Package");
      observer.error(new Error("Something Bad Happened!"));
    }, 3000);
    setTimeout(()=>{
      observer.complete();
    }, 4000);
   })

   unsub  : any;
   obsData : any;

   onSubscribe(){
    this.unsub =  this.dataObservable.subscribe(
       packages => this.obsData = packages,
       err => console.log("ERR : ", err),
       () => console.log("Observable Completed!")
       )
   }

   onUnsubscribe(){
     this.unsub.unsubscribe();
   }
  constructor() { 
    
  }

  ngOnInit() {
  }

}
