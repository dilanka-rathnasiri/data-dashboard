import {Component, OnInit} from '@angular/core';
import {DataViewComponent} from "../data-view/data-view.component";
import {DataService} from "../services/data.service";
import {Person} from "../models/person";

@Component({
    selector: 'app-home',
    imports: [
        DataViewComponent
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    data!: Person[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.callBackendApi("home").subscribe((value: Person[]) => {
            this.data = value;
        });
    }
}
