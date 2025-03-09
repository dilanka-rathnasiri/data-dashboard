import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData("home").subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
