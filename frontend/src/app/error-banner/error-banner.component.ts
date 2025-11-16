import { Component, input, Input } from '@angular/core';

@Component({
    selector: 'app-error-banner',
    imports: [],
    templateUrl: './error-banner.component.html',
})
export class ErrorBannerComponent {
    errorMessage = input<string>('');
}
