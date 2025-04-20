import { Component } from '@angular/core';
import { DataViewComponent } from '../data-view/data-view.component';

@Component({
    selector: 'app-home',
    imports: [DataViewComponent],
    templateUrl: './home.component.html',
})
export class HomeComponent {}
