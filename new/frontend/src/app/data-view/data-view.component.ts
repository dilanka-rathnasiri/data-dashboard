import { Component } from '@angular/core';
import {Person} from "../models/person";
import {mockData} from "../data/mockData";

@Component({
  selector: 'app-data-view',
  imports: [],
  templateUrl: './data-view.component.html'
})
export class DataViewComponent {
  data: Person[] = mockData;
}
