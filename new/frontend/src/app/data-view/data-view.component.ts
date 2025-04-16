import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../models/person";
import {DataService} from "../services/data.service";
import {SpinnerComponent} from "../spinner/spinner.component";
import { ErrorBannerComponent } from "../error-banner/error-banner.component";

@Component({
    selector: 'app-data-view',
    imports: [
    SpinnerComponent,
    ErrorBannerComponent
],
    templateUrl: './data-view.component.html'
})
export class DataViewComponent implements OnInit {
    @Input() urlId: string = 'home';
    data: Person[] = [];
    isLoading: boolean = true;
    errorMessage!: string;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.callBackendApi(this.urlId).subscribe({
            next: (data) => {
                this.data = data
                this.isLoading = false
            },
            error: (e) => {
                console.error(e)
                this.errorMessage = e.message
                this.isLoading = false
            }
        })
    }
}
