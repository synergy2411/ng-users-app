import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  page_number : number;

  constructor(private route : ActivatedRoute) { 
    this.route.queryParams.subscribe(params =>{
      this.page_number = +params['page_no'];
      console.log("[PAGE NUMBER]", this.page_number)
    })
  }

  ngOnInit() {
  }

}
