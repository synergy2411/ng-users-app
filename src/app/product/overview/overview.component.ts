import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  id : number;
  product_name : string;

  constructor(private route : ActivatedRoute) {
    console.log(this.route.snapshot.params);
    // this.id = +this.route.snapshot.params['id'];
    // this.product_name = this.route.snapshot.params['prod_name'];

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.product_name = params['prod_name'];
    })

  }

  ngOnInit() {
  }

}
