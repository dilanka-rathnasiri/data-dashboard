import {Component} from '@angular/core';
import {DataViewComponent} from "../data-view/data-view.component";
import {mockData} from "../data/mockData";

@Component({
    selector: 'app-home',
    imports: [
        DataViewComponent
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    protected readonly mockData = mockData;
}
