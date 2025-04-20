import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../models/person';

@Component({
    selector: 'app-quick-filters',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './quick-filters.component.html',
})
export class QuickFiltersComponent {
    @Input() data: Person[] = [];
    @Output() filteredDataChange = new EventEmitter<Person[]>();

    filters = {
        n: '',
        id: '',
        name: '',
        address: '',
        birthDate: '',
        email: '',
    };

    applyFilters() {
        const filteredData = this.data.filter((person) => {
            return Object.keys(this.filters).every((key) => {
                const filterValue = this.filters[key as keyof Person].toLowerCase();
                const personValue = (person[key as keyof Person] || '').toString().toLowerCase();
                return personValue.includes(filterValue);
            });
        });
        this.filteredDataChange.emit(filteredData);
    }
}
