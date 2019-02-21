import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-i-am-lazy',
  templateUrl: './i-am-lazy.component.html',
  styleUrls: ['./i-am-lazy.component.css']
})
export class IAmLazyComponent implements OnInit {

  ctr : number ;
  constructor(private dataService: DataService,
    public sharedService: SharedService) {
    console.log("[Counter]", this.dataService.counter);
    console.log("[CTR]", this.sharedService.ctr);
  }

  ngOnInit() {
    this.ctr = this.sharedService.ctr;
  }

}
