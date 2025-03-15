import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../models/person";
import {DataService} from "../services/data.service";
import {SpinnerComponent} from "../spinner/spinner.component";

@Component({
    selector: 'app-data-view',
    imports: [
        SpinnerComponent
    ],
    templateUrl: './data-view.component.html'
})
export class DataViewComponent implements OnInit {
    @Input() urlId: string = 'home';
    data: Person[] = [];
    isLoading: boolean = true;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.callBackendApi(this.urlId).subscribe(data => {
            this.data = data;
            this.isLoading = false;
        });
    }
}
