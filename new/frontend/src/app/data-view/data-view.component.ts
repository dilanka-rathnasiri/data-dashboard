import {Component, Input} from '@angular/core';
import {Person} from "../models/person";

@Component({
    selector: 'app-data-view',
    imports: [],
    templateUrl: './data-view.component.html'
})
export class DataViewComponent {
    @Input() data: Person[] = [];
}
