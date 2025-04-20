import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { DataService } from '../services/data.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ErrorBannerComponent } from '../error-banner/error-banner.component';
import { QuickFiltersComponent } from '../quick-filters/quick-filters.component';

@Component({
    selector: 'app-data-view',
    standalone: true,
    imports: [SpinnerComponent, ErrorBannerComponent, QuickFiltersComponent],
    templateUrl: './data-view.component.html',
})
export class DataViewComponent implements OnInit {
    @Input() urlId: string = 'home';
    data: Person[] = [];
    filteredData: Person[] = [];
    isLoading: boolean = true;
    errorMessage!: string;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.callBackendApi(this.urlId).subscribe({
            next: (data) => {
                this.data = data;
                this.filteredData = data;
                this.isLoading = false;
            },
            error: (e) => {
                console.error(e);
                this.errorMessage = e.message;
                this.isLoading = false;
            },
        });
    }

    onFilteredDataChange(filteredData: Person[]) {
        this.filteredData = filteredData;
    }
}
