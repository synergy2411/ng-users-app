import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-vote',
  templateUrl: './user-vote.component.html',
  styleUrls: ['./user-vote.component.css']
})
export class UserVoteComponent implements OnInit {

  @Input('user') user : any;

  constructor() { }

  ngOnInit() {
  }

}
