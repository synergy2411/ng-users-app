import { FilterPipe } from './../pipes/filter.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  
  filteredStatus : string = "";

  todos = [{
    label : "Some Task",
    status : "done"
  },{
    label : "New Task",
    status : "pending"
  },{
    label : "Some Task",
    status : "done"
  },{
    label : "New Task",
    status : "pending"
  }]
  
  // filterPipe = new FilterPipe();

  onAddNewTodo(){
    this.todos.push({label : "New Task", status : "pending"});
    // this.filterPipe.transform(this.todos, this.filteredStatus, 'status');
  }

  contact_no : string = "987654321";
  promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Here comes the Data...");
    }, 3000);
  });

  constructor() { }

  ngOnInit() {
  }

}
