import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-error-banner',
    imports: [],
    templateUrl: './error-banner.component.html',
})
export class ErrorBannerComponent {
    @Input() errorMessage: string = '';
}
