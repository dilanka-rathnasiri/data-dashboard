import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../models/person";
import {DataService} from "../services/data.service";
import {SpinnerComponent} from "../spinner/spinner.component";
import { ErrorBannerComponent } from "../error-banner/error-banner.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-data-view',
    imports: [
    SpinnerComponent,
    ErrorBannerComponent,
    FormsModule
],
    templateUrl: './data-view.component.html'
})
export class DataViewComponent implements OnInit {
    @Input() urlId: string = 'home';
    data: Person[] = [];
    filteredData: Person[] = [];
    isLoading: boolean = true;
    errorMessage!: string;

    filters = {
        n: '',
        id: '',
        name: '',
        address: '',
        birthDate: '',
        email: ''
    };

    constructor(private dataService: DataService) {
    }

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
            }
        });
    }

    applyFilters() {
        this.filteredData = this.data.filter(person => {
            return Object.keys(this.filters).every(key => {
                const filterValue = this.filters[key as keyof Person].toLowerCase();
                const personValue = (person[key as keyof Person] || '').toString().toLowerCase();
                return personValue.includes(filterValue);
            });
        });
    }
}
