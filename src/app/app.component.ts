import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title: string = "Angular";

  constructor(public dataService: DataService) { }

  onIncrease() {
    this.dataService.counter++;
  }
  
}
