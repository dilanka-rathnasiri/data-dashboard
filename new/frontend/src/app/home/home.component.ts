import {Component, OnInit} from '@angular/core';
import {DataViewComponent} from "../data-view/data-view.component";
import {DataService} from "../services/data.service";
import {Person} from "../models/person";
import {Observable} from "rxjs";

@Component({
    selector: 'app-home',
    imports: [
        DataViewComponent
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    data$!: Observable<Person[]>;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.data$ = this.dataService.callBackendApi("home");
    }
}
