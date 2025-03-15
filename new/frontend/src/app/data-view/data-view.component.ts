import {Component, Input} from '@angular/core';
import {Person} from "../models/person";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-data-view',
    imports: [
        AsyncPipe
    ],
    templateUrl: './data-view.component.html'
})
export class DataViewComponent {
    @Input() data$!: Observable<Person[]>;
}
